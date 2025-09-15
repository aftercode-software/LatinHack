/* eslint-disable @next/next/no-img-element */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import BasicCTA from "./components/call-to-action/BasicCTA";
import MidCTA from "./components/call-to-action/MidCTA";
import Container from "./components/Container";
import FAQ from "./components/faq/FAQ";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import PrizesAndOpportunities from "./components/prizes/PrizesAndOpportunities";
import Sponsors from "./components/sponsors/Sponsors";
import Timeline from "./components/timeline/Timeline";
import Venues from "./components/venues/Venues";
import WorkshopsAndResources from "./components/workshop/WorkshopsAndResources";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const t = useTranslations("MidCTA");

  return (
    <main className="relative">
      <Container className="relative">
        <Hero />
        <HowItWorks />
        <Timeline />
        <Venues />
        <PrizesAndOpportunities />
        <WorkshopsAndResources />
        {/* <Platform /> */}
        <MidCTA title={t("copy")} ctaLabel={t("cta")} ctaHref="/signup" />
        <Sponsors />
        <FAQ />
        <BasicCTA  />
      </Container>
    </main>
  );
}
