/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function GoatSection({ title }: { title: string }) {
  return (
    <div
      className="h-[500px] bg-green flex items-center justify-center relative z-10 p-10"
      style={{
        backgroundImage: `url('/prizes/pasto.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src="/prizes/pix-ball.png"
        aria-hidden="true"
        className="h-[50%] md:h-[80%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse"
      />
      <div className="z-20 flex flex-col items-center justify-center drop-shadow-[0_0_10px_rgb(0,0,0)]">
        <img src="/polkadot_logo.svg" alt="" className="w-60 md:w-72" />
        <span className="text-white text-6xl md:text-8xl text-center uppercase font-upheaval drop-shadow-[0_0_20px_rgb(0,0,0)]">
          {title}
        </span>
      </div>
    </div>
  );
}
