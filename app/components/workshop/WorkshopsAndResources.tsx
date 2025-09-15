/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMessages, useTranslations } from "next-intl";
import LinkButton from "../LinkButton";
import Title from "../Title";
import WorkshopCard from "./WorkshopCard";

export default function WorkshopsAndResources() {
  const t = useTranslations("WorkshopsAndResources");

  const messages = useMessages();

  const workshopsTranslations = messages.WorkshopsAndResources.workshops.topics;

  const arrWorkshops = Object.values(workshopsTranslations).filter(
    (label: any) => label !== "Add to calendar"
  );

  return (
    <section className="margin-section">
      <div className="mx-auto">
        <div className="text-center mb-4">
          <Title>{t("title")}</Title>
          <p className="text-4xl font-bold text-white">{t("objective")}</p>
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
                  calendarLabel={t("workshops.topics.calendar")}
                  description={workshop.description}
                />
              ))}
            </div>
          </div>

          <div className="p-6 border-2 border-dashed border-green flex flex-col md:flex-row justify-between items-center bg-black/60">
            <span className="block text-white text-3xl">
              {t("resources.description")}
            </span>
            <LinkButton className=" mt-4 md:mt-0" href={t("resources.button")}>
              {t("resources.button")}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
