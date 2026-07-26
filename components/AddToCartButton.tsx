import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props{
    product : Product,
    className?: string
}
function AddToCartButton({product, className} : Props) {
    const isOutOfStock = product?.stock === 0;
  return (
    <div>
      <Button
        disabled={isOutOfStock}
        className={cn(
          "w-full bg-shop-dark-green/80 text-light shadow-none border border-shop-dark-green/80  tracking-wide text-white hover:bg-shop-dark-green hover:border-shop-dark-green hoverEffect",
          className,
        )}
      >
        <ShoppingCart /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
}

export default AddToCartButton
