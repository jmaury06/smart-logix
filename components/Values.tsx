import { ShieldCheck, Handshake, Award, Gauge, Users2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integridad",
    description: "Actuamos con transparencia y ética.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description: "Nos ponemos en el lugar de nuestros clientes.",
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Buscamos la excelencia en cada operación.",
  },
  {
    icon: Gauge,
    title: "Eficiencia",
    description: "Optimizamos recursos para mejores resultados.",
  },
  {
    icon: Users2,
    title: "Trabajo en equipo",
    description: "Creemos en el poder de las alianzas.",
  },
];

export default function Values() {
  return (
    <section id="valores" className="relative overflow-hidden bg-offwhite py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Lo que nos define
          </span>
          <h2 className="mt-5 text-3xl font-bold text-carbon sm:text-4xl">
            Nuestros Valores
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-5">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08} className={i === 4 ? "col-span-2 lg:col-span-1" : undefined}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-carbon text-gold transition-transform duration-300 group-hover:scale-110">
                  <value.icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className="font-semibold text-carbon">{value.title}</h3>
                <p className="text-sm text-carbon/65">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
