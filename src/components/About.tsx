export default function About() {
  return (
    <section id="sobre-nosotros" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image placeholder */}
          <div className="aspect-[4/5] rounded-2xl bg-cream-dark flex items-center justify-center">
            <span className="text-warm-gray text-sm">
              {/* Replace with real image */}
              Imagen del hospedaje
            </span>
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
              Sobre Nosotros
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
              Tu hogar lejos
              <br />
              de casa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-light">
              Luiggis Home Cucuta nacio del deseo de ofrecer a viajeros y
              visitantes un espacio donde sentirse como en casa. Ubicados en el
              corazon de Cucuta, combinamos la calidez de la hospitalidad
              colombiana con habitaciones confortables y un servicio
              personalizado.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
              Cada manana te recibimos con un delicioso desayuno casero,
              preparado con ingredientes frescos de la region. Nuestro objetivo
              es que tu estadia sea memorable, ya sea que vengas por negocios o
              por placer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
