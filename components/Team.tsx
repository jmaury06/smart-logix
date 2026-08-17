import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TEAM, getInitials } from "@/lib/team";

export default function Team() {
  return (
    <section id="equipo" className="relative overflow-hidden bg-white py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Nuestra gente
          </span>
          <h2 className="mt-5 text-3xl font-bold text-carbon sm:text-4xl">
            Equipo de Trabajo
          </h2>
          <p className="mt-4 text-base text-carbon/70">
            Profesionales con experiencia en comercio exterior y supply chain,
            comprometidos con el éxito de su operación.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.slug} delay={(i % 3) * 0.1}>
              <Link
                href={`/equipo/${member.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-offwhite p-7 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-gold/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-carbon text-base font-bold tracking-wide text-gold-light ring-4 ring-gold/10 transition-transform duration-300 group-hover:scale-105">
                    {getInitials(member.name)}
                  </span>
                  <span className="rounded-full bg-carbon/5 px-3 py-1 text-xs font-semibold text-carbon/70">
                    {member.yearsExperience} años de experiencia
                  </span>
                </div>

                <h3 className="mt-6 flex items-center gap-1.5 text-lg font-bold text-carbon">
                  {member.name}
                  <ArrowUpRight
                    size={17}
                    className="text-gold-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-1 text-sm font-semibold text-gold-dark">{member.role}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-carbon/65">
                  {member.summary}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-carbon/40 transition-colors group-hover:text-gold-dark">
                  Ver perfil profesional
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
