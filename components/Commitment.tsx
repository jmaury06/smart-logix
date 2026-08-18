import Image from "next/image";
import { Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Commitment() {
  return (
    <section className="relative isolate overflow-hidden bg-carbon-soft py-24">
      <Image
        src="/images/accent-port.webp"
        alt="Grúas portuarias al atardecer"
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-soft via-carbon-soft/90 to-carbon-soft" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
            <Target size={26} strokeWidth={1.75} />
          </span>
          <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
            Nuestro compromiso
          </h2>
          <p className="mt-5 text-xl font-medium leading-relaxed text-white/85 sm:text-2xl">
            Mover su carga con seguridad, visibilidad y cumplimiento,{" "}
            <span className="text-gold">para que usted pueda concentrarse en hacer
            crecer su negocio.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
