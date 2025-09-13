import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LinkButton({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      target="_blank"
      className={cn(
        `bg-gradient-to-b from-white to-green rounded-sm py-3 font-medium text-black uppercase px-6 text-center font-upheaval text-2xl cursor-pointer shadow-sm shadow-white`,
        className
      )}
      href={href ?? ""}
    >
      {children}
    </Link>
  );
}
