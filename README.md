# Shopix - E-Commerce Platform

A modern, full-featured e-commerce platform built with **Next.js 16**, **Sanity CMS**, **Stripe**, and **Clerk Authentication**.

## 🚀 Features

### 🛒 Shopping Experience
- **Product Catalog** — Browse products by category, brand, or search
- **Product Filtering** — Filter by category, brand, and price range
- **Product Variants** — Support for gadgets, appliances, refrigerators, and more
- **Wishlist** — Save products to your wishlist for later
- **Shopping Cart** — Add/remove items, adjust quantities
- **Checkout** — Seamless Stripe-powered checkout with invoice generation

### 🔐 Authentication & User Management
- **Clerk Authentication** — Secure sign-in/sign-up with social providers
- **User Dashboard** — View order history and order details
- **Protected Routes** — Cart, orders, and wishlist are user-specific

### 📦 Order Management
- **Order Tracking** — View order status (pending, paid, shipped, delivered, etc.)
- **Invoice Generation** — Automatic invoice creation via Stripe
- **Stock Management** — Automatic stock level updates on purchase
- **Webhook Integration** — Stripe webhook for order processing

### 📝 Blog
- **Blog Posts** — Latest articles and news
- **Blog Categories** — Filter blog posts by category
- **Author Profiles** — Blog posts with author attribution

### 🎨 Admin (Sanity Studio)
- **Headless CMS** — Manage products, categories, brands, orders, and blog content
- **Real-time Updates** — Content changes reflect instantly
- **Image Management** — Hotspot-aware image cropping

### 🖥️ Technical Highlights
- **Server Components** — Leverages React Server Components for performance
- **Visual Editing** — Sanity Presentation tool for live content preview
- **Type-Safe** — Full TypeScript with Sanity TypeGen
- **Responsive Design** — Mobile-first with Tailwind CSS v4
- **Animations** — Smooth transitions with Motion (Framer Motion)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **Sanity CMS** | Headless content management |
| **Stripe** | Payment processing & invoicing |
| **Clerk** | Authentication & user management |
| **Tailwind CSS v4** | Utility-first styling |
| **Zustand** | State management (cart, wishlist) |
| **Motion** | Animations & transitions |
| **Base UI** | Accessible UI primitives (Accordion, etc.) |
| **shadcn/ui** | Component library |
| **TypeScript** | Type safety |

## 📋 Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **pnpm**
- **Sanity account** — [sanity.io](https://sanity.io)
- **Stripe account** — [stripe.com](https://stripe.com)
- **Clerk account** — [clerk.com](https://clerk.com)

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# App
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN=sk...
SANITY_API_TOKEN=sk...

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
pnpm install
```

### 2. Set up Sanity

```bash
# Login to Sanity
npx sanity login

# Generate TypeScript types from your schema
npm run typegen
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Set up Stripe webhooks (for local development)

```bash
# Install Stripe CLI, then:
stripe listen --forward-to localhost:3000/api/webhook
```

### 5. Open Sanity Studio

Navigate to `/studio` route to access the Sanity CMS admin panel.

## 📁 Project Structure

```
shopix/
├── actions/              # Server actions (checkout, etc.)
├── app/
│   ├── (client)/         # Client-facing pages
│   │   ├── blog/         # Blog pages
│   │   ├── cart/         # Shopping cart
│   │   ├── orders/       # Order history
│   │   ├── product/      # Product detail
│   │   ├── shop/         # Shop with filters
│   │   └── wishlist/     # Wishlist
│   ├── api/              # API routes (webhook, etc.)
│   └── studio/           # Sanity Studio
├── components/           # React components
│   ├── Shop/             # Shop-specific components
│   └── ui/               # UI primitives (shadcn/ui)
├── constants/            # App constants
├── hooks/                # Custom React hooks
├── images/               # Static images
├── lib/                  # Utility functions
├── sanity/
│   ├── lib/              # Sanity client & live queries
│   ├── queries/          # GROQ queries
│   └── schemaTypes/      # Sanity schema definitions
├── store.ts              # Zustand store (cart, wishlist)
├── sanity.cli.ts         # Sanity CLI config
├── sanity.config.ts      # Sanity Studio config
└── sanity.types.ts       # Generated TypeScript types
```

## 📦 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Add all environment variables
4. Deploy!

### Deploy Sanity Studio

```bash
npx sanity deploy
```

## 🧞 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typegen` | Generate Sanity TypeScript types |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and not licensed for public use.