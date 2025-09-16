"use client";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: LinkButtonVariant;
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, {
        y: -2,
        boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)",
        duration: 0.1,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        y: 0,
        boxShadow: "0 1px 3px rgba(255, 255, 255, 0.1)",
        duration: 0.1,
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (variant === LinkButtonVariant.SMALL) {
    return (
      <Link
        ref={buttonRef}
        onClick={onClick}
        target="_blank"
        className={cn(
          `block w-fit bg-gradient-to-b from-white to-green rounded-sm py-1 font-medium text-black uppercase px-12 text-center font-myriadpro text-lg cursor-pointer shadow-sm shadow-white transition-transform`,
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
      className={cn(
        `bg-gradient-to-b from-white to-green rounded-sm py-3 font-medium text-black uppercase px-20 text-center font-upheaval text-xl md:text-4xl cursor-pointer shadow-sm shadow-white transition-transform`,
        className
      )}
      href={href ?? ""}
    >
      {children}
    </Link>
  );
}
