"use client";

import { END_DATE } from "@/constants/endDate";
import { useNow, useTranslations } from "next-intl";

type Props = {
  deadlineISO?: string;
};

export function CountDown({
  deadlineISO = "2025-10-12T23:59:00-03:00",
}: Props) {
  const t = useTranslations("CountDown");
  const now = useNow();
  const daysLeft = Math.ceil(
    (END_DATE.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      <section className="relative w-full max-w-5xl mx-auto count-down">
        <div className="grid grid-cols-1 md:grid-cols-2 border-dash-wide divide-dashed">
          <aside className="flex flex-col px-6 py-4 border border-dashed border-green bg-black/70">
            <p className="text-white font-anybody uppercase text-2xl font-medium text-center md:text-left">
              {t("title")}
            </p>
            <p className="text-white font-anybody uppercase text-2xl font-bold text-center md:text-left">
              {deadlineISO}
            </p>
          </aside>
          <aside className="flex justify-center items-center px-6 py-4 border-x border-b md:border-y md:border-l-0 border-dashed border-green bg-black/70">
            <p className="text-center font-anybody-condensed font-light text-green text-6xl">
              {t("daysLeft", { daysLeft })}
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
