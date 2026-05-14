import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-nosotros" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/luiggis-home-cucuta/images/sobre-nosotros.jpg"
              alt="Ambiente acogedor de Luiggis Home Cúcuta — sala iluminada que refleja calidez y descanso"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
              Sobre Nosotros
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
              Un lugar para
              <br />
              descansar de verdad
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              Luiggis Home es un hospedaje familiar en Cúcuta pensado para
              quienes necesitan un lugar seguro, tranquilo y cómodo. Nos importa
              que puedas descansar de verdad, sin preocupaciones.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              Estamos a menos de 10 minutos del centro de la ciudad, con
              supermercados cerca y el aeropuerto internacional a pocos minutos.
              Una ubicación práctica, en un entorno tranquilo.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              Somos una familia, y así te atendemos. Contamos con restaurante
              propio donde puedes desayunar o almorzar sin salir del hospedaje.
              Lo que más nos importa es tu seguridad, tu paz y tu descanso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
