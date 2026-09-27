import type { Metadata } from "next";
import { TestQuadrant } from "@/components/test/TestQuadrant";
import { SiteHeader, SiteFooter } from "../components";

export const metadata: Metadata = {
  title: "¿Qué tipo de emprendedor eres?",
  description:
    "Diagnóstico de 10 preguntas que identifica tu perfil: Autoemprendedor, Reemprendedor, Intraemprendedor o Interemprendedor.",
  alternates: { canonical: "/test" },
};

export default function TestPage() {
  return (
    <><SiteHeader /><main id="contenido" className="bg-gray-light"><TestQuadrant /></main><SiteFooter /></>
  );
}
