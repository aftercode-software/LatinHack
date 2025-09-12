/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import Prizes from "./PrizesAndButtons";
import { CountDown } from "./CountDown";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-30">
      <header className="flex flex-col items-center relative -space-y-10">
        <h1 className="uppercase font-light font-anybody text-3xl text-green text-center">
          {t.rich("title", {
            b: (chunks) => <b className="font-bold">{chunks}</b>,
          })}
        </h1>
        <img src="/logo.png" alt="logo" className="max-w-4xl -my-2" />
        <span className="font-roboto-mono text-green-50 uppercase text-2xl -mt-8">
          {t("date")}
        </span>
      </header>

      <section className="relative isolate py-12 md:py-0">
        <img
          src="/globe.webp"
          alt=""
          className="
      pointer-events-none select-none 
      absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-[45%]
      w-[140vw] max-w-[1300px] aspect-square object-contain
      opacity-90 
    "
        />

        <span
          className="
      pointer-events-none
      absolute left-1/2 top-1/2 -z-10
      -translate-x-1/2 -translate-y-1/2
      w-[150vw] max-w-[1300px] aspect-square rounded-full
      bg-[radial-gradient(closest-side,rgba(16,255,0,0.35),transparent_70%)]
      blur-2xl opacity-70
    "
        />

        <div className="relative z-10 flex flex-col items-center animate-[slideDown_1s_ease-out]">
          <h2 className="uppercase font-bold font-upheaval text-4xl md:text-8xl text-center pixel-text text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
            {t("subtitle")}
          </h2>
          <Prizes />
          <img
            src="/flechon.png"
            alt=""
            className="w-30 object-contain animate-bounce"
          />
          <CountDown />
        </div>
      </section>
    </section>
  );
}
