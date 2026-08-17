import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contacto" className="bg-carbon py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light">
            Hablemos
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Contáctenos
          </h2>
          <p className="mt-4 text-base text-white/70">
            Cuéntenos sobre su próximo embarque. Nuestro equipo le responderá a la brevedad.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
                Atención directa
              </p>
              <p className="mt-2 text-xl font-bold text-white">Jhohans Córdoba Rojas</p>
              <p className="text-sm text-white/60">CEO, Smart Logix SAS</p>
            </div>

            <a
              href="https://wa.me/573024224759"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-carbon">
                <MessageCircle size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="text-sm text-white/60">+57 302 422 4759</p>
              </div>
            </a>

            <a
              href="tel:+573024224759"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-carbon">
                <Phone size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Teléfono</p>
                <p className="text-sm text-white/60">302 422 4759</p>
              </div>
            </a>

            <a
              href="mailto:contacto@smartlogix.co"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-carbon">
                <Mail size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Correo</p>
                <p className="text-sm text-white/60">contacto@smartlogix.co</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-carbon">
                <MapPin size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Ubicación</p>
                <p className="text-sm text-white/60">Barranquilla, Atlántico – Colombia</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
