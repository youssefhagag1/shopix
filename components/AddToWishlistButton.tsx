import { cn } from '@/lib/utils'
import { Product } from '@/sanity.types'
import { Heart } from 'lucide-react'
import React from 'react'

function AddToWishlistButton({ product , className }: { product: Product , className?: string }) {
  return (
    <div className={cn("absolute top-2 right-2 z-10 rounded-full", className)}>
      <div className="p-2.5 rounded-full hover:bg-shop-btn-dark-green hover:text-white hoverEffect bg-white">
        <Heart size={15} />
      </div>
    </div>
  );
}

export default AddToWishlistButton
