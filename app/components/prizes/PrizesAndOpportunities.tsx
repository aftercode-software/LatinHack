import { useTranslations } from "next-intl";

export default function PrizesAndOpportunities() {
  const t = useTranslations("PrizesAndOpportunities");
  return (
    <section className="my-10">
      <div className="text-left mb-4">
        <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
        <p className="text-lg text-gray-600">{t("objective")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 rounded-lg border">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-semibold mb-2">
            {t("items.prize1.title")}
          </h3>
          <p className="text-gray-600">{t("items.prize1.description")}</p>
        </div>

        <div className="text-center p-6 rounded-lg border">
          <div className="text-4xl mb-4">👥</div>
          <h3 className="text-xl font-semibold mb-2">
            {t("items.prize2.title")}
          </h3>
          <p className="text-gray-600">{t("items.prize2.description")}</p>
        </div>

        <div className="text-center p-6 rounded-lg border">
          <div className="text-4xl mb-4">✈️</div>
          <h3 className="text-xl font-semibold mb-2">
            {t("items.prize3.title")}
          </h3>
          <p className="text-gray-600">{t("items.prize3.description")}</p>
        </div>
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold text-gray-200 mb-2">
          {t("footer.highlight")}
        </div>
        <p className="text-gray-600">{t("footer.description")}</p>
      </div>
    </section>
  );
}
