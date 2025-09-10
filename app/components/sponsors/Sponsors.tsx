"use client";

import { useTranslations } from "next-intl";

export default function Sponsors() {
  const t = useTranslations("Sponsors");

  const sponsors = [
    { name: "Acme Cloud", logoSrc: "/logos/acme.svg", href: "https://acme.com" },
    { name: "Dev Community", logoSrc: "/logos/dev.svg", href: "https://dev.to" },
    { name: "HostCorp", logoSrc: "/logos/host.svg" },
  ];

  return (
    <section className="my-10" id="sponsors">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">{t("title")}</h2>
          <p className="text-gray-600">{t("subtitle")}</p>
        </div>

        {sponsors.length === 0 ? (
          <p className="text-gray-500 text-center">{t("empty")}</p>
        ) : (
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6">
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
                    className="h-16 w-auto opacity-90 hover:opacity-100 transition"
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
