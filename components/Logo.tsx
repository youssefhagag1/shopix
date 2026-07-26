import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function Logo({ className, spanDesign }: { className?: string; spanDesign?: string }) {
  return (
    <Link href="/">
      <h2
        className={cn(
          "text-2xl text-shop-btn-dark-green font-black tracking-wider uppercase hover:text-shop-light-green hoverEffect group font-sans",
          className,
        )}
      >
        Shop
        <span className={cn("text-shop-light-green group-hover:text-shop-btn-dark-green hoverEffect", spanDesign)}>

          ix
        </span>
      </h2>
    </Link>
  );
}

export default Logo;
