import { useTranslations } from "next-intl";
import StepCard from "./StepCard";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");
  const steps = [
    {
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
    },
    {
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
  ];
  return (
    <section>
      <h2>{t("title")}</h2>
      <div>
        <ol className="list-decimal">
          {steps.map((step) => (
            <li key={step.title}>
              <StepCard title={step.title} description={step.description} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
