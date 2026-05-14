import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiggis Home Cucuta | Hospedaje Acogedor en Cucuta, Colombia",
  description:
    "Descubre Luiggis Home Cucuta, un acogedor bed & breakfast en el corazon de Cucuta, Colombia. Habitaciones confortables, desayuno incluido y la mejor atencion personalizada.",
  keywords: [
    "hospedaje cucuta",
    "bed and breakfast cucuta",
    "hotel cucuta colombia",
    "alojamiento cucuta",
    "luiggis home",
  ],
  openGraph: {
    title: "Luiggis Home Cúcuta | Tu descanso en Cúcuta",
    description:
      "Donde la calidez es parte del servicio. Reserva directo a mejor precio, sin intermediarios.",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "https://drag0n9.github.io/luiggis-home-cucuta/images/hero-habitacion.jpg",
        width: 1200,
        height: 800,
        alt: "Habitación de Luiggis Home Cúcuta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiggis Home Cúcuta",
    description:
      "Donde la calidez es parte del servicio. Reserva directo a mejor precio, sin intermediarios.",
    images: ["https://drag0n9.github.io/luiggis-home-cucuta/images/hero-habitacion.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Luiggis Home Cucuta",
              description:
                "Acogedor bed & breakfast en Cucuta, Colombia",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cucuta",
                addressRegion: "Norte de Santander",
                addressCountry: "CO",
              },
              telephone: "+57-310-673-1076",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
