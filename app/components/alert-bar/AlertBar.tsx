import { useFormatter, useNow, useTranslations } from "next-intl";

const END_DATE = new Date("2025-10-12");

export default function AlertBar() {
  const now = useNow();
  const nowFormatted = useFormatter().dateTime(now, { dateStyle: "long" });
  const format = useFormatter();
  const t = useTranslations("AlertBar");

  // calculate days left
  const daysLeft = Math.ceil(
    (END_DATE.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      {t("projects-closed", { date: nowFormatted })}.{" "}
      {t("days-left", { days: daysLeft })}
    </div>
  );
}
