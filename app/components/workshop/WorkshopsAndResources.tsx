"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useScrollTriggerTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { sendGTMEvent } from "@next/third-parties/google";
import { useMessages, useTranslations } from "next-intl";
import { useRef } from "react";
import LinkButton from "../LinkButton";
import Title from "../Title";
import WorkshopCard from "./WorkshopCard";

export default function WorkshopsAndResources() {
  const t = useTranslations("WorkshopsAndResources");
  const messages = useMessages();
  const workshopsTranslations = messages.WorkshopsAndResources.workshops.topics;
  const arrWorkshops = Object.values(workshopsTranslations);

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

    currentTl.from(".workshops-title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });

    currentTl.from(
      ".workshops-objective",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
      },
      "<+0.3"
    );

    currentTl.from(
      ".workshop-card",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
      },
      "<+0.3"
    );

    currentTl.from(
      ".resources-section",
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
      <div className="mx-auto">
        <div className="text-center mb-4">
          <Title className="workshops-title">{t("title")}</Title>
          <p className="text-2xl md:text-4xl font-roboto-mono font-bold text-white workshops-objective">
            {"<" + t("objective") + ">"}
          </p>
        </div>

        <div className="space-y-4 mt-8">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto gap-4">
              {arrWorkshops.map((workshop: any) => (
                <WorkshopCard
                  key={workshop.title + workshop.date}
                  title={workshop.title}
                  date={workshop.date}
                  calendarLink={workshop.calendarLink}
                  calendarLabel={t("workshops.calendar")}
                  description={workshop.description}
                />
              ))}
            </div>
          </div>

          <div className="p-6 border-2 border-dashed border-green flex flex-col md:flex-row justify-between items-center bg-black/60 resources-section">
            <span className="block text-white text-6xl font-anybody-condensed font-light">
              {t("resources.description")}
            </span>
            <LinkButton
              onClick={() => {
                sendGTMEvent({
                  event: "view_resources",
                  event_category: "workshops",
                  event_label: "primary",
                });
              }}
              className=" mt-4 md:mt-0"
              href="https://nerdconf.notion.site/latinhack-resources"
            >
              {t("resources.button")}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
