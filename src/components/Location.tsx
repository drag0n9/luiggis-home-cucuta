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
            Estamos ubicados en una zona centrica de Cucuta, con facil acceso a
            transporte, restaurantes y puntos de interes.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-cream-dark">
          {/* Google Maps embed — replace the src with your actual embed URL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62837.81774040527!2d-72.53!3d7.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645a4f5a6b0e5%3A0x7e4c8b0c1b0e0a8a!2sC%C3%BAcuta%2C%20Norte%20de%20Santander!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicacion de Luiggis Home Cucuta"
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
