"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, WhatsappLogo, CaretLeft, CaretRight } from "@phosphor-icons/react";

const WHATSAPP_URL =
  "https://wa.me/573106731076?text=Hola%2C%20quiero%20reservar%20una%20habitaci%C3%B3n%20en%20Luiggis%20Home";

type ClimateOption = "fan" | "ac";

const rooms = [
  {
    id: "doble",
    name: "Habitación Doble",
    badge: "2 disponibles",
    description:
      "Cómoda habitación doble ideal para viajeros y parejas. Equipada con baño privado, TV y WiFi. Disponible con ventilador (precio base) o con aire acondicionado por costo adicional.",
    features: ["Cama doble", "Baño privado", "TV", "WiFi"],
    prices: { fan: "$96.000", ac: "$120.000" },
    photos: [
      {
        src: "/luiggis-home-cucuta/images/doble-principal.jpg",
        alt: "Habitación Doble en Luiggis Home Cúcuta — cama doble con pared de mármol, TV y escritorio",
      },
      {
        src: "/luiggis-home-cucuta/images/doble-cama.jpg",
        alt: "Habitación Doble en Luiggis Home Cúcuta — vista de la cama doble con closet y TV",
      },
      {
        src: "/luiggis-home-cucuta/images/doble-escritorio.jpg",
        alt: "Habitación Doble en Luiggis Home Cúcuta — escritorio de trabajo con aire acondicionado",
      },
      {
        src: "/luiggis-home-cucuta/images/doble-bano.jpg",
        alt: "Baño privado de la Habitación Doble con ducha de vidrio y techo en mármol",
      },
      {
        src: "/luiggis-home-cucuta/images/doble-bano-2.jpg",
        alt: "Baño privado de la Habitación Doble — vista desde la entrada con ventana y ducha",
      },
      {
        src: "/luiggis-home-cucuta/images/doble-bano-3.jpg",
        alt: "Ducha de la Habitación Doble con pared de mármol y cabezal empotrado",
      },
    ],
  },
  {
    id: "delux",
    name: "Habitación Doble Delux",
    badge: "1 disponible",
    description:
      "Nuestra habitación más confortable, con acabados de mayor calidad y más espacio. Baño privado, TV y WiFi incluidos. Disponible con ventilador (precio base) o con aire acondicionado por costo adicional.",
    features: ["Cama doble", "Baño privado", "TV", "WiFi", "Acabados premium"],
    prices: { fan: "$100.000", ac: "$125.000" },
    photos: [
      {
        src: "/luiggis-home-cucuta/images/delux-cama-1.jpg",
        alt: "Habitación Doble Delux en Luiggis Home Cúcuta — cama doble con pared de mármol y TV",
      },
      {
        src: "/luiggis-home-cucuta/images/delux-closet.jpg",
        alt: "Habitación Doble Delux en Luiggis Home Cúcuta — closet amplio y aire acondicionado",
      },
      {
        src: "/luiggis-home-cucuta/images/delux-tocador.jpg",
        alt: "Habitación Doble Delux en Luiggis Home Cúcuta — tocador con espejo circular iluminado",
      },
      {
        src: "/luiggis-home-cucuta/images/delux-cama-2.jpg",
        alt: "Habitación Doble Delux en Luiggis Home Cúcuta — vista alternativa de la cama doble",
      },
      {
        src: "/luiggis-home-cucuta/images/delux-bano.jpg",
        alt: "Baño privado de la Habitación Doble Delux con ducha de vidrio y paredes en mármol",
      },
      {
        src: "/luiggis-home-cucuta/images/delux-closet-2.jpg",
        alt: "Closet interior de la Habitación Doble Delux con perchero y espejo circular iluminado",
      },
      {
        src: "/luiggis-home-cucuta/images/delux-tocador-2.jpg",
        alt: "Área de tocador de la Habitación Doble Delux con aire acondicionado y espejo redondo",
      },
    ],
  },
];

