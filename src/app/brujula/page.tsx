import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components";
import { BrujulaExperience } from "./BrujulaExperience";
import "./brujula.css";

export const metadata: Metadata = {
  title: "Brújula emprendedora · uHüb",
  description: "Explora qué necesitas fortalecer en mentalidad, habilidades, acción y liderazgo con la brújula emprendedora de uHub. Obtén tres acciones para tu semana.",
  alternates: { canonical: "/brujula" },
};

export default function BrujulaPage() {
  return (
    <>
      <SiteHeader />
      <main className="br-page" id="contenido">
        <BrujulaExperience />
      </main>
      <SiteFooter />
    </>
  );
}
