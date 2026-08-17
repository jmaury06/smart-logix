import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-carbon">
      <Image
        src="/images/hero-port.webp"
        alt="Terminal de contenedores portuaria"
        fill
        priority
        className="object-cover opacity-70"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/85 to-carbon/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <ScrollReveal>
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
            Comercio Exterior &amp; Logística Integral
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Logística Inteligente,{" "}
            <span className="text-gold">Éxito sin Fronteras</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Ayudamos a empresas importadoras, exportadoras y comercializadoras a
            gestionar su cadena logística de forma ágil, segura y eficiente,
            con un servicio cercano y personalizado.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#nosotros"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-carbon transition-transform hover:scale-105"
            >
              Conócenos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contáctanos
            </a>
          </div>
        </ScrollReveal>
      </div>

      <a
        href="#nosotros"
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-gold-light sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Descubra más</span>
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold" />
        </span>
      </a>
    </section>
  );
}
