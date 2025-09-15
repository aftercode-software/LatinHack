/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import Title from "../Title";
import GoatSection from "./GoatSection";
import PrizeCard from "./PrizeCard";

export default function PrizesAndOpportunities() {
  const t = useTranslations("PrizesAndOpportunities");

  const prizes = [
    {
      title: t("items.prize1.title"),
      iconImage: "/prizes/trophy-solid.svg",
      description: t("items.prize1.description"),
    },
    {
      title: t("items.prize2.title"),
      iconImage: "/prizes/users-solid.svg",
      description: t("items.prize2.description"),
    },
    {
      title: t("items.prize3.title"),
      iconImage: "/prizes/plane-solid.svg",
      description: t.rich("items.prize3.description", {
        polkadot: (chunks) => (
          <span className="font-bold text-pink-600">{chunks}</span>
        ),
        sub0: (chunks) => (
          <span className="font-bold text-green">{chunks}</span>
        ),
      }),
    },
  ];

  return (
    <section className="margin-section">
      <img
        src="/flechon.png"
        alt=""
        className="w-60 mx-auto object-contain animate-bounce"
      />
      <div className="text-left mb-4">
        <Title>{t("title")}</Title>
      </div>

      <div className="grid xl:grid-cols-3 gap-8 mb-12">
        {prizes.map((prize) => (
          <PrizeCard
            key={prize.title}
            prize={prize.title}
            iconImage={prize.iconImage}
            description={prize.description}
          />
        ))}
      </div>
      <GoatSection title={t("goat")} />
      <div className="text-center border-2 border-dashed border-green mt-8 py-6 bg-black/20">
        <p className="text-white text-3xl uppercase font-anybody">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}
