import { X } from "lucide-react";
import Logo from "./Logo";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SociaMedia from "./SociaMedia";
import { useOutsideClick } from "@/hooks";
interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-0 z-50 flex w-full bg-black/50 text-white/80 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop-light-bg flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop-light-green text-white hoverEffect"
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData.map((item) => (
            <Link
              key={item.title}
              href={item?.href}
              className={`block py-2 hover:text-shop-light-green hoverEffect ${pathname === item?.href && "text-shop-light-green"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SociaMedia />
      </div>
    </div>
  );
}

export default SideMenu;
