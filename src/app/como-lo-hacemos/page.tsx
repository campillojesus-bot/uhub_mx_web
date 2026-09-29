import { CycleWheel } from "@/components/marketing/CycleWheel";
import { Arrow, SiteFooter, SiteHeader } from "../components";
import { pageMetadata } from "../institutional";
import Link from "next/link";

export const metadata = pageMetadata(
  "Cómo lo hacemos · Modelo uHüb",
  "La persona, su ecosistema y un recorrido cíclico: descubre cómo funcionan las cuatro etapas y el seguimiento semanal de uHub.",
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
  return <><SiteHeader /><main id="contenido" className="service-page">
    <section className="inner-hero"><div><p className="eyebrow">El Modelo uHüb</p><h1>Tu camino puede cambiar. El acompañamiento también.</h1><p>Empezamos por entender a la persona, su contexto y el proyecto que quiere mover. Alrededor construimos una red de mentores, comunidad y hábitos para probar acciones y sostenerlas.</p><a className="button button-primary" href="#etapas">Explora las etapas <Arrow /></a></div><aside className="inner-quote"><span>Tres capas</span><strong>Persona · ecosistema · camino</strong></aside></section>
    <section className="inner-section" id="etapas"><div className="section-kicker"><p className="eyebrow">Un recorrido cíclico</p><h2>Cuatro etapas a las que puedes volver.</h2><p>Descubrir, Aterrizar, Adaptar y Crecer describen el momento del proyecto. Volver no es retroceder.</p></div><CycleWheel /></section>
    <section className="inner-section"><div className="section-kicker"><p className="eyebrow">Lo que ocurre entre sesiones</p><h2>El avance se construye en tu semana.</h2><p>La forma y la frecuencia del acompañamiento dependen del programa o modalidad que elijas.</p></div><ol className="model-practice">{practice.map(([title, text], i) => <li key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <aside className="mentoring-evidence" aria-label="Referencia externa sobre mentoría">
        <p className="eyebrow">Mentoría · Referencia externa</p>
        <p>Según SCORE (comunicado de enero de 2024), los emprendedores que trabajan con un mentor tienen cinco veces más probabilidades de iniciar un negocio.</p>
        <p className="mentoring-evidence-context">SCORE, Estados Unidos · 9 de enero de 2024. No es un resultado ni una garantía de uHüb.</p>
        <a className="text-link" href="https://www.score.org/press-releases/mentorship-improves-odds-success-entrepreneurs/" target="_blank" rel="noreferrer">Leer el comunicado de SCORE <Arrow external /></a>
      </aside>
    </section>
    <section className="inner-section"><div className="section-kicker"><p className="eyebrow">Cuando hace falta especialización</p><h2>¿Y Consolidar?</h2><p>Es una etapa técnica complementaria para fortalecer la operación del proyecto. El programa anual de uHüb A.C. la integra con apoyo especializado. No es obligatoria en todas las rutas de uHüb.</p></div></section>
    <section className="inner-closing"><div><p className="eyebrow">El mismo modelo, distintas puertas</p><h2>Encuentra la que corresponde a tu contexto.</h2></div><Link className="text-link" href="/#caminos">Encuentra tu camino <Arrow /></Link></section>
  </main><SiteFooter /></>;
}
