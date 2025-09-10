import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    <section>
      <span>{t("date")}</span>
      <h1>LATIN HACK: {t("title")}</h1>
      <div>
        <p>{t("prizes.first")}</p>
        <p>{t("prizes.second")} 🐐⚽️</p>
        <p>{t("prizes.long")}</p>
      </div>
      <div>
        <button>{t("primary-button")}</button>
        <button>{t("secondary-button")}</button>
      </div>
    </section>
  );
}
