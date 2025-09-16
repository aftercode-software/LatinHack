import { cn } from "@/lib/utils";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-anybody-ultra-condensed font-light text-center tracking-wide text-green-500 uppercase text-9xl md:text-9xl lg:text-9xl section-title",
        className
      )}
    >
      {children}
    </h2>
  );
}
