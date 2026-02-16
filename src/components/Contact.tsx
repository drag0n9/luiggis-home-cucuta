import {
  WhatsappLogo,
  Phone,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react/dist/ssr";

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n%20en%20Luiggis%20Home";

export default function Contact() {
  return (
    <section id="contacto" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contacto
          </p>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Hablemos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-dark/80">
            Estamos listos para ayudarte a planificar tu estadia. Contactanos
            por WhatsApp para una respuesta inmediata.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-green-600 px-10 py-5 text-lg font-bold text-white transition-colors hover:bg-green-700"
          >
            <WhatsappLogo size={28} weight="fill" />
            Escribenos por WhatsApp
          </a>
        </div>

        {/* Contact details */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Phone size={24} className="text-gold" />
            </div>
            <p className="mt-4 text-base font-medium text-white">Telefono</p>
            <p className="mt-1 text-cream-dark/70">+57 300 000 0000</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <EnvelopeSimple size={24} className="text-gold" />
            </div>
            <p className="mt-4 text-base font-medium text-white">Email</p>
            <p className="mt-1 text-cream-dark/70">info@luiggishome.com</p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <InstagramLogo size={24} className="text-gold" />
            </div>
            <p className="mt-4 text-base font-medium text-white">Redes Sociales</p>
            <div className="mt-2 flex items-center justify-center gap-4">
              <a
                href="#"
                className="text-cream-dark/70 transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} />
              </a>
              <a
                href="#"
                className="text-cream-dark/70 transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <FacebookLogo size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
