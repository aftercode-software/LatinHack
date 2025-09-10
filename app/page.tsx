import AlertBar from "./components/alert-bar/AlertBar";
import Container from "./components/Container";
import FAQ from "./components/faq/FAQ";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how-it-works/HowItWorks";

export default function Home() {
  return (
    <Container className="">
      <AlertBar />
      <Hero />
      <HowItWorks />
      <FAQ />
    </Container>
  );
}
