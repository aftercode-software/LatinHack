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
        autoAlpha: 0,
      },
    });

    setTimeout(() => {
      tl.from(".globe", {
        y: 100,
        rotate: 30,
        duration: 1,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: -100,
            duration: 1,
          },
          "<+0.4"
        )
        .from(
          ".hero-logo",
          {
            opacity: 0,
            y: -50,
            duration: 1,
          },
          "<"
        )
        .from(
          ".main-title",
          {
            opacity: 0,
            scale: 0.8,
            duration: 1,
          },
          "<+0.6"
        )
        .from(
          ".prizes-and-buttons",
          {
            opacity: 0,
            duration: 1,
          },
          "<+0.7"
        )
        .from(
          ".count-down",
          {
            opacity: 0,
            duration: 1,
          },
          "<+0.3"
        )
        .from(
          ".arrow",
          {
            opacity: 0,
            duration: 1,
          },
          "<+0.3"
        )
        .from(
          ".hero-date",
          {
            opacity: 0,
            duration: 1,
          },
          "<+0.3"
        );
    }, 2000);
  });

  return (
    <section className="relative flex flex-col items-center justify-center gap-4 pt-20 ">
      <header className="flex flex-col items-center relative hero-header">
        <h1 className="uppercase font-light font-anybody text-xl md:text-3xl text-green text-center hero-title">
          {t.rich("title", {
            b: (chunks) => <b className="font-bold">{chunks}</b>,
          })}
        </h1>
        <div className="h-52">
          <img
            src="/logo.png"
            alt="logo"
            className="h-32 md:h-48 w-full hero-logo md:-mt-4"
          />
        </div>
        <span className="font-roboto-mono text-green-50 uppercase text-xl md:text-2xl hero-date">
          {t("date")}
        </span>
      </header>

      <section className="relative isolate py-6 md:py-0">
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

        <div className="relative z-10 flex flex-col items-center animate-[slideDown_1s_ease-out]">
          <h2 className="main-title uppercase font-bold font-upheaval text-5xl md:text-8xl text-center pixel-text text-white drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
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
