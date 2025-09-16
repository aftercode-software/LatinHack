"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useScrollTriggerTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { useMessages, useTranslations } from "next-intl";
import { useRef } from "react";
import Title from "../Title";
import VenuesCard from "./VenuesCard";

export default function Venues() {
  const t = useTranslations("Venues");
  const messages = useMessages();
  const venues = Object.values(messages.Venues.countries);
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

    currentTl.from(".venues-title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });

    currentTl.from(
      ".venues-box",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
      },
      "<+0.3"
    );

    currentTl.from(
      ".venues-micro-copy",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
      },
      "<+0.3"
    );
  });

  return (
    <section className="margin-section" ref={containerRef}>
      <Title className="venues-title">{t("title")}</Title>
      <div className="flex flex-col border-2 border-dashed border-green venues-box">
        <div
          className="grid grid-cols-1 lg:grid-cols-2
                  divide-y-2 lg:divide-y-0 lg:divide-x-2
                  divide-green divide-dashed"
        >
          {venues.slice(0, 2).map((country: any) => (
            <VenuesCard
              key={country.country}
              {...country}
              linkLabel={t("linkLabel")}
            />
          ))}
        </div>

        <div className="h-[1px] border-t-2 border-dashed border-green" />

        <div
          className="grid grid-cols-1 lg:grid-cols-3
                  divide-y-2 lg:divide-y-0 lg:divide-x-2
                  divide-green divide-dashed"
        >
          {venues.slice(2, 5).map((country: any) => (
            <VenuesCard
              key={country.country}
              {...country}
              linkLabel={t("linkLabel")}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 text-center font-roboto-mono venues-micro-copy">
        <p className="text-xl md:text-3xl text-white font-bold uppercase">
          {t("microCopy.part-1")}
        </p>
        <p className="text-xl md:text-3xl text-white">
          {t("microCopy.part-2")}
        </p>
      </div>
    </section>
  );
}
