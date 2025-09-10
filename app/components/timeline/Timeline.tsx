import { useTranslations } from "next-intl";

export default function Timeline() {
  const t = useTranslations("Timeline");
  return (
    <section className="grid gap-8 my-10">
      <div className="grid gap-6">
        <div className="text-left ">
          <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">
              {t("phases.kickoff.date")}
            </span>
            <h3 className="font-semibold">{t("phases.kickoff.title")}</h3>
          </div>
          <div>→</div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">
              {t("phases.workshops.date")}
            </span>
            <h3 className="font-semibold">{t("phases.workshops.title")}</h3>
          </div>
          <div>→</div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">
              {t("phases.submission.date")}
            </span>
            <h3 className="font-semibold">{t("phases.submission.title")}</h3>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <h3 className="text-xl font-semibold">{t("participation.title")}</h3>
        <div className="flex flex-col gap-2">
          <p>{t("participation.remote")}</p>
          <p>{t("participation.inPerson")}</p>
        </div>
      </div>

      <div className="grid gap-4">
        <h3 className="text-xl font-semibold">{t("venues.title")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">
              {t("venues.countries.argentina.country")}
            </h4>
            <p className="text-sm">{t("venues.countries.argentina.city")}</p>
            <p className="text-sm text-gray-600">
              {t("venues.countries.argentina.date")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">
              {t("venues.countries.brazil.country")}
            </h4>
            <p className="text-sm">{t("venues.countries.brazil.city")}</p>
            <p className="text-sm text-gray-600">
              {t("venues.countries.brazil.date")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">
              {t("venues.countries.colombia.country")}
            </h4>
            <p className="text-sm">{t("venues.countries.colombia.city")}</p>
            <p className="text-sm text-gray-600">
              {t("venues.countries.colombia.date")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">
              {t("venues.countries.mexico.country")}
            </h4>
            <p className="text-sm">{t("venues.countries.mexico.city")}</p>
            <p className="text-sm text-gray-600">
              {t("venues.countries.mexico.date")}
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600">{t("microCopy")}</p>
    </section>
  );
}
