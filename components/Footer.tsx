import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

const LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#contacto", label: "Contacto" },
];

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.6-1.5H16.5V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10.5H8v3h2.3V21h3.2Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4C4.45 4 3.7 4.75 3.7 5.7c0 .93.73 1.7 1.75 1.7h.02c1.03 0 1.75-.77 1.75-1.7C7.22 4.75 6.5 4 5.47 4ZM13.5 8.5h-2.83V20h2.83v-6.13c0-1.62.99-2.1 1.72-2.1.7 0 1.6.42 1.6 2.1V20H20v-6.63c0-3.13-1.68-4.37-3.62-4.37-1.63 0-2.36.9-2.77 1.53h-.03V8.5H13.5Z" />
    </svg>
  );
}

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon-soft">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="max-w-xs">
            <Image
              src="/logo-transparent.png"
              alt="Smart Logix SAS"
              width={200}
              height={97}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-white/50">
              Logística inteligente, éxito sin fronteras. Transporte marítimo,
              aéreo, terrestre y soluciones de almacenamiento.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Navegación
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Síganos
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <span
                  key={social.label}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60"
                >
                  <social.icon width={17} height={17} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Smart Logix SAS. Todos los derechos reservados.</p>
          <p>Barranquilla, Atlántico – Colombia</p>
        </div>
      </div>
    </footer>
  );
}
