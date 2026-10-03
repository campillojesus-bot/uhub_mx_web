import { Arrow, SiteFooter, SiteHeader } from "../components";
import { pageMetadata } from "../institutional";
import Link from "next/link";
import { AccompanimentExplorer, JourneyExplorer } from "./journey-explorer";
import "./journey.css";

export const metadata = pageMetadata(
  "Cómo lo hacemos · Modelo uHüb",
  "Explora el modelo de acompañamiento de uHub: cuatro etapas, una ruta o tu reto actual, mentores y acciones. Conoce cómo se vive en la membresía y en el programa A.C.",
  "/como-lo-hacemos",
);

const practice = [
  ["Partimos de tu situación", "Entendemos qué quieres hacer, con qué tiempo cuentas y quién puede ayudarte."],
  ["Eliges un reto real", "Trabajas en tu negocio, iniciativa o proyecto; no en un ejercicio inventado."],
  ["Acuerdas acciones", "Conviertes el reto en pasos posibles para la semana que sí tienes."],
  ["Lo revisas con alguien", "Mentores y comunidad te ayudan a mirar lo que pasó y a ajustar."],
  ["Dejas evidencia", "Registras lo que probaste y lo que aprendiste para decidir el siguiente paso."],
];

export default function HowPage() {
  return <><SiteHeader /><main id="contenido" className="journey-page">
    <section className="jr-hero jr-section">
      <div><p className="jr-eyebrow">El Modelo uHüb / Un recorrido que puedes explorar</p><h1>Tu camino puede cambiar. <em>El acompañamiento también.</em></h1><p className="jr-hero-intro">Empezamos por entender a la persona, su contexto y el proyecto que quiere mover. Alrededor construimos una red de mentores, comunidad y hábitos para probar acciones y sostenerlas.</p><a className="button button-primary" href="#etapas">Explora las etapas <Arrow /></a></div>
      <aside className="jr-hero-aside"><span className="jr-eyebrow">Tu punto de partida</span><p>Puedes seguir la ruta, trabajar sobre lo que hoy necesitas o volver a una etapa.</p><div className="jr-hero-thread" aria-hidden="true"><span>Tu situación</span><i /><span>Tu siguiente acción</span><i /><span>Lo que aprendes</span><b>↺</b></div><small>El punto de partida cambia; la práctica y el acompañamiento le dan continuidad.</small></aside>
    </section>
    <JourneyExplorer />
    <AccompanimentExplorer />
    <section className="jr-section jr-continuity"><div className="jr-continuity-heading"><p className="jr-eyebrow">La práctica se repite</p><h2>El avance se construye en tu semana.</h2><p>La forma y la frecuencia del acompañamiento dependen del programa o modalidad que elijas.</p></div>
      <details className="jr-practice-details"><summary>Ver la dinámica de seguimiento <span aria-hidden="true">+</span></summary><ol>{practice.map(([title, text], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></details>
      <aside className="jr-evidence" aria-label="Referencia externa sobre mentoría">
        <p className="jr-eyebrow">Mentoría · Referencia externa</p>
        <p>Según SCORE (comunicado de enero de 2024), los emprendedores que trabajan con un mentor tienen cinco veces más probabilidades de iniciar un negocio.</p>
        <p className="jr-evidence-context">SCORE, Estados Unidos · 9 de enero de 2024. No es un resultado ni una garantía de uHüb.</p>
        <a className="jr-link" href="https://www.score.org/press-releases/mentorship-improves-odds-success-entrepreneurs/" target="_blank" rel="noreferrer">Leer el comunicado de SCORE <Arrow external /></a>
      </aside>
    </section>
    <section className="jr-section jr-complement"><span className="jr-complement-symbol" aria-hidden="true">+</span><div><p className="jr-eyebrow">Cuando hace falta especialización</p><h2>¿Y Consolidar?</h2><p>Es una etapa técnica complementaria para fortalecer la operación del proyecto. El programa anual de uHüb A.C. la integra con apoyo especializado. No es obligatoria en todas las rutas de uHüb.</p></div></section>
    <section className="jr-closing"><div><p className="jr-eyebrow">El mismo modelo, distintas puertas</p><h2>Encuentra la que corresponde a tu contexto.</h2></div><Link className="jr-link" href="/#caminos">Encuentra tu camino <Arrow /></Link></section>
  </main><SiteFooter /></>;
}
