"use client";

import { useScrollTriggerTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Title from "../Title";
import TimelineCard from "./TimelineCard";

export default function Timeline() {
  const t = useTranslations("Timeline");

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

    currentTl.from(".timeline-title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
    currentTl.from(".timeline-card", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.1,
    });
    currentTl.from(
      ".timeline-line",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
      },
      "<+0.1"
    );
  });

  return (
    <section
      className="w-full px-4 margin-section flex flex-col"
      ref={containerRef}
    >
      <Title className="timeline-title">{t("title")}</Title>
      <div className="justify-between flex-1 flex items-center gap-3 md:gap-0 flex-col md:flex-row">
        <TimelineCard
          title={t("phases.kickoff.title")}
          date={t("phases.kickoff.date")}
        />
        <div className="flex-1 h-1 border-t-2 border-dashed border-green-500/60 rounded-full timeline-line"></div>
        <TimelineCard
          title={t("phases.workshops.title")}
          date={t("phases.workshops.date")}
        />
        <div className="flex-1 h-1 border-t-2 border-dashed border-green-500/60 rounded-full timeline-line"></div>
        <TimelineCard
          title={t("phases.submission.title")}
          date={t("phases.submission.date")}
        />
      </div>
    </section>
  );
}