type Room = (typeof rooms)[0];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const [cardPhoto, setCardPhoto] = useState<Record<string, number>>({
    doble: 0,
    delux: 0,
  });
  const [climate, setClimate] = useState<Record<string, ClimateOption>>({
    doble: "fan",
    delux: "fan",
  });

  useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedRoom]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!selectedRoom) return;
      if (e.key === "Escape") setSelectedRoom(null);
      if (e.key === "ArrowLeft") setActivePhoto((p) => (p - 1 + selectedRoom.photos.length) % selectedRoom.photos.length);
      if (e.key === "ArrowRight") setActivePhoto((p) => (p + 1) % selectedRoom.photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedRoom]);

  const touchStartX = useRef<number | null>(null);
  const swipeOccurred = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    swipeOccurred.current = false;
  };

  const handleTouchEnd = (roomId: string, total: number) => (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      swipeOccurred.current = true;
      setCardPhoto((prev) => ({
        ...prev,
        [roomId]: (prev[roomId] + (delta > 0 ? 1 : -1) + total) % total,
      }));
    }
    touchStartX.current = null;
  };

  const openModal = (room: Room) => {
    if (swipeOccurred.current) {
      swipeOccurred.current = false;
      return;
    }
    setSelectedRoom(room);
    setActivePhoto(cardPhoto[room.id]);
  };

  const stepCard = (e: React.MouseEvent, roomId: string, dir: 1 | -1, total: number) => {
    e.stopPropagation();
    setCardPhoto((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] + dir + total) % total,
    }));
  };

  const stepModal = (dir: 1 | -1) => {
    if (!selectedRoom) return;
    setActivePhoto((p) => (p + dir + selectedRoom.photos.length) % selectedRoom.photos.length);
  };

  return (
    <>
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
              Cada habitación ha sido pensada para brindarte el máximo confort
              durante tu estadía en Cúcuta.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="overflow-hidden rounded-2xl border border-cream-dark bg-cream"
              >
                {/* Card image with arrows */}
                <div
                  className="group relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd(room.id, room.photos.length)}
                >
                  <button
                    onClick={() => openModal(room)}
                    className="absolute inset-0 z-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-terracotta"
                    aria-label={`Ver fotos de ${room.name}`}
                  >
                    <Image
                      src={room.photos[cardPhoto[room.id]].src}
                      alt={room.photos[cardPhoto[room.id]].alt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>

                  {/* Availability badge */}
                  <span className="absolute left-4 top-4 z-10 rounded-full border border-terracotta/40 bg-white/90 px-3 py-1 text-xs font-semibold text-terracotta">
                    {room.badge}
                  </span>

                  {/* Prev arrow */}
                  <button
                    onClick={(e) => stepCard(e, room.id, -1, room.photos.length)}
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white transition-opacity hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Foto anterior"
                  >
                    <CaretLeft size={18} weight="bold" />
                  </button>

                  {/* Next arrow */}
                  <button
                    onClick={(e) => stepCard(e, room.id, 1, room.photos.length)}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white transition-opacity hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Foto siguiente"
                  >
                    <CaretRight size={18} weight="bold" />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                    {room.photos.map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1.5 w-1.5 rounded-full transition-all ${
                          cardPhoto[room.id] === i ? "bg-white w-3" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    {room.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal-light">
                    {room.description}
                  </p>

                  {/* Climate toggle */}
                  <div
                    className="mt-5 flex overflow-hidden rounded-full border border-cream-dark text-sm font-medium"
                    role="group"
                    aria-label="Seleccionar tipo de climatización"
                  >
                    <button
                      onClick={() => setClimate((prev) => ({ ...prev, [room.id]: "fan" }))}
                      className={`flex-1 py-2 text-center transition-colors ${
                        climate[room.id] === "fan"
                          ? "bg-charcoal text-white"
                          : "bg-white text-charcoal-light hover:bg-cream-dark"
                      }`}
                      aria-pressed={climate[room.id] === "fan"}
                    >
                      Ventilador
                    </button>
                    <button
                      onClick={() => setClimate((prev) => ({ ...prev, [room.id]: "ac" }))}
                      className={`flex-1 py-2 text-center transition-colors ${
                        climate[room.id] === "ac"
                          ? "bg-charcoal text-white"
                          : "bg-white text-charcoal-light hover:bg-cream-dark"
                      }`}
                      aria-pressed={climate[room.id] === "ac"}
                    >
                      Aire Acondicionado
                    </button>
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-bold text-charcoal">
                      {room.prices[climate[room.id]]}
                    </span>
                    <span className="text-sm text-warm-gray">COP / noche</span>
                  </div>

                  {/* Features */}
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
                    Reservar esta habitación
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedRoom(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-charcoal shadow transition-colors hover:bg-cream-dark"
              aria-label="Cerrar modal"
            >
              <X size={16} weight="bold" />
              Cerrar
            </button>

            {/* Main photo with arrows */}
            <div className="group relative aspect-[16/9] overflow-hidden rounded-t-2xl">
              <Image
                src={selectedRoom.photos[activePhoto].src}
                alt={selectedRoom.photos[activePhoto].alt}
                fill
                className="object-cover"
              />

              <button
                onClick={() => stepModal(-1)}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-opacity hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Foto anterior"
              >
                <CaretLeft size={22} weight="bold" />
              </button>

              <button
                onClick={() => stepModal(1)}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-opacity hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Foto siguiente"
              >
                <CaretRight size={22} weight="bold" />
              </button>

              {/* Photo counter */}
              <span className="absolute bottom-3 right-4 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white">
                {activePhoto + 1} / {selectedRoom.photos.length}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto px-6 pt-4">
              {selectedRoom.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                    activePhoto === i
                      ? "border-terracotta"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Ver foto ${i + 1} de ${selectedRoom.name}`}
                  aria-pressed={activePhoto === i}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Details */}
            <div className="p-6">
              <h2
                id="modal-title"
                className="font-serif text-3xl font-bold text-charcoal"
              >
                {selectedRoom.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light">
                {selectedRoom.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {selectedRoom.features.map((feature) => (
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
                Reservar esta habitación
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
