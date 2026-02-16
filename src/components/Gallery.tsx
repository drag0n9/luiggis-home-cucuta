const galleryItems = [
  { label: "Fachada del hospedaje", span: "md:col-span-2 md:row-span-2" },
  { label: "Habitacion principal", span: "" },
  { label: "Area del desayuno", span: "" },
  { label: "Sala de estar", span: "" },
  { label: "Detalle decoracion", span: "" },
  { label: "Vista exterior", span: "md:col-span-2" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Galeria
          </p>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Conoce Nuestro Espacio
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`aspect-square rounded-2xl bg-cream-dark flex items-center justify-center p-4 ${item.span}`}
            >
              <span className="text-warm-gray text-sm text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
