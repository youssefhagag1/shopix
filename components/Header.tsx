import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, UserButton } from "@clerk/nextjs";

async function Header() {
  const user = await currentUser();
  return (
    <header className="bg-white py-5 sticky top-0 z-9999 bg-white/70 backdrop-blur-md border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        <div className="w-auto md:w-1/3  flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <CartIcon />
          <FavoriteButton />
          <SearchBar />
          <ClerkLoaded>{user ? <UserButton /> : <SignIn />}</ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header;
