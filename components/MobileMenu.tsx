"use client";
import { AlignLeft } from "lucide-react";
import { useState } from "react";
import SideMenu from "./SideMenu";

function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <AlignLeft className="hover:text-dark hoverEffect md:hidden hover:cursor-pointer " />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
}

export default MobileMenu;
