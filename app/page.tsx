import Hero from "@/components/Hero";
import ServicePillars from "@/components/ServicePillars";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Commitment from "@/components/Commitment";
import Team from "@/components/Team";
import Values from "@/components/Values";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ServicePillars />
      <About />
      <Services />
      <WhyUs />
      <Commitment />
      <Team />
      <Values />
      <Contact />
    </main>
  );
}
