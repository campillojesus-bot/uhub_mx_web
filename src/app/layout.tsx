import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

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
    default: "uHub · Sistema de acompañamiento para emprendedores",
    template: "%s · uHub",
  },
  description:
    "uHub es el sistema y el acompañamiento para sostener el cambio que emprender exige. Sistema, mentores y comunidad para emprendedores en transición. Descubre qué tipo de emprendedor eres.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "uHub · Sistema de acompañamiento para emprendedores",
    description:
      "El cambio que emprender exige no ocurre solo. Sistema, mentores y comunidad para sostener tu emprendimiento.",
    url: siteUrl,
    siteName: "uHub",
    locale: "es_MX",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
