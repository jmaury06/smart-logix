import Image from "next/image";
import { Users2, Globe2, Clock3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HIGHLIGHTS = [
  { icon: Globe2, text: "Experiencia en comercio exterior" },
  { icon: Users2, text: "Coordinación logística personalizada" },
  { icon: Clock3, text: "Seguimiento operativo constante" },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <ScrollReveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-gold/40 sm:-left-6 sm:-top-6" />
            <Image
              src="/images/accent-warehouse.webp"
              alt="Bodega moderna con sistema de almacenamiento en racks"
              width={900}
              height={700}
              className="relative rounded-2xl object-cover shadow-xl"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-dark">
            ¿Quiénes somos?
          </span>
          <h2 className="mt-5 text-3xl font-bold text-carbon sm:text-4xl">
            Su aliado logístico de confianza en{" "}
            <span className="text-gold-dark">Barranquilla</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-carbon/70">
            En <strong className="text-carbon">Smart Logix SAS</strong> ayudamos a
            empresas importadoras, exportadoras y comercializadoras a gestionar su
            cadena logística de forma <strong className="text-carbon">ágil, segura y
            eficiente</strong>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-carbon/70">
            Contamos con experiencia en comercio exterior, coordinación logística y
            seguimiento operativo, ofreciendo un servicio cercano y personalizado
            que facilita la toma de decisiones y reduce tiempos de respuesta.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-carbon text-gold">
                  <item.icon size={18} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-carbon/80">{item.text}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
