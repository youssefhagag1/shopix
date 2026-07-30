import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { Stripe } from "stripe";
import { Metadata } from "@/actions/createCheckOut";
import { stripe } from "@/lib/stripe";
import { backendClient } from "@/sanity/lib/backendClient";

export async function POST(req: NextRequest) {
  const body = await req.text();

  const headerList = await headers();
  const sig = headerList.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 },
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Missing Stripe webhook secret" },
      { status: 500 },
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (error) {
    console.error("Error verifying webhook signature:", error);

    return NextResponse.json(
      { error: "Invalid Stripe signature" },
      { status: 400 },
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const invoice = session.invoice
      ? await stripe.invoices.retrieve(session.invoice as string)
      : null;

    try {
      await createOrderInSanity(session, invoice);

      return NextResponse.json({ received: true });
    } catch (error) {
      console.error("Error creating order in Sanity:", error);

      return NextResponse.json(
        { error: "Error creating order in Sanity" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ received: true });
}

async function createOrderInSanity(
  session: Stripe.Checkout.Session,
  invoice: Stripe.Invoice | null,
) {
  const {
    id,
    amount_total,
    currency,
    metadata,
    payment_intent,
    total_details,
  } = session;

  const { orderNumber, customerName, customerEmail, clerkUserId, address } =
    metadata as Metadata & {
      address: string | null;
      clerkUserId: string;
    };

  const parsedAddress = address ? JSON.parse(address) : null;

  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    {
      expand: ["data.price.product"],
    },
  );

  const sanityProducts: {
    _key: string;
    product: {
      _type: "reference";
      _ref: string;
    };
    quantity: number;
  }[] = [];

  const stockUpdates: {
    productId: string;
    quantity: number;
  }[] = [];

  for (const item of lineItemsWithProduct.data) {
    const productId = (item.price?.product as Stripe.Product)?.metadata?.id;
    const quantity = item.quantity ?? 0;

    if (!productId) continue;

    sanityProducts.push({
      _key: crypto.randomUUID(),
      product: {
        _type: "reference",
        _ref: productId,
      },
      quantity,
    });

    stockUpdates.push({
      productId,
      quantity,
    });
  }

  const order = await backendClient.create({
    _type: "order",

    orderNumber,

    stripeCheckoutSessionId: id,
    stripePaymentIntentId: payment_intent as string,

    customerName,
    stripeCustomerId: session.customer as string,
    clerkUserId,
    email: customerEmail,

    currency,

    amountDiscount: total_details?.amount_discount
      ? total_details.amount_discount / 100
      : 0,

    products: sanityProducts,

    totalPrice: amount_total ? amount_total / 100 : 0,

    status: "paid",

    orderDate: new Date().toISOString(),

    invoice: invoice
      ? {
          id: invoice.id,
          number: invoice.number,
          hosted_invoice_url: invoice.hosted_invoice_url,
        }
      : null,

    address: parsedAddress
      ? {
          state: parsedAddress.state,
          zip: parsedAddress.zip,
          city: parsedAddress.city,
          address: parsedAddress.address,
          name: parsedAddress.name,
        }
      : null,
  });

  await updateStockLevels(stockUpdates);

  return order;
}

async function updateStockLevels(
  stockUpdates: { productId: string; quantity: number }[],
) {
  for (const { productId, quantity } of stockUpdates) {
    try {
      // Fetch current product
      const product = await backendClient.getDocument(productId);

      if (!product || typeof product.stock !== "number") {
        console.warn(
          `Product with ID ${productId} not found or stock is invalid.`,
        );
        continue;
      }

      const newStock = Math.max(product.stock - quantity, 0);

      // Update stock in Sanity
      await backendClient
        .patch(productId)
        .set({
          stock: newStock,
        })
        .commit();
    } catch (error) {
      console.error(`Failed to update stock for product ${productId}:`, error);
    }
  }
}
