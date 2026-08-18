import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PHONES = [
  { number: "302 422 4759", href: "tel:+573024224759" },
  { number: "304 374 4272", href: "tel:+573043744272" },
  { number: "324 386 8993", href: "tel:+573243868993" },
];

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
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-carbon">
                <Phone size={20} strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">Celular</p>
                <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1">
                  {PHONES.map((phone, i) => (
                    <span key={phone.number} className="flex items-center">
                      <a
                        href={phone.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {phone.number}
                      </a>
                      {i < PHONES.length - 1 && <span className="ml-2 text-white/20">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="mailto:administrativo@smartlogixgroup.com"
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-carbon">
                <Mail size={20} strokeWidth={2} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">Correo</p>
                <p className="text-sm text-white/60 break-words">
                  administrativo@smartlogixgroup.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-carbon">
                <MapPin size={20} strokeWidth={2} />
              </span>
              <div className="min-w-0">
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
