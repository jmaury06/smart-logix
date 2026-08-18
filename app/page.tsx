import Hero from "@/components/Hero";
import ServicePillars from "@/components/ServicePillars";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Commitment from "@/components/Commitment";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <main className="flex-1">
        <Hero />
        <ServicePillars />
        <About />
        <Services />
        <WhyUs />
        <Commitment />
        {/* Equipo: oculto hasta contar con perfiles y biografías reales del equipo */}
        <Values />
        <Contact />
      </main>
    </>
  );
}
