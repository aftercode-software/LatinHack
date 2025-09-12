/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="h-[60vh] relative flex flex-col items-center justify-center gap-4 my-40">
      <h1 className="uppercase font-light font-anybody text-3xl text-green text-center">
        {" "}
        {t.rich("title", {
          b: (chunks) => <b className="font-bold">{chunks}</b>,
        })}
      </h1>
      <img src={"/logo.png"} alt="logo" />
      <span className="font-roboto-mono uppercase text-xl">{t("date")}</span>
      <h2 className="uppercase font-bold font-anybody-condensed text-4xl text-center md:text-6xl pixel-text">
        {t("subtitle")}
      </h2>

      <div className="flex flex-col items-center border-[1px] border-green border-dash-wide">
        <section className="w-full text-center bg-gradient-to-b from-black to-green-800 py-4 font-anybody font-bold">
          <p className="relative z-10 text-xl sm:text-3xl uppercase">
            {t("prizes.first")} <span>+</span> {t("prizes.second")}
          </p>
        </section>

        <p
          className="md:mt-3 max-w-2xl px-8 py-4 md:py-6 text-center font-roboto-mono text-base sm:text-xl
      text-white/90 uppercase tracking-tight
      
    "
        >
          {t("prizes.long")}
        </p>
      </div>

      <div className="space-y-4 relative p-2 bg-black md:-top-8 flex flex-col border-[1px] border-green rounded-md w-full max-w-lg">
        <button className="bg-gradient-to-b from-white to-green rounded-sm py-3 font-bold text-black uppercase font-anybody-expanded">
          {t("primary-button")}
        </button>
        <button className="text-green uppercase font-anybody underline">
          {t("secondary-button")}
        </button>
      </div>
    </section>
  );
}
