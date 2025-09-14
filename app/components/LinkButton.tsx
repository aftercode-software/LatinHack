import { cn } from "@/lib/utils";
import Link from "next/link";

export enum LinkButtonVariant {
  BIG = "big",
  SMALL = "small",
}

export default function LinkButton({
  children,
  className,
  href,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: LinkButtonVariant;
}) {
  if (variant === LinkButtonVariant.SMALL) {
    return (
      <Link
        target="_blank"
        className={cn(
          `block w-fit bg-gradient-to-b from-white to-green rounded-sm py-1 font-medium text-black uppercase px-12 text-center font-myriadpro text-lg cursor-pointer shadow-sm shadow-white `,
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
      target="_blank"
      className={cn(
        `bg-gradient-to-b from-white to-green rounded-sm py-3 font-medium text-black uppercase px-20 text-center font-upheaval text-2xl cursor-pointer shadow-sm shadow-white`,
        className
      )}
      href={href ?? ""}
    >
      {children}
    </Link>
  );
}
