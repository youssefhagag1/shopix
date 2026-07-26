"use client";
import { usePathname } from "next/navigation";
import { headerData } from "@/constants/data";
import Link from "next/link";

function HeaderMenu() {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex  items-center gap-7 text-sm capitalize font-normal text-lightColor">
      {headerData.map((item) => (
        <Link
          key={item.title}
          href={item?.href}
          className={`hover:text-shop-light-green hoverEffect relative group ${pathname === item?.href && "text-shop-light-green"}`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop-light-green group-hover:w-1/2 hoverEffect ${pathname === item?.href && "w-1/2"}`}
          ></span>
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-light-green group-hover:w-1/2 hoverEffect ${pathname === item?.href && "w-1/2"}`}
          ></span>
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
