import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TeamMemberNotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-32 text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">404</span>
      <h1 className="mt-3 text-2xl font-bold text-carbon sm:text-3xl">Perfil no encontrado</h1>
      <p className="mt-3 max-w-md text-sm text-carbon/60">
        No encontramos a este integrante del equipo. Puede que el enlace sea incorrecto o que el
        perfil ya no esté disponible.
      </p>
      <Link
        href="/#equipo"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-carbon px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-carbon"
      >
        <ArrowLeft size={16} /> Volver al equipo
      </Link>
    </main>
  );
}
