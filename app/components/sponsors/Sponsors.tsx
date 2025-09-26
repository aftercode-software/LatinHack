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
  {
    name: "Vercel",
    logoSrc: "/vercellogo.svg",
    href: "https://v0.app/",
  },
];

const sponsors2 = [
  { name: "Web3dev", logoSrc: "/web3dev.png", href: "https://web3.dev/" },
  { name: "SunsetLabs", logoSrc: "/sunset.png", href: "https://sunsetlabs.com.br/" },
  { name: "Sub0", logoSrc: "/sub0-white.svg", href: "https://sub0.gg/" },
];

export default function Sponsors() {
  const t = useTranslations("Sponsors");

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

            {/* ===== Sponsors 1: columna, primero más grande ===== */}
            <div className="mx-auto w-full md:max-w-xl grid grid-cols-1 gap-6 md:gap-6 place-items-center">
              {sponsors.map((s, i) => {
                const Img = (
                  <img
                    src={s.logoSrc}
                    alt={s.name}
                    width={i === 0 ? 220 : 180}
                    height={i === 0 ? 120 : 108}
                    className={`w-auto opacity-90 hover:opacity-100 transition mb-10 sponsor-image ${
                      i === 0 ? "h-14 md:h-20" : "h-10 md:h-12"
                    }`}
                  />
                );
                return s.href ? (
                  <a
                    key={s.name}
                    href={s.href}
                    data-link-name={`sponsor_${s.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-self-center"
                  >
                    <LogoWrap>{Img}</LogoWrap>
                  </a>
                ) : (
                  <LogoWrap key={s.name} className="justify-self-center">
                    {Img}
                  </LogoWrap>
                );
              })}
            </div>
            <Title className="sponsors-title">{t("title2")}</Title>

            {/* ===== Sponsors 3: tres en una fila ===== */}
            <div className="mx-auto w-full md:max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-10 md:gap-y-20 place-items-center">

              {sponsors2.map((s) => {
                const Img = (
                  <img
                    src={s.logoSrc}
                    alt={s.name}
                    width={140}
                    height={80}
                    className="h-8 md:h-12 w-auto opacity-90 hover:opacity-100 transition sponsor-image"
                  />
                );
                return s.href ? (
                  <a
                    key={s.name}
                    href={s.href}
                    data-link-name={`sponsor_${s.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-self-center"
                  >
                    <LogoWrap>{Img}</LogoWrap>
                  </a>
                ) : (
                  <LogoWrap key={s.name} className="justify-self-center">
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
