import { Category } from "@/sanity.types";
import React from "react";
import { Title } from "../text";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  setSelectCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

function CategoryList({
  categories,
  selectedCategory,
  setSelectCategory,
}: CategoryListProps) {
  return (
    <div className="w-full p-5 bg-white">
      <Title className="text-base font-black mb-2">Product Categories</Title>
      <RadioGroup value={selectedCategory || ""}>
        {categories.map((category) => (
          <div
            key={category._id}
            onClick={() => {
              setSelectCategory(category?.slug?.current as string);
            }}
            className="flex items-center space-x-2"
          >
            <RadioGroupItem
              value={category?.slug?.current as string}
              id={category?.slug?.current as string}
              className="rounded-sm"
            />
            <label
              className={` ${selectedCategory === category?.slug?.current ? "font-semibold text-shop-dark-green" : "font-normal"} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
            >
              {category?.name as string}
            </label>
          </div>
        ))}
      </RadioGroup>
      {selectedCategory && (
        <button
          onClick={() => setSelectCategory(null)}
          className="text-shop-dark-green hoverEffect font-medium hover:text-shop-orange underline text-sm mt-2"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}

export default CategoryList;
