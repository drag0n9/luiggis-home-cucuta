export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal-light/20 bg-charcoal py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <a href="#" className="font-serif text-xl font-bold text-white">
            Luiggis Home
          </a>
          <p className="break-all text-sm text-cream-dark/60">
            restauranteluiggiscucuta@gmail.com
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-cream-dark/50">
            &copy; {currentYear} Luiggis Home Cúcuta. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
