import { useTranslations } from "next-intl";

export default function Timeline() {
  const t = useTranslations("Timeline");
  return (
    <section className="w-full px-4 py-10 md:py-16 flex flex-col">
      <h2 className="text-center text-green-500 uppercase font-anybody-ultra-condensed tracking-widest leading-[0.9] text-[44px] md:text-6xl lg:text-7xl mb-8 md:mb-12">
        {t("title")} 
      </h2>
      <div className="justify-between flex-1 flex items-center ">
        <div className="flex flex-col flex-1 bg-black/70 px-4 py-5 md:px-6 font-anybody md:py-6 border-2 border-dashed border-green-500/60">
           <h3 className="text-center font-anybody-condensed text-white text-6xl">{t("phases.kickoff.title")}</h3>
          <span className="text-center text-sm text-green-600">
                  {t("phases.kickoff.date")}
                </span>
        </div>
        <div className="flex-1 h-1 border-t-2 border-dashed border-green-500/60 rounded-full "></div>
        <div className="flex flex-col flex-1 bg-black/70 px-4 py-5 md:px-6 font-anybody md:py-6 border-2 border-dashed border-green-500/60"> 
          <h3 className="text-center font-anybody-condensed text-white text-6xl">{t("phases.workshops.title")}</h3>

          <span className="text-center text-sm text-green-600">
              {t("phases.workshops.date")}
            </span>
        </div>
        <div className="flex-1 h-1 border-t-2 border-dashed border-green-500/60 rounded-full"></div>
      <div className="flex flex-col flex-1 bg-black/70 px-4 py-5 md:px-6 font-anybody md:py-6 border-2 border-dashed border-green-500/60"> 
          <h3 className="text-center font-anybody-condensed text-white text-6xl">{t("phases.submission.title")}</h3>
          <span className="text-center text-sm text-green-600">
              {t("phases.submission.date")}
            </span>
        </div>
    </div>
    </section>
  );
}
