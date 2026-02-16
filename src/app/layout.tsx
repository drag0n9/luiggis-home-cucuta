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
    title: "Luiggis Home Cucuta | Hospedaje Acogedor",
    description:
      "Un acogedor bed & breakfast en el corazon de Cucuta, Colombia.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luiggis Home Cucuta",
    description:
      "Un acogedor bed & breakfast en el corazon de Cucuta, Colombia.",
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
              telephone: "+57-300-000-0000",
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
