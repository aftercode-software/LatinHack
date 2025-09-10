"use client";

import Link from "next/link";

type MidCTAProps = {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
};

export default function ({
  title,
  ctaLabel,
  ctaHref,
  className = "",
}: MidCTAProps) {
  return (
    <section className={`my-10 bg-neutral-50 dark:bg-neutral-950/40 ${className}`}>
      <div className="mx-auto max-w-4xl px-4 py-8 text-center">
        <h3 className="text-3xl font-semibold mb-4">{title}</h3>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
