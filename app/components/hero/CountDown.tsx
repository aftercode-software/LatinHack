"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";

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
  const daysLeft = useMemo(() => {
    const now = new Date();
    const deadline = new Date(deadlineISO);
    const diff = Math.ceil(
      (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );
    return Math.max(0, diff);
  }, [deadlineISO]);

  return (
    <>
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 border-dash-wide divide-dashed">
        <aside className="flex flex-col px-6 py-4 border-r-green border-solid border-r-[1px] bg-black/70">
          <p className="text-white font-anybody uppercase text-2xl font-light">
            {t("title")}
          </p>
          <p className="text-white font-roboto-mono uppercase text-2xl font-bold">
            {deadlineISO}
          </p>
        </aside>
        <aside className="flex justify-center items-center px-6 py-4 bg-black/70">
          <p className="text-center font-anybody-condensed text-green text-6xl items-center">
            {t("daysLeft", { daysLeft: daysLeft })}
          </p>
        </aside>
      </section>
      <div className="">
        <div className="">
          <div className="uppercase font-roboto-mono text-sm text-white/80 tracking-[.15em]">
            {leftTitle}
          </div>
          <div className="mt-1 uppercase font-anybody font-extrabold text-white text-base sm:text-lg">
            {leftSubtitle}
          </div>
        </div>
      </div>
    </>
  );
}
