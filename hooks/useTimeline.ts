"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

type Options = {
  /** Scope for selector-based tweens (recommended: same as triggerRef) */
  scopeRef: React.RefObject<HTMLElement | null>;
  /** Trigger element (defaults to scopeRef if omitted) */
  triggerRef?: React.RefObject<
    | Element
    | string
    | null
    | Window
    | ArrayLike<Element | string | Window | null>
  >;
  /** GSAP defaults for the timeline (ease, duration, etc.) */
  defaults?: gsap.TweenVars;
  /** ScrollTrigger vars (except trigger; we inject it) */
  scrollTrigger?: Omit<ScrollTrigger.Vars, "trigger">;
  /** Start paused? */
  paused?: boolean;
  /** Re-run if these external deps change (usually state/props you use in selectors) */
  deps?: React.DependencyList;
  /** Add your tweens/labels immediately when the timeline is created */
  onInit?: (tl: gsap.core.Timeline, ctx: gsap.Context) => void;
};

export function useScrollTriggerTimeline({
  scopeRef,
  triggerRef,
  defaults,
  scrollTrigger,
  paused = false,
  deps = [],
  onInit,
}: Options) {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Register plugin once (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const ctx = useGSAP(
    () => {
      const triggerEl = (triggerRef?.current ?? scopeRef?.current) || undefined;

      tlRef.current = gsap.timeline({
        defaults: {
          ...defaults,
          ease: "power3.out",
        },
        paused,
        scrollTrigger: scrollTrigger
          ? { trigger: triggerEl, ...scrollTrigger }
          : undefined,
      });

      // Let the caller add steps immediately & safely
      onInit?.(tlRef.current, ctx.context);

      // Cleanup
      return () => {
        tlRef.current?.scrollTrigger?.kill();
        tlRef.current?.kill();
        tlRef.current = null;
      };
    },
    {
      scope: scopeRef,
      // If your tweens use dynamic values, pass them via `deps` to rebuild cleanly
      dependencies: deps as unknown[],
    }
  );

  return {
    /** Access the live timeline instance */
    tl: tlRef,
    /** Wrap callbacks that interact with GSAP (e.g., in event handlers) */
    safe: ctx.contextSafe,
    /** Force ST to recalc positions if layout changes */
    refresh: () => ScrollTrigger.refresh(),
  };
}
