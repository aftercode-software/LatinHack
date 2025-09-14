"use client";

import { useScrollOffset } from "@/hooks/useScroll";
import { useTranslations } from "next-intl";
import Link from "next/link";
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
      <Container className="flex flex-col md:flex-row justify-between items-center">
        <img src="/logo.png" alt="logo" className="h-24" />
        <LanguageSwitcher />

        <LinkButton href="/">{t("button")}</LinkButton>
      </Container>
    </nav>
  );
}
