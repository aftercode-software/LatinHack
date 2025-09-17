"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";

export enum LinkButtonVariant {
  BIG = "big",
  SMALL = "small",
}

export default function LinkButton({
  children,
  className,
  href,
  onClick,
  variant,
  linkName,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: LinkButtonVariant;
  linkName?: string;
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  if (variant === LinkButtonVariant.SMALL) {
    return (
      <Link
        ref={buttonRef}
        onClick={onClick}
        data-link-name={linkName}
        target="_blank"
        className={cn(
          `block w-fit bg-gradient-to-b from-white to-green
          transition-all
        hover:from-green-50 hover:to-green-600
        hover:text-green-800
        hover:font-bold
          rounded-sm py-1 font-medium text-black uppercase px-12 text-center font-roboto-mono
          text-lg cursor-pointer`,
          className
        )}
        href={href ?? ""}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      ref={buttonRef}
      target="_blank"
      data-link-name={linkName}
      className={cn(
        `bg-gradient-to-b from-white to-green 
      transition-all duration-150
      hover:from-green-50 hover:to-green-600
      hover:text-green-800
      rounded-[8px] py-3 font-medium text-black uppercase px-20 text-center 
      font-upheaval text-xl md:text-3xl cursor-pointer`,
        className
      )}
      href={href ?? ""}
    >
      {children}
    </Link>
  );
}
