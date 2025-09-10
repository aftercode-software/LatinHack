import { useTranslations } from "next-intl";

import AlertBar from "./components/alert-bar/AlertBar";
import Container from "./components/Container";
import FAQ from "./components/faq/FAQ";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import PrizesAndOpportunities from "./components/prizes/PrizesAndOpportunities";
import Platform from "./components/progress-panel/Platform";
import Timeline from "./components/timeline/Timeline";
import WorkshopsAndResources from "./components/workshop/WorkshopsAndResources";
import MidCTA from "./components/call-to-action/MidCTA";
import Sponsors from "./components/sponsors/Sponsors";

export default function Home() {
    const t = useTranslations("MidCTA");

  return (
    <Container className="">
      <AlertBar />
      <Hero />
      <HowItWorks />
      <FAQ />
      <Timeline />
      <PrizesAndOpportunities />
      <WorkshopsAndResources />
      <Platform />
      <MidCTA 
       title={t("copy")}
      ctaLabel={t("cta")}
      ctaHref="/signup"
    />
    <Sponsors />
    </Container>
  );
}
