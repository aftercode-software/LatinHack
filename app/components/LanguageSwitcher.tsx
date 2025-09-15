/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "../services/locale";

type LangCode = "en" | "es" | "pt";

const LANGS: Record<LangCode, { label: string; flag: string }> = {
  en: { label: "English", flag: "/flags/us.svg" },
  es: { label: "Español", flag: "/flags/ar.svg" },
  pt: { label: "Português", flag: "/flags/br.svg" },
};

export default function LanguageSwitcher() {
  const t = useTranslations();
  const locale = useLocale();
  const current: LangCode = useMemo(
    () => (locale?.startsWith("pt") ? "pt" : (locale as LangCode) || "en"),
    [locale]
  );

  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const others = (["en", "es", "pt"] as LangCode[]).filter(
    (c) => c !== current
  );

  const choose = async (code: LangCode) => {
    setOpen(false);
    await setUserLocale(code);
  };

  return (
    <div ref={boxRef} className="relative inline-block text-left">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-md border border-dashed border-green-500/60 bg-black/60 px-3 py-2 text-green-400 hover:text-green-300 transition"
      >
        <img
          src={LANGS[current].flag}
          alt={LANGS[current].label}
          className="rounded-full size-4"
        />

        <span className="text-white/80 text-sm hidden md:block">
          · {LANGS[current].label}
        </span>
        <span
          className={`ml-1 inline-block h-0 w-0 border-x-4 border-t-6 border-x-transparent border-t-green-400/80 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>

      <div
        role="menu"
        className={`absolute right-0 z-50 mt-2 w-full origin-top rounded-md border border-dashed border-green-500/60 bg-black/85 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all duration-150 ${
          open
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-75 opacity-0"
        }`}
      >
        {others.map((code) => (
          <button
            key={code}
            role="menuitem"
            onClick={() => choose(code)}
            className="w-full flex items-center gap-2 rounded-[6px] px-2 py-2 text-left hover:bg-white/5 focus:bg-white/10 outline-none transition"
          >
            <img
              src={LANGS[code].flag}
              alt={LANGS[code].label}
              className="rounded-full size-4"
            />
            <span className="text-sm text-green-400">{LANGS[code].label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
