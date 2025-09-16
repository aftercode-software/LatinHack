"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type NullableElement = HTMLElement | null;

export type UseSplashTimelineParams = {
  containerRef: React.RefObject<NullableElement>;
  warpSpeedRef: React.RefObject<NullableElement>;
  onComplete?: () => void;
};

// Register the React plugin once; repeated registrations are safe (GSAP dedupes)
gsap.registerPlugin(useGSAP as unknown as gsap.Plugin);

export function useSplashTimeline({
  containerRef,
  warpSpeedRef,
  onComplete,
}: UseSplashTimelineParams) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".splash-title", { y: -100, autoAlpha: 0, duration: 1 })
        .from(".splash-logo", { y: -50, autoAlpha: 0, duration: 1 }, "-=0.4")
        .to(".splash-title", { autoAlpha: 0, duration: 0.4 })
        .to(".splash-logo", { autoAlpha: 0, duration: 0.4 }, "<")
        .to(
          warpSpeedRef.current,
          {
            autoAlpha: 0,
            duration: 0.2,
            onComplete,
          },
          "<+0.2"
        );

      timelineRef.current = tl;

      return () => {
        tl.kill();
        timelineRef.current = null;
      };
    },
    { scope: containerRef }
  );

  return timelineRef;
}

export default useSplashTimeline;
