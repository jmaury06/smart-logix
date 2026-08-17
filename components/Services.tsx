import { Ship, Truck, ClipboardList, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    icon: Ship,
    title: "Transporte Internacional",
    items: ["Marítimo (FCL / LCL)", "Aéreo", "Terrestre internacional"],
  },
  {
    icon: Truck,
    title: "Transporte Nacional",
    items: [
      "Carga seca y consolidada",
      "Distribución urbana y regional",
      "Coordinación puerta a puerta",
    ],
  },
  {
    icon: ClipboardList,
    title: "Soluciones Logísticas",
    items: [
      "Seguimiento y trazabilidad de embarques",
      "Coordinación documental de importación y exportación",
      "Almacenamiento y manejo de inventario",
      "Distribución y última milla",
      "Acompañamiento operativo y atención personalizada",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-offwhite py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Lo que hacemos
          </span>
          <h2 className="mt-5 text-3xl font-bold text-carbon sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-base text-carbon/70">
            Soluciones integrales para cada etapa de su cadena de suministro.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-carbon text-gold">
                  <service.icon size={26} strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-carbon">{service.title}</h3>
                <ul className="mt-5 flex flex-1 flex-col gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-carbon/70">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold-dark" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
