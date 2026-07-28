import { Brand } from '@/sanity.types';
import React from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Title } from '../text';
interface BrandListProps {
  brands: Brand[];
  selectedBrand: string | null;
  setSelectBrand: React.Dispatch<React.SetStateAction<string | null>>;
}
function BrandList({ brands, selectedBrand, setSelectBrand }: BrandListProps) {
  return (
    <div className="w-full p-5 bg-white">
      <Title className="text-base font-black mb-2">Product Brands</Title>
      <RadioGroup value={selectedBrand || ""}>
        {brands.map((brand) => (
          <div
            key={brand._id}
            onClick={() => {
              setSelectBrand(brand?.slug?.current as string);
            }}
            className="flex items-center space-x-2"
          >
            <RadioGroupItem
              value={brand?.slug?.current as string}
              id={brand?.slug?.current as string}
              className="rounded-sm"
            />
            <label
              className={` ${selectedBrand === brand?.slug?.current ? "font-semibold text-shop-dark-green" : "font-normal"} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
            >
              {brand?.title as string}
            </label>
          </div>
        ))}
        {selectedBrand && (
          <button
            onClick={() => setSelectBrand(null)}
            className="text-shop-dark-green text-left hoverEffect font-medium hover:text-shop-orange underline text-sm mt-2"
          >
            Reset Selection
          </button>
        )}
      </RadioGroup>
    </div>
  );
}

export default BrandList
