"use client";

import { useTranslations } from "next-intl";
import CardProgress, { CardProgressProps } from "./CardProgress";

export default function Platform() {
  const t = useTranslations("Platforms");

  const items: CardProgressProps[] = [
    {
      title: t("cards.account.title"),
      description: t("cards.account.desc"),
      actions: [{ label: t("cards.account.cta"), href: "/signup", variant: "primary" }],
    },
    {
      title: t("cards.discord.title"),
      description: t("cards.discord.desc"),
      actions: [
        { label: t("cards.discord.cta"), href: "https://discord.com/invite/", variant: "primary" },
        { label: t("cards.discord.secondary"), href: "https://discord.com/invite/", variant: "link" },
      ],
    },
  ];

  return (
    <section className="my-10" id="platforms">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-left mb-4">
          <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-gray-600">{t("microcopy")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((props, idx) => (
            <CardProgress key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
