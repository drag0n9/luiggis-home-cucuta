import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n%20en%20Luiggis%20Home";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background placeholder - replace with real hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-warm-gray" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          Bed &amp; Breakfast en Cucuta
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
          Luiggis Home
          <br />
          <span className="text-cream-dark">Cucuta</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream-dark/90 md:text-xl">
          Un refugio acogedor donde la hospitalidad colombiana se encuentra con
          la comodidad de tu hogar.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-terracotta-dark"
          >
            <WhatsappLogo size={22} weight="fill" />
            Reserva Ahora
          </a>
          <a
            href="#habitaciones"
            className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Ver Habitaciones
          </a>
        </div>
      </div>
    </section>
  );
}
