"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollTriggerTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { useMessages, useTranslations } from "next-intl";
import { useRef } from "react";
import Title from "../Title";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const messages = useMessages();
  const questions = Object.values(messages.FAQ.questions);

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
    currentTl.from(".faq-title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
    currentTl.from(
      ".faq-accordion",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
      },
      "<+0.3"
    );
  });

  return (
    <section className="margin-section" id="faq" ref={containerRef}>
      <Title className="faq-title">{t("title")}</Title>
      <div className="faq-accordion">
        <Accordion type="single" collapsible>
          {questions.map((question: any, i) => (
            <AccordionItem value={question.title} key={question.title + i}>
              <AccordionTrigger>{question.title}</AccordionTrigger>
              <AccordionContent>{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
