"use client";

import { END_DATE } from "@/constants/endDate";
import { useNow, useTranslations } from "next-intl";
import { useState } from "react";

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
  const [show, setShowing] = useState(true);

  const t = useTranslations("CountDown");
  const now = useNow();
  const daysLeft = Math.ceil(
    (END_DATE.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <>
      {show && (
        <section className="relative w-full max-w-5xl mx-auto count-down">
          {/* <button
            onClick={() => setShowing(false)}
            className="
      absolute top-0 right-0 cursor-point 
      -translate-y-1/2 translate-x-1/2
      bg-green-500 text-black rounded-full 
      w-6 h-6 flex items-center justify-center
      text-xs font-bold shadow-lg
      hover:bg-green-400 transition font-upheaval
    "
          >
            ✕
          </button> */}

          <div className="grid grid-cols-1 md:grid-cols-2 border-dash-wide divide-dashed">
            <aside className="flex flex-col px-6 py-4 border-2 border-dashed border-green bg-black/70">
              <p className="text-white font-anybody uppercase text-2xl font-light text-center md:text-left">
                {t("title")}
              </p>
              <p className="text-white font-roboto-mono uppercase text-2xl font-bold text-center md:text-left">
                {deadlineISO}
              </p>
            </aside>
            <aside className="flex justify-center items-center px-6 py-4 border-x-2 border-b-2 md:border-y-2 md:border-l-0 border-dashed border-green bg-black/70">
              <p className="text-center font-anybody-condensed text-green text-6xl">
                {t("daysLeft", { daysLeft })}
              </p>
            </aside>
          </div>
        </section>
      )}
    </>
  );
}
