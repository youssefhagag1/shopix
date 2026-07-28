import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProducts";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

async function WishlistPage() {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <WishListProducts/>
      ) : (
        <NoAccess details="You must be logged in to view your wishlist." />
      )}
    </>
  );
}

export default WishlistPage;
