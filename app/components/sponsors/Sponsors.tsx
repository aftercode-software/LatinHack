/* eslint-disable @next/next/no-img-element */
"use client";

import { useScrollTriggerTimeline } from "@/hooks/useTimeline";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Title from "../Title";

const sponsors = [
  {
    name: "Polkadot",
    logoSrc: "/polkadot.svg",
    href: "https://polkadot.network",
  },

  // {
  //   name: "Aselleraction",
  //   logoSrc: "/aselleraction.svg",
  //   href: "https://aselleraction.com",
  // },
  // { name: "IBM", logoSrc: "/ibm.svg", href: "https://aselleraction.com" },
  // { name: "Seed", logoSrc: "/seed.svg", href: "https://aselleraction.com" },
  // { name: "Ruta", logoSrc: "/ruta.svg", href: "https://aselleraction.com" },
  // {
  //   name: "Offramp",
  //   logoSrc: "/offramp.svg",
  //   href: "https://aselleraction.com",
  // },

  // { name: "Meta", logoSrc: "/meta.svg", href: "https://aselleraction.com" },
];

const sponsors2 = [
  {
    name: "Vercel",
    logoSrc: "/vercellogo.svg",
    href: "https://aselleraction.com",
  },
  {
    name: "Web3dev",
    logoSrc: "/web3dev.png",
    href: "https://web3.dev/",
  },
];

export default function Sponsors() {
  const t = useTranslations("Sponsors");

  const topRow = sponsors.slice(0, 3);

  const spanIfOddLast = (i: number, len: number) =>
    len % 2 === 1 && i === len - 1 ? "col-span-2 md:col-span-1" : "";

  const LogoWrap = ({
    children,
    className = "",
  }: React.PropsWithChildren<{ className?: string }>) => (
    <div className={`flex justify-center ${className}`}>{children}</div>
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const { tl } = useScrollTriggerTimeline({
    scopeRef: containerRef,
    scrollTrigger: {
      start: "top 80%",
      end: "30% 80%",
    },
  });

  useGSAP(() => {
    const currentTl = tl.current;
    if (!currentTl) return;
    currentTl.from(".sponsors-title", {
      opacity: 0,
      y: 50,
      duration: 0.5,
    });
    currentTl.from(
      ".sponsor-image",
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.1,
      },
      "<+0.3"
    );
  });

  return (
    <section className="margin-section" id="sponsors" ref={containerRef}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-6">
          <Title className="sponsors-title">{t("title")}</Title>
        </div>

        {sponsors.length === 0 ? (
          <p className="text-gray-500 text-center">{t("empty")}</p>
        ) : (
          <div className="space-y-8 md:space-y-10">
            <div className="mx-auto w-full md:max-w-xl grid grid-cols-1 gap-6 md:gap-x-14 md:gap-y-6 md:place-items-center">
              {topRow.map((s, i) => {
                const wrapClasses = spanIfOddLast(i, topRow.length);
                const Img = (
                  <img
                    src={s.logoSrc}
                    alt={s.name}
                    width={180}
                    height={108}
                    className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition"
                  />
                );
                return s.href ? (
                  <a
                    key={s.name}
                    href={s.href}
                    data-link-name={`sponsor_${s.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`justify-self-center ${wrapClasses} sponsor-image`}
                  >
                    <LogoWrap>{Img}</LogoWrap>
                  </a>
                ) : (
                  <LogoWrap
                    key={s.name}
                    className={`justify-self-center ${wrapClasses} sponsor-image`}
                  >
                    {Img}
                  </LogoWrap>
                );
              })}
            </div>

            <div className="mx-auto w-full md:max-w-6xl grid grid-cols-2 gap-6 md:gap-x-20 md:gap-y-8 md:place-items-center">
              {sponsors2.map((s) => {
                const Img = (
                  <img
                    src={s.logoSrc}
                    alt={s.name}
                    width={140}
                    height={80}
                    className="h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition"
                  />
                );
                return s.href ? (
                  <a
                    key={s.name}
                    href={s.href}
                    data-link-name={`sponsor_${s.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`justify-self-center`}
                  >
                    <LogoWrap>{Img}</LogoWrap>
                  </a>
                ) : (
                  <LogoWrap key={s.name} className={`justify-self-center`}>
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
