import { Ship, Plane, Truck, Warehouse } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PILLARS = [
  {
    icon: Ship,
    title: "Marítimo",
    description: "Conexiones globales seguras y eficientes.",
  },
  {
    icon: Plane,
    title: "Aéreo",
    description: "Rapidez y cobertura internacional.",
  },
  {
    icon: Truck,
    title: "Terrestre",
    description: "Cobertura nacional e internacional.",
  },
  {
    icon: Warehouse,
    title: "Almacenamiento",
    description: "Espacios seguros y gestión de inventario.",
  },
];

export default function ServicePillars() {
  return (
    <section className="bg-carbon">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-y border-white/10 bg-white/10 px-0 lg:grid-cols-4 lg:px-8">
        {PILLARS.map((pillar, i) => (
          <ScrollReveal key={pillar.title} delay={i * 0.08} y={16}>
            <div className="flex h-full flex-col items-center gap-3 bg-carbon px-6 py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                <pillar.icon size={26} strokeWidth={1.75} />
              </span>
              <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm text-white/60">{pillar.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
