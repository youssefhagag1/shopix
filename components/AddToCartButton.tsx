"use client";
import { Product } from "@/sanity.types";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import useStore from "@/store";
import PriceFormatter from "./PriceFormatter";
import QuantityButtons from "./QuantityButtons";
interface Props {
  product: Product;
  className?: string;
}
function AddToCartButton({ product, className }: Props) {
  const { addItem, getItemCount } = useStore();
  const itemCount = getItemCount(product._id as string);
  const isOutOfStock = product?.stock === 0;
  const handleAddProductToCart = () => {
    if ((product?.stock as number) > 0) {
      addItem(product);
      toast.success(
        `${product.name?.substring(0, 20)}... Added to Cart Successfully`,
      );
    } else {
      toast.error("Can not add more than available stock");
    }
  };
  return (
    <div className="w-full">
      {itemCount ? (
        <div className = "text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-sm text-dark/80 font-semibold">Quantity</span>
            <QuantityButtons product={product} className=""/>
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-sm font-semibold">Subtotal</span>
            <PriceFormatter amount = {product?.price ? product.price * itemCount : 0}/>
          </div>
        </div>
      ) : (
        <Button
          disabled={isOutOfStock}
          onClick={handleAddProductToCart}
          className={cn(
            "w-full bg-shop-dark-green/80  shadow-none border border-shop-dark-green/80  tracking-wide text-white hover:bg-shop-dark-green hover:border-shop-dark-green hoverEffect",
            className,
          )}
        >
          <ShoppingCart /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      )}
    </div>
  );
}

export default AddToCartButton;
