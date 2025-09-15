"use client";

import { useTranslations } from "next-intl";
import Title from "../Title";

export default function Sponsors() {
  const t = useTranslations("Sponsors");

  const sponsors = [
    { name: "Polkadot", logoSrc: "/polkadot.svg", href: "https://polkadot.network" },
    { name: "Aselleraction", logoSrc: "/aselleraction.svg", href: "https://aselleraction.com" },
    { name: "IBM", logoSrc: "/ibm.svg", href: "https://aselleraction.com" },
    { name: "Seed", logoSrc: "/seed.svg", href: "https://aselleraction.com" },
    { name: "Ruta", logoSrc: "/ruta.svg", href: "https://aselleraction.com" },
    { name: "Offramp", logoSrc: "/offramp.svg", href: "https://aselleraction.com" },
    { name: "Vercel", logoSrc: "/vercellogo.svg", href: "https://aselleraction.com" },
    { name: "Meta", logoSrc: "/meta.svg", href: "https://aselleraction.com" },
  ];

  return (
    <section className="margin-section" id="sponsors">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-6">
          <Title>{t("title")}</Title>
        </div>

        {sponsors.length === 0 ? (
          <p className="text-gray-500 text-center">{t("empty")}</p>
        ) : (
          <div className="
            grid grid-cols-2 gap-8 
            md:flex md:flex-wrap md:items-center md:justify-center md:gap-16">
            {sponsors.map((s) =>
              s.href ? (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
                >
                  <img
                    src={s.logoSrc}
                    alt={s.name}
                    width={140}
                    height={80}
                    className="h-8 md:h-16 w-auto opacity-90 hover:opacity-100 transition"
                  />
                </a>
              ) : (
                <div key={s.name} className="flex justify-center">
                  <img
                    src={s.logoSrc}
                    alt={s.name}
                    width={140}
                    height={80}
                    className="h-16 w-auto opacity-90 hover:opacity-100 transition"
                  />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
