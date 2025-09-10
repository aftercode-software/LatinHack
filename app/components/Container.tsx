export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`max-w-[90vw] mx-auto ${className}`}>{children}</div>;
}
