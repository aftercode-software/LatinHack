import { useTranslations } from "next-intl";
import StepsUnifiedBox from "./StepsUnifiedBox";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      num: "01",
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
    },
    {
      num: "02",
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      num: "03",
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
      <h2 className="font-anybody-condensed text-center text-green-500 uppercase tracking-tight text-5xl md:text-6xl lg:text-8xl mb-8 md:mb-12">
        {t("title")}
      </h2>

      <StepsUnifiedBox steps={steps} />

      <div className="mt-8 md:mt-10 flex justify-center">
        <button className="bg-gradient-to-b from-white to-green rounded-sm py-3 font-bold text-black uppercase font-anybody-expanded px-8">
          {t("primary-button")}
        </button>
      </div>
    </section>
  );
}
