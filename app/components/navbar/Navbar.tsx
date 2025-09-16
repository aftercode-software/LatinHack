/* eslint-disable @next/next/no-img-element */
"use client";

import { useScrollOffset } from "@/hooks/useScroll";
import { useTranslations } from "next-intl";

import Container from "../Container";
import LanguageSwitcher from "../LanguageSwitcher";
import LinkButton from "../LinkButton";

export default function Navbar() {
  const t = useTranslations("Navbar");

  const scrollY = useScrollOffset();

  if (scrollY < 200) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b-2 border-green/50 border-dashed">
      <Container className="flex flex-row justify-between items-center">
        <img src="/logo.png" alt="logo" className="h-20" />
        <div className="flex flex-row justify-between items-center md:gap-4 gap-4 my-2 pb-4">
          <section className="hidden md:block">
            <LanguageSwitcher />
          </section>
          <LinkButton className="text-xl px-4 py-2" href="/">
            {t("button")}
          </LinkButton>
        </div>
      </Container>
    </nav>
  );
}
