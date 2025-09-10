import { useTranslations } from "next-intl";

export default function WorkshopsAndResources() {
  const t = useTranslations("WorkshopsAndResources");
  return (
    <div className="my-10">
      <div className="mx-auto">
        <div className="text-left mb-4">
          <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-gray-600">{t("objective")}</p>
        </div>

        <div className="gap-8">
          <section className=" rounded-lg">
            <p className="text-gray-600 mb-4">
              {t("workshops.schedule", { date: 0 })}
            </p>

            <div className="flex flex-row gap-4">
              <div className="p-4 rounded border border-gray-200 flex-1">
                <h4 className="font-medium text-white">
                  {t("workshops.topics.topic1.title")}
                </h4>
                <button className="text-gray-600 text-sm mt-2 hover:text-white">
                  {t("workshops.topics.topic1.calendar")}
                </button>
              </div>

              <div className="p-4 rounded border border-gray-200 flex-1">
                <h4 className="font-medium text-white">
                  {t("workshops.topics.topic2.title")}
                </h4>
                <button className="text-gray-600 text-sm mt-2 hover:text-white">
                  {t("workshops.topics.topic2.calendar")}
                </button>
              </div>
            </div>
          </section>

          <section className="mt-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <p className="text-gray-600 mb-4">{t("resources.description")}</p>
            <button className="-800 text-white py-2 rounded hover:-700">
              {t("resources.button")}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
