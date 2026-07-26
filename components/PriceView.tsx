import { Product } from '@/sanity.types'
import React from 'react'
import PriceFormatter from './PriceFormatter'

function PriceView({price, discount, className} : {price: number, discount?: number, className?: string}) {
  return (
    <div>
      <div className={`flex items-center gap-2 ${className}`}>
        <PriceFormatter amount={price} className="text-shop-dark-green" />
        {price && discount && (
          <PriceFormatter
            amount={price + (price * discount) / 100}
            className={"line-through font-normal text-shop-light-text"}
          />
        )}
      </div>
    </div>
  );
}

export default PriceView
