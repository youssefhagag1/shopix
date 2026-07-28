"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import useStore from "@/store";
import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function AddToWishlistButton({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const { favoriteProduct, addToFavorite } = useStore();
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  useEffect(() => {
    const availableProduct = favoriteProduct.find(
      (item) => item._id === product._id,
    );
    setExistingProduct(availableProduct || null);
  }, [favoriteProduct, product]);

  const handleFavorite = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        toast.success(
          existingProduct ? "Removed from Wishlist" : "Added to Favorite",
        );
      });
    }
  };
  return (
    <div className={cn("absolute top-2 right-2 z-10 rounded-full", className)}>
      <div
        onClick={handleFavorite}
        className={`p-2.5 rounded-full hover:bg-shop-btn-dark-green hover:text-white hoverEffect ${
          existingProduct ? "bg-shop-btn-dark-green text-white" : "bg-white"
        }`}
      >
        <Heart size={15} />
      </div>
    </div>
  );
}

export default AddToWishlistButton;
