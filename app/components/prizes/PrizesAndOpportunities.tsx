"use client";

/* eslint-disable @next/next/no-img-element */
import { useScrollTriggerTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Title from "../Title";
import GoatSection from "./GoatSection";
import PrizeCard from "./PrizeCard";

export default function PrizesAndOpportunities() {
  const t = useTranslations("PrizesAndOpportunities");

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

    currentTl.from(".prizes-title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });

    currentTl.from(
      ".prizes-card",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
      },
      "<+0.3"
    );

    currentTl.from(
      ".goat-section",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
      },
      "<+0.3"
    );

    currentTl.from(
      ".footnote-section",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
      },
      "<+0.3"
    );
  });

  const prizes = [
    {
      title: t("items.prize1.title"),
      iconImage: "/prizes/trophy-solid.svg",
      description: t("items.prize1.description"),
    },
    {
      title: t("items.prize2.title"),
      iconImage: "/prizes/users-solid.svg",
      description: t("items.prize2.description"),
    },
    {
      title: t("items.prize3.title"),
      iconImage: "/prizes/plane-solid.svg",
      description: t.rich("items.prize3.description", {
        polkadot: (chunks) => (
          <span className="font-bold text-pink-600">{chunks}</span>
        ),
        sub0: (chunks) => (
          <span className="font-bold text-green">{chunks}</span>
        ),
      }),
    },
  ];

  return (
    <section className="margin-section" ref={containerRef}>
      <img
        src="/flechon.png"
        alt=""
        className="w-20 md:w-60 mx-auto object-contain animate-bounce"
      />
      <div className="text-left mb-4">
        <Title className="prizes-title">{t("title")}</Title>
      </div>

      <div className="grid xl:grid-cols-3 gap-8 mb-12">
        {prizes.map((prize) => (
          <PrizeCard
            key={prize.title}
            prize={prize.title}
            iconImage={prize.iconImage}
            description={prize.description}
          />
        ))}
      </div>
      <GoatSection title={t("goat")} />
      <div className="text-center border-2 border-dashed border-green mt-8 py-6 bg-black/20 font-roboto-mono footnote-section">
        <p className="text-white text-xl md:text-3xl uppercase">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}
