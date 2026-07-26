import React from "react";
import { Title } from "./text";
import Link from "next/link";
import Image from "next/image";
import banner_1 from "@/images/banner/banner_1.webp";
function HomeBanner() {
  return (
    <div className="py-16 md:py-0 bg-shop-light-pink  px-10 lg:px-24 flex items-center justify-between">
      <div>
        <Title className="mb-5 md:text-3xl">
          Grab upto 50% off on <br />
          selected items
        </Title>
        <Link
          href="/shop"
          className="text-white/90 bg-shop-dark-green/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop-dark-green hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="Home Banner"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
