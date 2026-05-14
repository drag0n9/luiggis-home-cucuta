"use client";

import { useState, useEffect } from "react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";

const WHATSAPP_URL =
  "https://wa.me/573106731076?text=Hola%2C%20quiero%20reservar%20una%20habitaci%C3%B3n%20en%20Luiggis%20Home";

const NAV_LINKS = [
  { href: "#habitaciones", label: "Habitaciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#sobre-nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-cream/95 backdrop-blur-sm border-b border-cream-dark" : "bg-transparent border-b border-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className={`font-serif text-2xl font-bold transition-colors duration-300 ${scrolled ? "text-charcoal" : "text-white"}`}>
          Luiggis Home
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${scrolled ? "text-charcoal-light hover:text-terracotta" : "text-white/90 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
          >
            <WhatsappLogo size={18} weight="fill" />
            Reservar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 ${scrolled ? "text-charcoal" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="border-t border-cream-dark bg-cream px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-charcoal-light transition-colors hover:text-terracotta"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              <WhatsappLogo size={18} weight="fill" />
              Reservar
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
