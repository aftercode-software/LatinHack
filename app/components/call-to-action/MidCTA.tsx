/* eslint-disable @next/next/no-img-element */
"use client";

import { useScrollTriggerTimeline } from "@/hooks/useTimeline";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);

  const { tl } = useScrollTriggerTimeline({
    scopeRef: containerRef,
    scrollTrigger: {
      start: "top 80%",
      end: "30% 80%",
    },
  });

  useGSAP(() => {
    const currentTl = tl.current;
    if (!currentTl) return;

    currentTl.from(".astronaut-image", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
    currentTl.from(
      ".mid-cta-title",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
      },
      "<+0.3"
    );
    currentTl.from(
      ".mid-cta-link",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
      },
      "<+0.3"
    );
  });

  return (
    <section
      className={cn(
        "my-10 relative flex justify-center items-center",
        className
      )}
      ref={containerRef}
    >
      <img
        src="/cta/astronaut.png"
        alt=""
        className="w-full md:w-[40%] animate-float astronaut-image"
      />
      <div className="w-full px-4 py-0 md:py-8 text-center absolute bottom-0 md:bottom-1/5 left-1/2 -translate-x-1/2 space-y-8">
        <h2 className="uppercase font-bold font-upheaval text-4xl md:text-8xl text-center pixel-text text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] mid-cta-title">
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
          className="md:px-20 px-4 py-4 md:py-4 text-3xl md:text-4xl font-medium bg-black/70 font-upheaval text-white hover:opacity-90 border rounded-[8px] border-green mid-cta-link"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
