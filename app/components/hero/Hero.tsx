"use client";

/* eslint-disable @next/next/no-img-element */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { CountDown } from "./CountDown";
import Prizes from "./PrizesAndButtons";

export default function Hero() {
  const t = useTranslations("Hero");

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });
    // .hero-title
    // .hero-logo
    // .hero-date
    // .globe
    // .prizes-and-buttons
    // .count-down

    tl.from(".globe", {
      opacity: 0,
      y: 100,
      rotate: 30,
      duration: 1,
    });
    tl.from(
      ".hero-title",
      {
        opacity: 0,
        y: -100,
        duration: 1,
      },
      "<+0.4"
    );
    tl.from(
      ".hero-logo",
      {
        opacity: 0,
        y: -50,
        duration: 1,
      },
      "<"
    );
    tl.from(
      ".main-title",
      {
        opacity: 0,
        scale: 0.8,
        duration: 1,
      },
      "<+0.6"
    );

    tl.from(
      ".prizes-and-buttons",
      {
        opacity: 0,
        duration: 1,
      },
      "<+0.7"
    );
    tl.from(
      ".count-down",
      {
        opacity: 0,
        duration: 1,
      },
      "<+0.3"
    );
    tl.from(
      ".arrow",
      {
        opacity: 0,
        duration: 1,
      },
      "<+0.3"
    );

    tl.from(
      ".hero-date",
      {
        opacity: 0,
        duration: 1,
      },
      "<+0.3"
    );
  });

  return (
    <section className="relative flex flex-col items-center justify-center gap-4 pt-20">
      <header className="flex flex-col items-center relative md:-space-y-10 hero-header">
        <h1 className="uppercase font-light font-anybody text-2xl md:text-3xl text-green text-center hero-title">
          {t.rich("title", {
            b: (chunks) => <b className="font-bold">{chunks}</b>,
          })}
        </h1>
        <img
          src="/logo.png"
          alt="logo"
          className="max-w-xl md:max-w-3xl -my-2 hero-logo"
        />
        <span className="font-roboto-mono text-green-50 uppercase text-xl md:text-2xl md:-mt-8 hero-date">
          {t("date")}
        </span>
      </header>

      <section className="relative isolate py-12 md:py-0">
        <img
          src="/globe.webp"
          alt=""
          className="
            pointer-events-none select-none 
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-[45%]
            w-[140vw] max-w-[1300px] aspect-square object-contain
            opacity-90 
            globe
          "
        />

        <span
          className="
            pointer-events-none
            absolute left-1/2 top-1/2 -z-10
            -translate-x-1/2 -translate-y-1/2
            w-[150vw] max-w-[1300px] aspect-square rounded-full
            bg-[radial-gradient(closest-side,rgba(16,255,0,0.35),transparent_70%)]
            blur-2xl opacity-70 globe
          "
        />

        <div className="relative z-10 flex flex-col items-center animate-[slideDown_1s_ease-out]">
          <h2 className="main-title uppercase font-bold font-upheaval text-4xl md:text-8xl text-center pixel-text text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
            {t("subtitle")}
          </h2>
          <Prizes />
          <img
            src="/flechon.png"
            alt=""
            className="w-30 object-contain animate-bounce arrow"
          />
          <CountDown />
        </div>
      </section>
    </section>
  );
}
