import { cn } from "@/lib/utils";
import React from "react";

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={cn("text-2xl  font-bold text-shop-dark-green capitalize tracking-wide", className)}>{children}</h2>;
}
export function SubTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={cn("text-xl md:text-2xl font-bold text-shop-dark-green capitalize tracking-wide", className)}>{children}</h3>;
}


export const SubText = ({children, className}: {children: React.ReactNode; className?: string}) => {
  return <p className={cn("text-gray-600 text-sm", className)}>{children}</p>;
};