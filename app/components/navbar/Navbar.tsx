"use client";
import { useScrollOffset } from "@/hooks/useScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Container from "../Container";
import LanguageSwitcher from "../LanguageSwitcher";
import LinkButton from "../LinkButton";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const scrollY = useScrollOffset();
  const navRef = useRef<HTMLElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const visibleRef = useRef(false); // latch

  // build timeline once
  useGSAP(
    () => {
      if (!navRef.current) return;
      gsap.set(navRef.current, { y: -100 });
      tlRef.current = gsap.timeline({ paused: true }).to(navRef.current, {
        y: 0,
        duration: 0.2,
        ease: "power3.out",
      });
    },
    { scope: navRef }
  );

  // toggle only when crossing the threshold
  useGSAP(
    () => {
      if (!tlRef.current) return;
      const shouldShow = scrollY >= 200;

      if (shouldShow !== visibleRef.current) {
        visibleRef.current = shouldShow;
        if (shouldShow) tlRef.current.play();
        else tlRef.current.reverse();
      }
    },
    { dependencies: [scrollY] }
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 bg-black/90 border-b-2 border-green/50 border-dashed"
    >
      <Container className="flex flex-row justify-between items-center py-6 md:py-2">
        <img src="/logo.png" alt="logo" className="h-12 md:h-20" />
        <div className="flex flex-row items-center gap-4 md:gap-4">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <LinkButton
            className="text-xl px-4 py-2"
            href="http://app.latinhack.io/"
          >
            {t("button")}
          </LinkButton>
        </div>
      </Container>
    </nav>
  );
}
