import { useTranslations } from "next-intl";

import MidCTA from "./components/call-to-action/MidCTA";
import Container from "./components/Container";
import FAQ from "./components/faq/FAQ";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import PrizesAndOpportunities from "./components/prizes/PrizesAndOpportunities";
import Platform from "./components/progress-panel/Platform";
import Sponsors from "./components/sponsors/Sponsors";
import Timeline from "./components/timeline/Timeline";
import WorkshopsAndResources from "./components/workshop/WorkshopsAndResources";
import { CountDown } from "./components/hero/CountDown";

export default function Home() {
  const t = useTranslations("MidCTA");

  return (
    <Container className="">
      <Hero />
      <CountDown />
      <HowItWorks />
      <Timeline />
      <PrizesAndOpportunities />
      <WorkshopsAndResources />
      <Platform />
      <MidCTA title={t("copy")} ctaLabel={t("cta")} ctaHref="/signup" />
      <Sponsors />
      <FAQ />
    </Container>
  );
}
