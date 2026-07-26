import type { Metadata } from "next";
import { TestQuadrant } from "@/components/test/TestQuadrant";

export const metadata: Metadata = {
  title: "¿Qué tipo de emprendedor eres?",
  description:
    "Diagnóstico de 10 preguntas que identifica tu perfil: Autoemprendedor, Reemprendedor, Intraemprendedor o Interemprendedor.",
  alternates: { canonical: "/test" },
};

export default function TestPage() {
  return (
    <div className="bg-gray-light">
      <TestQuadrant />
    </div>
  );
}
