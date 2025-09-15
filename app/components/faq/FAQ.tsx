/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMessages, useTranslations } from "next-intl";
import Title from "../Title";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const messages = useMessages();

  const questions = Object.values(messages.FAQ.questions);

  return (
    <section className="margin-section" id="faq">
      <Title>{t("title")}</Title>
      <Accordion type="single" collapsible>
        {questions.map((question: any, i) => (
          <AccordionItem value={question.title} key={question.title + i}>
            <AccordionTrigger>{question.title}</AccordionTrigger>
            <AccordionContent>{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
