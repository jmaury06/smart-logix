import { Zap, MessageCircle, Puzzle, TrendingDown, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const REASONS = [
  {
    icon: Zap,
    title: "Respuesta rápida",
    description: "A sus requerimientos, cuando los necesite.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación clara",
    description: "Permanente durante toda la operación.",
  },
  {
    icon: Puzzle,
    title: "Soluciones adaptadas",
    description: "A la necesidad de cada cliente.",
  },
  {
    icon: TrendingDown,
    title: "Reducción de costos",
    description: "Enfoque en optimizar tiempos y costos logísticos.",
  },
  {
    icon: Users,
    title: "Acompañamiento experto",
    description: "Profesionales con experiencia en comercio exterior y supply chain.",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="bg-carbon py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
            Nuestra diferencia
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            ¿Por qué elegir Smart Logix?
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.08}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-carbon transition-transform duration-300 group-hover:scale-110">
                  <reason.icon size={20} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{reason.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
