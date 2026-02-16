import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20habitaci%C3%B3n%20en%20Luiggis%20Home";

const rooms = [
  {
    name: "Habitacion Clasica",
    description:
      "Perfecta para viajeros individuales o parejas. Equipada con cama doble, bano privado, aire acondicionado y todo lo necesario para una estadia confortable.",
    features: ["Cama doble", "Bano privado", "Aire acondicionado", "WiFi"],
  },
  {
    name: "Habitacion Superior",
    description:
      "Espaciosa y luminosa, ideal para quienes buscan un poco mas de comodidad. Incluye escritorio de trabajo y una vista agradable de la ciudad.",
    features: ["Cama queen", "Bano privado", "Escritorio", "Vista a la ciudad"],
  },
  {
    name: "Habitacion Familiar",
    description:
      "Disenada para familias o grupos pequenos. Amplia, con dos camas y espacio suficiente para que todos se sientan comodos.",
    features: ["2 camas", "Bano privado", "Espacio amplio", "Aire acondicionado"],
  },
];

export default function Rooms() {
  return (
    <section id="habitaciones" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Habitaciones
          </p>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Nuestras Habitaciones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            Cada habitacion ha sido pensada para brindarte el maximo confort
            durante tu estadia en Cucuta.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group overflow-hidden rounded-2xl border border-cream-dark bg-cream transition-shadow hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-cream-dark flex items-center justify-center">
                <span className="text-warm-gray text-sm">
                  Foto de {room.name}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  {room.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal-light">
                  {room.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-cream-dark px-3 py-1 text-xs font-medium text-charcoal-light"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
