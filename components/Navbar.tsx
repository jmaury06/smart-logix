"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#por-que-elegirnos", label: "Por qué elegirnos" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#valores", label: "Valores" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-black/5 shadow-sm" : "border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-[padding] duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Link href="/#inicio" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Smart Logix SAS"
            width={220}
            height={107}
            className="h-10 w-auto transition-all duration-300 sm:h-12"
            priority
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-carbon/80 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contacto"
          className="hidden rounded-full bg-carbon px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-carbon lg:inline-block"
        >
          Contáctanos
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-carbon lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-carbon/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-carbon px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
