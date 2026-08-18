import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Briefcase, GraduationCap, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { TEAM, getTeamMember, getInitials } from "@/lib/team";

export function generateStaticParams() {
  return TEAM.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return { title: "Perfil no encontrado | Smart Logix SAS" };
  return {
    title: `${member.name} | Smart Logix SAS`,
    description: member.summary,
    // Sección de equipo temporalmente oculta: no indexar hasta publicar perfiles reales.
    robots: { index: false, follow: false },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  return (
    <main className="flex-1 bg-white">
      <section className="relative isolate overflow-hidden bg-carbon pb-20 pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-gold-light"
          >
            <ArrowLeft size={16} /> Volver al inicio
          </Link>

          <ScrollReveal className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/5 text-2xl font-bold tracking-wide text-gold-light ring-4 ring-gold/20">
              {getInitials(member.name)}
            </span>
            <div>
              <h1 className="text-3xl font-bold text-white sm:text-4xl">{member.name}</h1>
              <p className="mt-2 text-base font-semibold text-gold-light">{member.role}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70">
                  {member.education}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70">
                  {member.specialty}
                </span>
                <span className="rounded-full bg-gold/15 px-3.5 py-1.5 text-xs font-semibold text-gold-light">
                  {member.yearsExperience} años de experiencia
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <ScrollReveal>
          <p className="max-w-3xl text-lg leading-relaxed text-carbon/75">{member.bio}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 rounded-full bg-offwhite px-3.5 py-1.5 text-xs font-semibold text-carbon/70 ring-1 ring-black/5"
            >
              <Award size={13} className="text-gold-dark" />
              {skill}
            </span>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-16">
          <h2 className="flex items-center gap-2.5 text-xl font-bold text-carbon">
            <Briefcase size={20} className="text-gold-dark" />
            Trayectoria profesional
          </h2>

          <div className="relative mt-8 flex flex-col gap-8 border-l border-black/10 pl-8">
            {member.experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-gold/15" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-bold text-carbon">{job.role}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-carbon/40">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-gold-dark">{job.company}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {job.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2.5 text-sm text-carbon/65">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-carbon/30" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-16 flex items-center gap-2 border-t border-black/5 pt-8">
          <GraduationCap size={18} className="text-gold-dark" />
          <p className="text-sm text-carbon/60">
            <span className="font-semibold text-carbon">{member.education}</span> — formación
            complementaria en {member.specialty.toLowerCase()}.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25} className="mt-12 rounded-2xl bg-carbon p-8 text-center sm:p-10">
          <p className="text-white/70">
            ¿Quiere trabajar con {member.name.split(" ")[0]} y el equipo de Smart Logix?
          </p>
          <Link
            href="/#contacto"
            className="mt-5 inline-block rounded-full bg-gold px-7 py-3 text-sm font-semibold text-carbon transition-transform hover:scale-105"
          >
            Hablemos de su operación
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
