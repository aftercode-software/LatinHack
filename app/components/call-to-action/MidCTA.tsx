/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

type MidCTAProps = {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
};

export default function MidCTA({
  title,
  ctaLabel,
  ctaHref,
  className = "",
}: MidCTAProps) {
  return (
    <section
      className={cn(
        "my-10 relative flex justify-center items-center",
        className
      )}
    >
      <img src="/cta/astronaut.png" alt="" className="w-full md:w-[40%]" />
      <div className="w-full px-4 py-8 text-center absolute bottom-1/5 left-1/2 -translate-x-1/2 space-y-8">
        <h2 className="uppercase font-bold font-upheaval text-6xl md:text-8xl text-center pixel-text text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
          {title}
        </h2>
        <Link
          href={ctaHref}
          onClick={() => {
            sendGTMEvent({
              event: "create_account_mid_cta",
              event_category: "cta",
              event_label: "primary",
            });
          }}
          className="md:px-20 px-10 py-2 md:py-4 text-3xl md:text-4xl font-medium bg-black/70 font-upheaval text-white hover:opacity-90 border-2 border-dashed border-green "
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
