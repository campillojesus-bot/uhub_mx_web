import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import "./preview-styles.css";
import "./root-home.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://uhub.mx";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "uHub · Centro de Desarrollo Emprendedor",
    template: "%s · uHub",
  },
  description:
    "uHub es un modelo de desarrollo emprendedor con la persona al centro. Práctica, mentores y comunidad para iniciar, rehacer o sostener proyectos.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "uHub · Centro de Desarrollo Emprendedor",
    description:
      "El centro eres tú. Alrededor, personas, hábitos y acompañamiento para seguir emprendiendo.",
    url: siteUrl,
    siteName: "uHub",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "uHub · Centro de Desarrollo Emprendedor" }],
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
