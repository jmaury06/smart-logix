"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#por-que-elegirnos", label: "Por qué elegirnos" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-black/5 bg-white/85 shadow-sm"
          : "border-white/10 bg-white/55"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-[padding] duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Link href="/#inicio" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo-transparent.png"
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

        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="hidden lg:block">
          <Link
            href="/#contacto"
            className="rounded-full bg-carbon px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold hover:text-carbon"
          >
            Contáctanos
          </Link>
        </motion.div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-carbon lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className="text-base font-medium text-carbon/80"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-carbon px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Contáctanos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
