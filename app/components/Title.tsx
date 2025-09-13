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
        "font-anybody-condensed text-center text-green-500 uppercase tracking-tight text-5xl md:text-7xl lg:text-9xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
