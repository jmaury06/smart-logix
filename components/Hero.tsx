"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -top-24 right-[10%] h-72 w-72 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float-slow-reverse pointer-events-none absolute bottom-0 left-[5%] h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

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
            <motion.a
              href="#nosotros"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-carbon"
            >
              Conócenos
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white"
            >
              Contáctanos
            </motion.a>
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
