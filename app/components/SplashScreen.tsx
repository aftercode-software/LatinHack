/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import WarpSpeedCanvas from "./WarpSpeed";

export default function SplashScreen() {
  const t = useTranslations("Hero");
  const [isVisible, setIsVisible] = useState(true);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const warpSpeedRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".splash-title", { y: -100, autoAlpha: 0, duration: 1 })
        .from(".splash-logo", { y: -50, autoAlpha: 0, duration: 1 }, "-=0.4")
        .to(".splash-title", { autoAlpha: 0, duration: 0.4 })
        .to(
          ".splash-logo",
          {
            autoAlpha: 0,
            duration: 0.4,
          },
          "<"
        )
        .to(
          warpSpeedRef.current,
          {
            autoAlpha: 0,
            duration: 0.2,
            onComplete: () => {
              setIsVisible(false);
            },
          },
          "<+0.2"
        );
    },
    { scope: containerRef }
  );

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 w-screen h-screen bg-black"
    >
      <div className="relative flex flex-col h-full w-full items-center justify-center">
        {/* <video
          ref={videoRef}
          src="/backgrounds/transition_speed.mp4"
          // no autoPlay → GSAP will call play()
          muted
          playsInline
          preload="auto"
          onEnded={() => setIsVisible(false)}
          className="splash-video absolute left-0 top-0 h-screen w-screen object-cover z-50 invisible"
          style={{ filter: "sepia(1) hue-rotate(95deg) saturate(6)" }}
        /> */}
        <div className="fixed inset-0 -z-50" ref={warpSpeedRef}>
          <WarpSpeedCanvas
            backgroundColor="#000"
            starColor="#39ff14"
            warpEffect
            warpEffectLength={4}
            starSize={3}
            density={1.2}
            speed={20}
          />
        </div>
        <span className="splash-title uppercase font-light font-anybody text-2xl md:text-3xl text-green text-center invisible">
          {t.rich("title", {
            b: (chunks) => <b className="font-bold">{chunks}</b>,
          })}
        </span>
        <img
          src="/logo.png"
          alt="logo"
          className="splash-logo object-contain h-40 md:h-90 invisible"
        />
      </div>
    </div>
  );
}
