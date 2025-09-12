"use client";

import { END_DATE } from "@/constants/endDate";
import { useNow, useTranslations } from "next-intl";

type Props = {
  deadlineISO?: string;
  leftTitle?: string;
  leftSubtitle?: string;
};

export function CountDown({
  deadlineISO = "2025-10-12T23:59:00-03:00",
  leftTitle = "CIERRE DE PROYECTOS:",
  leftSubtitle = "12 OCT 2025, 23:59 (GMT-3)",
}: Props) {
  const t = useTranslations("CountDown");
  const now = useNow();
  const daysLeft = Math.ceil(
    (END_DATE.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 border-dash-wide divide-dashed">
        <aside className="flex flex-col px-6 py-4 md:border-r-green border-b-green  border-solid border-b-[1px] md:border-r-[1px] bg-black/70">
          <p className="text-white font-anybody uppercase text-2xl font-light text-center md:text-left">
            {t("title")}
          </p>
          <p className="text-white font-roboto-mono uppercase text-2xl font-bold  text-center md:text-left">
            {deadlineISO}
          </p>
        </aside>
        <aside className="flex justify-center items-center px-6 py-4 bg-black/70">
          <p className="text-center font-anybody-condensed text-green text-6xl items-center">
            {t("daysLeft", { daysLeft: daysLeft })}
          </p>
        </aside>
      </section>
    </>
  );
}
