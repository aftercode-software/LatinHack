"use client";

import { useScrollTriggerTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { sendGTMEvent } from "@next/third-parties/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import LinkButton from "../LinkButton";
import Title from "../Title";
import StepsUnifiedBox from "./StepsUnifiedBox";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");
  const containerRef = useRef<HTMLDivElement>(null);

  const { tl } = useScrollTriggerTimeline({
    scopeRef: containerRef,
    triggerRef: containerRef,
    scrollTrigger: {
      start: "top 80%",
      end: "30% 80%",
    },
  });

  useGSAP(
    () => {
      const currentTl = tl.current;

      if (!currentTl) return;

      currentTl
        .from(".how-it-works-title", {
          opacity: 0,
          y: 50,
          duration: 0.4,
        })
        .from(
          ".steps-box",
          {
            opacity: 0,
            y: 50,
            duration: 0.5,
          },
          "<+0.3"
        )
        .from(
          ".link-button",
          {
            opacity: 0,
            y: 50,
            duration: 0.5,
          },
          "<+0.3"
        );
    },
    { scope: containerRef }
  );

  const steps = [
    {
      num: "01",
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
    },
    {
      num: "02",
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      num: "03",
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
  ];

  return (
    <section className="px-4 mt-48" ref={containerRef}>
      <Title className="how-it-works-title">{t("title")}</Title>

      <StepsUnifiedBox steps={steps} />

      <div className="mt-8 md:mt-10 flex justify-center link-button">
        <LinkButton
          onClick={() => {
            sendGTMEvent({
              event: "create_account_how_it_works",
              event_category: "cta",
              event_label: "primary",
            });
          }}
        >
          {t("primary-button")}
        </LinkButton>
        {/* <button className="bg-gradient-to-b from-white to-green rounded-sm py-3 font-bold text-black uppercase font-anybody-expanded px-8">
          {t("primary-button")}
        </button> */}
      </div>
    </section>
  );
}
