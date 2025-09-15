/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslations } from "next-intl";
import Title from "../Title";

export default function Sponsors() {
  const t = useTranslations("Sponsors");

  const sponsors = [
    {
      name: "Polkadot",
      logoSrc: "/polkadot.svg",
      href: "https://polkadot.network",
    },
    {
      name: "Aselleraction",
      logoSrc: "/aselleraction.svg",
      href: "https://aselleraction.com",
    },
    { name: "IBM", logoSrc: "/ibm.svg", href: "https://aselleraction.com" },
    { name: "Seed", logoSrc: "/seed.svg", href: "https://aselleraction.com" },
    { name: "Ruta", logoSrc: "/ruta.svg", href: "https://aselleraction.com" },
    {
      name: "Offramp",
      logoSrc: "/offramp.svg",
      href: "https://aselleraction.com",
    },
    {
      name: "Vercel",
      logoSrc: "/vercellogo.svg",
      href: "https://aselleraction.com",
    },
    { name: "Meta", logoSrc: "/meta.svg", href: "https://aselleraction.com" },
  ];

  const topRow = sponsors.slice(0, 3);
  const bottomRow = sponsors.slice(3, 8);

  const spanIfOddLast = (i: number, len: number) =>
    len % 2 === 1 && i === len - 1 ? "col-span-2 md:col-span-1" : "";

  const LogoWrap = ({
    children,
    className = "",
  }: React.PropsWithChildren<{ className?: string }>) => (
    <div className={`flex justify-center ${className}`}>{children}</div>
  );

  return (
    <section className="margin-section" id="sponsors">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-6">
          <Title>{t("title")}</Title>
        </div>

        {sponsors.length === 0 ? (
          <p className="text-gray-500 text-center">{t("empty")}</p>
        ) : (
          <div className="space-y-8 md:space-y-10">
            {/* Fila 1 (pirámide): 3 logos, más grandes y ancho más chico */}
            <div className="mx-auto w-full md:max-w-4xl grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-x-14 md:gap-y-6 md:place-items-center">
              {topRow.map((s, i) => {
                const wrapClasses = spanIfOddLast(i, topRow.length);
                const Img = (
                  <img
                    src={s.logoSrc}
                    alt={s.name}
                    width={180}
                    height={108}
                    className="h-10 md:h-20 w-auto opacity-90 hover:opacity-100 transition"
                  />
                );
                return s.href ? (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`justify-self-center ${wrapClasses}`}
                  >
                    <LogoWrap>{Img}</LogoWrap>
                  </a>
                ) : (
                  <LogoWrap
                    key={s.name}
                    className={`justify-self-center ${wrapClasses}`}
                  >
                    {Img}
                  </LogoWrap>
                );
              })}
            </div>

            {/* Fila 2 (pirámide): 5 logos, más ancha y con mayor separación */}
            <div className="mx-auto w-full md:max-w-6xl grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-x-20 md:gap-y-8 md:place-items-center">
              {bottomRow.map((s, i) => {
                const wrapClasses = spanIfOddLast(i, bottomRow.length);
                const Img = (
                  <img
                    src={s.logoSrc}
                    alt={s.name}
                    width={140}
                    height={80}
                    className="h-8 md:h-16 w-auto opacity-90 hover:opacity-100 transition"
                  />
                );
                return s.href ? (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`justify-self-center ${wrapClasses}`}
                  >
                    <LogoWrap>{Img}</LogoWrap>
                  </a>
                ) : (
                  <LogoWrap
                    key={s.name}
                    className={`justify-self-center ${wrapClasses}`}
                  >
                    {Img}
                  </LogoWrap>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
