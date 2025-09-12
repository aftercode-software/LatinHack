import { useTranslations } from "next-intl";
import StepsUnifiedBox from "./StepsUnifiedBox";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    { num: "01", title: t("steps.step1.title"), description: t("steps.step1.description") },
    { num: "02", title: t("steps.step2.title"), description: t("steps.step2.description") },
    { num: "03", title: t("steps.step3.title"), description: t("steps.step3.description") },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
      <h2 className="text-center text-green-500 uppercase tracking-widest leading-[0.9] text-[44px] md:text-6xl lg:text-7xl font-heading mb-8 md:mb-12">
        {t("title")}
      </h2>

      <StepsUnifiedBox steps={steps} />

      <div className="mt-8 md:mt-10 flex justify-center">
        <a
          href="/signup"
          className="inline-flex items-center justify-center px-6 md:px-8 py-3 rounded-lg text-black uppercase tracking-wide font-heading bg-[linear-gradient(180deg,#7dff6b_0%,#2cff00_60%,#7dff6b_100%)] shadow-[0_0_20px_rgba(44,255,0,0.45)] hover:shadow-[0_0_28px_rgba(44,255,0,0.65)] transition"
        >
          {t("primary-button")}
        </a>
      </div>
    </section>
  );
}
