import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-light/20 bg-charcoal py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <a href="#" className="font-serif text-xl font-bold text-white">
            Luiggis Home
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-cream-dark/60 transition-colors hover:text-gold"
              aria-label="Instagram"
            >
              <InstagramLogo size={22} />
            </a>
            <a
              href="#"
              className="text-cream-dark/60 transition-colors hover:text-gold"
              aria-label="Facebook"
            >
              <FacebookLogo size={22} />
            </a>
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-dark/60 transition-colors hover:text-gold"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={22} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-cream-dark/50">
            &copy; {currentYear} Luiggis Home Cucuta. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
