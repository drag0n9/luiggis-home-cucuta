import { MapPin } from "@phosphor-icons/react/dist/ssr";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Ubicacion
          </p>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Como Llegar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            A menos de 10 minutos del centro de Cúcuta, con supermercados
            cercanos y a pocos minutos del aeropuerto internacional.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-cream-dark">
          {/* Google Maps embed - replace the src with your actual embed URL */}
          <iframe
            src="https://maps.google.com/maps?q=Restaurante+Luiggi%27s+C%C3%BAcuta+Colombia&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Luiggis Home Cúcuta en Google Maps"
          />
        </div>

        <div className="mt-8 flex items-start gap-3 justify-center">
          <MapPin size={24} className="text-terracotta mt-0.5 shrink-0" />
          <p className="text-lg text-charcoal-light">
            Cucuta, Norte de Santander, Colombia
            <br />
            <span className="text-sm text-warm-gray">
              (Direccion exacta disponible al momento de la reserva)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
