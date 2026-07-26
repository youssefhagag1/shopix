import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Flame, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToWishlistButton from "./AddToWishlistButton";
import { Title } from "./text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="">
      <div className="text-sm border-[1px] border-darkBlue/20 rounded-md bg-white group">
        <div className="relative overflow-hidden group bg-shop-light-bg">
          {" "}
          {product?.images && (
            <Link href={`/product/${product?.slug?.current}`}>
              <Image
                src={urlFor(product.images[0]).url()}
                alt="product image"
                width={700}
                height={700}
                loading="lazy"
                className={`w-full h-64 object-contain overflow-hidden transaition-transform bg-shop-light-bg hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
              />
            </Link>
          )}
          <AddToWishlistButton product={product} />
          {product.status === "sale" && (
            <p className="absolute top-2 left-2 z-10 rounded-full border border-darkColor/50 px-2 text-xs hoverEffect group-hover:border-shop-light-green group-hover:text-shop-light-green">
              {" "}
              Sale!
            </p>
          )}
          {product.status === "new" && (
            <p className="absolute top-2 left-2 z-10 rounded-full border border-darkColor/50 px-2 text-xs hoverEffect group-hover:border-shop-light-green group-hover:text-shop-light-green">
              {" "}
              New!
            </p>
          )}
          {product.status === "hot" && (
            <p className="absolute top-2 left-2 z-10 rounded-full border border-shop-orange/50 p-1 text-xs hoverEffect group-hover:border-shop-green group-hover:text-shop-dark-green">
              {" "}
              <Link href={"/shop"}>
                <Flame
                  size={18}
                  fill="#fb6c08"
                  className="text-shop-orange group-hover:text-shop-light-orange hoverEffect"
                />
              </Link>
            </p>
          )}
        </div>
        <div className="p-3 flex flex-col gap-2">
          {product?.categories && (
            <p className="uppercase line-clamp-1 text-xs text-shop-light-text">
              {product.categories.map((cat) => cat).join(", ")}
            </p>
          )}
          <Title className="text-sm line-clamp-1">{product.name}</Title>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  size={13}
                  key={index}
                  className={
                    index < 4
                      ? "text-shop_light_green"
                      : " text-color-shop-light-text"
                  }
                  fill={index < 4 ? "#93D991" : "#ababab"}
                />
              ))}
            </div>
            <p className="text-color-shop-light-text text-xs tracking-wide">
              5 Reviews
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <p className="font-medium">In Stock</p>
            <p
              className={`${product?.stock === 0 ? "text-red-600" : "text-shop_dark_green/80 font-semibold"}`}
            >
              {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
            </p>
          </div>
          <PriceView
            price={product?.price as number}
            discount={product?.discount}
            className={"text-sm"}
          />
          <AddToCartButton product={product} className="w-36 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
