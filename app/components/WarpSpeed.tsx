"use client";

import React, { useEffect, useId, useMemo, useRef } from "react";

type WarpProps = {
  backgroundColor?: string; // canvas fill
  starColor?: string; // star/streak color
  speed?: number; // initial speed (>= 0)
  targetSpeed?: number; // target speed (>= 0)
  speedAdjFactor?: number; // 0..1 (how fast speed eases towards target)
  density?: number; // stars per 1000 (typ ~0.7)
  shape?: "circle" | "square"; // star shape / streak caps
  depthFade?: boolean; // alpha fades with z
  warpEffect?: boolean; // streaks vs points
  warpEffectLength?: number; // streak length factor
  starSize?: number; // scalar for star size
  className?: string;
  style?: React.CSSProperties;
};

export default function WarpSpeedCanvas({
  backgroundColor = "#000000",
  starColor = "#39ff14",
  speed = 0.7,
  targetSpeed = 0.7,
  speedAdjFactor = 0.03,
  density = 0.7,
  shape = "circle",
  depthFade = true,
  warpEffect = true,
  warpEffectLength = 5,
  starSize = 3,
  className,
  style,
}: WarpProps) {
  // Stable id the legacy code would have used to query the canvas
  const reactId = useId();
  const canvasId = useMemo(
    () => `warp-${reactId.replace(/[:]/g, "")}`,
    [reactId]
  );
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Re-init whenever core config changes (keeps things simple & predictable)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Helpers (ported) ---
    const timeStamp = () =>
      (window.performance &&
        window.performance.now &&
        window.performance.now()) ||
      Date.now();

    const isVisible = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return (
        r.top + r.height >= 0 &&
        r.left + r.width >= 0 &&
        r.bottom - r.height <= vh &&
        r.right - r.width <= vw
      );
    };

    class Star {
      x: number;
      y: number;
      z: number;
      size: number;
      constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = 0.5 + Math.random();
      }
    }

    // --- State (ported) ---
    let SPEED = Math.max(0, speed);
    const TARGET_SPEED = Math.max(0, targetSpeed);
    const SPEED_ADJ_FACTOR =
      speedAdjFactor < 0 ? 0 : speedAdjFactor > 1 ? 1 : speedAdjFactor;
    const DENSITY = density > 0 ? density : 0.7;
    const USE_CIRCLES = shape === "circle";
    const DEPTH_ALPHA = !!depthFade;
    const WARP_EFFECT = !!warpEffect;
    const WARP_EFFECT_LENGTH = Math.max(0, warpEffectLength);
    const STAR_SCALE = starSize > 0 ? starSize : 3;
    const BACKGROUND_COLOR = backgroundColor;
    const STAR_COLOR = starColor;

    const stars: Star[] = [];
    for (let i = 0; i < DENSITY * 1000; i++) {
      stars.push(
        new Star(
          (Math.random() - 0.5) * 1000,
          (Math.random() - 0.5) * 1000,
          1000 * Math.random()
        )
      );
    }

    let lastMoveTS = timeStamp();
    let prevW = -1;
    let prevH = -1;
    let size = 1;
    let maxLineWidth = 1;
    let drawRequest = 0;
    let paused = false;

    // --- Loop (ported) ---
    const move = () => {
      const t = timeStamp();
      const speedMulF = (t - lastMoveTS) / (1000 / 60);
      lastMoveTS = t;
      if (paused) return;

      const adj = Math.pow(
        SPEED_ADJ_FACTOR < 0 ? 0 : SPEED_ADJ_FACTOR > 1 ? 1 : SPEED_ADJ_FACTOR,
        1 / (speedMulF || 1)
      );
      SPEED = TARGET_SPEED * adj + SPEED * (1 - adj);
      if (SPEED < 0) SPEED = 0;
      const s = SPEED * speedMulF;

      for (let i = 0; i < stars.length; i++) {
        const st = stars[i];
        st.z -= s;
        while (st.z < 1) {
          st.z += 1000;
          st.x = (Math.random() - 0.5) * st.z;
          st.y = (Math.random() - 0.5) * st.z;
        }
      }
    };

    const draw = () => {
      if (!canvas) return;

      move();

      if (!paused && isVisible(canvas)) {
        // Resize backing store to device pixels when client size changes
        if (prevW !== canvas.clientWidth || prevH !== canvas.clientHeight) {
          const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
          canvas.width = Math.max(10, canvas.clientWidth) * dpr;
          canvas.height = Math.max(10, canvas.clientHeight) * dpr;
        }

        size =
          (Math.min(canvas.height, canvas.width) || 1) /
          (10 / (STAR_SCALE <= 0 ? 0 : STAR_SCALE));
        if (WARP_EFFECT) maxLineWidth = size / 30;

        const ctx = canvas.getContext("2d")!;
        ctx.globalAlpha = 1;
        ctx.fillStyle = BACKGROUND_COLOR;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = STAR_COLOR;

        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const xOnDisplay = s.x / s.z;
          const yOnDisplay = s.y / s.z;

          if (
            !WARP_EFFECT &&
            (xOnDisplay < -0.5 ||
              xOnDisplay > 0.5 ||
              yOnDisplay < -0.5 ||
              yOnDisplay > 0.5)
          )
            continue;

          const pxSize = (s.size * size) / s.z;
          if (pxSize < 0.3) continue;

          if (DEPTH_ALPHA) {
            const alpha = (1000 - s.z) / 1000;
            ctx.globalAlpha = alpha < 0 ? 0 : alpha > 1 ? 1 : alpha;
          } else {
            ctx.globalAlpha = 1;
          }

          if (WARP_EFFECT) {
            const x2 = s.x / (s.z + WARP_EFFECT_LENGTH * SPEED);
            const y2 = s.y / (s.z + WARP_EFFECT_LENGTH * SPEED);
            if (x2 < -0.5 || x2 > 0.5 || y2 < -0.5 || y2 > 0.5) continue;

            ctx.beginPath();
            ctx.moveTo(
              canvas.width * (xOnDisplay + 0.5) - pxSize / 2,
              canvas.height * (yOnDisplay + 0.5) - pxSize / 2
            );
            ctx.lineTo(
              canvas.width * (x2 + 0.5) - pxSize / 2,
              canvas.height * (y2 + 0.5) - pxSize / 2
            );
            ctx.lineWidth = pxSize > maxLineWidth ? maxLineWidth : pxSize;
            ctx.lineCap = USE_CIRCLES ? "round" : "butt";
            ctx.strokeStyle = STAR_COLOR;
            ctx.stroke();
          } else if (USE_CIRCLES) {
            ctx.beginPath();
            ctx.arc(
              canvas.width * (xOnDisplay + 0.5) - pxSize / 2,
              canvas.height * (yOnDisplay + 0.5) - pxSize / 2,
              pxSize / 2,
              0,
              Math.PI * 2
            );
            ctx.fillStyle = STAR_COLOR;
            ctx.fill();
          } else {
            ctx.fillStyle = STAR_COLOR;
            ctx.fillRect(
              canvas.width * (xOnDisplay + 0.5) - pxSize / 2,
              canvas.height * (yOnDisplay + 0.5) - pxSize / 2,
              pxSize,
              pxSize
            );
          }
        }

        prevW = canvas.clientWidth;
        prevH = canvas.clientHeight;
      }

      // Queue next frame
      drawRequest = window.requestAnimationFrame(draw);
      // const lastRender = timeStamp() - TIME; // available if you want diagnostics
    };

    // Kick off
    drawRequest = window.requestAnimationFrame(draw);

    // Pause on tab hidden; resume on visible
    const onVis = () => {
      paused = document.hidden;
      if (!paused && !drawRequest) {
        drawRequest = window.requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    // Handle resizes (canvas uses clientWidth/Height)
    const onResize = () => {
      prevW = -1;
      prevH = -1;
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      try {
        window.cancelAnimationFrame(drawRequest);
      } catch {}
      drawRequest = 0;
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
    };
  }, [
    backgroundColor,
    starColor,
    speed,
    targetSpeed,
    speedAdjFactor,
    density,
    shape,
    depthFade,
    warpEffect,
    warpEffectLength,
    starSize,
  ]);

  return (
    <div className={className} style={{ position: "relative", ...style }}>
      <canvas
        id={canvasId}
        ref={canvasRef}
        style={{ width: "100vw", height: "100vh", display: "block" }}
      />
    </div>
  );
}
