import {
  WifiHigh,
  CookingPot,
  Snowflake,
  Car,
  Television,
  ShieldCheck,
  Coffee,
  FirstAid,
} from "@phosphor-icons/react/dist/ssr";

const amenities = [
  {
    icon: WifiHigh,
    title: "WiFi Gratis",
    description: "Conexion de alta velocidad en todas las areas",
  },
  {
    icon: CookingPot,
    title: "Desayuno Incluido",
    description: "Desayuno casero con productos frescos de la region",
  },
  {
    icon: Snowflake,
    title: "Aire Acondicionado",
    description: "Climatizacion en todas las habitaciones",
  },
  {
    icon: Car,
    title: "Parqueadero",
    description: "Estacionamiento privado y seguro",
  },
  {
    icon: Television,
    title: "TV por Cable",
    description: "Television con canales nacionales e internacionales",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad 24h",
    description: "Vigilancia y acceso controlado las 24 horas",
  },
  {
    icon: Coffee,
    title: "Area Comun",
    description: "Salon compartido con cafe y te disponible",
  },
  {
    icon: FirstAid,
    title: "Kit de Aseo",
    description: "Toallas, jabon y articulos de aseo personal",
  },
];

export default function Amenities() {
  return (
    <section id="servicios" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Servicios
          </p>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Lo Que Ofrecemos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light">
            Todo lo que necesitas para una estadia perfecta, pensado con
            atencion al detalle.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="rounded-2xl bg-white p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10">
                <amenity.icon size={28} className="text-terracotta" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-charcoal">
                {amenity.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
