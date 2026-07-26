import { productType } from "@/constants/data";
import Link from "next/link";
import React, { useState } from "react";

interface HomeTabBarProps {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

function HomeTabBar({ selectedTab, onSelectTab }: HomeTabBarProps) {
  return (
    <div className="flex justify-between items-center flex-wrap mb-10 gap-5">
      <div className="flex items-center flex-wrap gap-3 text-sm font-semibold">
        {productType?.map((item) => (
          <button
            key={item.title}
            className={`border border-shop-light-green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:text-white hoverEffect ${selectedTab === item.title ? "bg-shop-light-green text-white border-shop-light-green" : "bg-shop-light-green/20"}`}
            onClick={() => onSelectTab(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <Link href={"/shop"} className="rounded-full border py-1 px-4">See all</Link>
    </div>
  );
}

export default HomeTabBar;
