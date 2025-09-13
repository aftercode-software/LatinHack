import { useTranslations } from "next-intl";
import Title from "../Title";
import TimelineCard from "./TimelineCard";

export default function Timeline() {
  const t = useTranslations("Timeline");
  return (
    <section className="w-full px-4 margin-section flex flex-col">
      <Title>{t("title")}</Title>
      <div className="justify-between flex-1 flex items-center gap-3 md:gap-0 flex-col md:flex-row">
        <TimelineCard
          title={t("phases.kickoff.title")}
          date={t("phases.kickoff.date")}
        />
        <div className="flex-1 h-1 border-t-2 border-dashed border-green-500/60 rounded-full "></div>
        <TimelineCard
          title={t("phases.workshops.title")}
          date={t("phases.workshops.date")}
        />
        <div className="flex-1 h-1 border-t-2 border-dashed border-green-500/60 rounded-full"></div>
        <TimelineCard
          title={t("phases.submission.title")}
          date={t("phases.submission.date")}
        />
      </div>
    </section>
  );
}
