import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components";
import "../../resource-pages.css";

export const metadata: Metadata = {
  title: "Tu Kit de Estructura",
  description: "Descarga tu Kit de Estructura uHub: cuadrante, reto de siete días y plantilla de Acción Mínima Efectiva.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/kit/gracias" },
};

export default function KitGracias() {
  return <><SiteHeader /><main id="contenido" className="resource-page kit-thanks">
    <div className="resource-shell">
      <p className="resource-kicker">uHüb · Kit de Estructura</p>
      <h1>Tu kit está listo.</h1>
      <p className="resource-lead">Descárgalo aquí. No necesitas esperar otro correo para empezar.</p>
      <a className="button button-primary" href="/kit/Kit_de_Estructura_uHub.pdf" download>Descargar mi kit <span aria-hidden="true">↓</span></a>
      <p className="resource-meta">PDF · 4 páginas · Incluye una hoja imprimible</p>
      <div className="kit-first-action">
        <h2>Tu primera conversación</h2>
        <p>Piensa en una persona a quien le serviría tu proyecto. ¿Qué podrías preguntarle hoy para entender mejor lo que necesita? Esa puede ser la primera de las cinco conversaciones del reto.</p>
      </div>
      <p>Si Kit te pide confirmar tu correo, abre su mensaje y confirma para recibir <strong>Lunes 1-1-1</strong>.</p>
      <Link className="resource-back" href="/#caminos">Volver a los caminos de uHüb →</Link>
    </div>
  </main><SiteFooter /></>;
}
