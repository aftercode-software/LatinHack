export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[90vw] md:max-w-[80vw] mx-auto ${className}`}>
      {children}
    </div>
  );
}
