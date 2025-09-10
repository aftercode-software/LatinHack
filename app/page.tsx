import AlertBar from "./components/alert-bar/AlertBar";
import Container from "./components/Container";
import FAQ from "./components/faq/FAQ";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import PrizesAndOpportunities from "./components/prizes/PrizesAndOpportunities";
import Timeline from "./components/timeline/Timeline";
import WorkshopsAndResources from "./components/workshop/WorkshopsAndResources";

export default function Home() {
  return (
    <Container className="">
      <AlertBar />
      <Hero />
      <HowItWorks />
      <FAQ />
      <Timeline />
      <PrizesAndOpportunities />
      <WorkshopsAndResources />
    </Container>
  );
}
