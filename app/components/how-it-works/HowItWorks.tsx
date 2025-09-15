"use client";

import { useGSAP } from "@gsap/react";
import { sendGTMEvent } from "@next/third-parties/google";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import LinkButton from "../LinkButton";
import Title from "../Title";
import StepsUnifiedBox from "./StepsUnifiedBox";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  useGSAP(() => {
    gsap.from(".how-it-works-title", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.inOut",
    });
  });

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
    <section className="px-4 margin-section">
      <Title>{t("title")}</Title>

      <StepsUnifiedBox steps={steps} />

      <div className="mt-8 md:mt-10 flex justify-center">
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
