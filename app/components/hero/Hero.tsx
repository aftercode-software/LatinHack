/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section className="h-[60vh] flex flex-col items-center justify-center gap-4">
      <h1 className="uppercase">
        {" "}
        {t.rich("title", {
          b: (chunks) => <b className="font-bold">{chunks}</b>,
        })}
      </h1>
      <img src={"/logo.png"} alt="logo" />
      <span>{t("date")}</span>
      <h2 className="text-4xl uppercase font-bold">{t("subtitle")}</h2>

      <div className="items-center justify-center flex flex-col">
        <section className="flex gap-4">
          <p>{t("prizes.first")}</p>
          <p>{t("prizes.second")} 🐐⚽️</p>
        </section>
        <p className="max-w-xl text-center">{t("prizes.long")}</p>
      </div>
      <div className="space-y-4 flex flex-col">
        <button>{t("primary-button")}</button>
        <button>{t("secondary-button")}</button>
      </div>
    </section>
  );
}
