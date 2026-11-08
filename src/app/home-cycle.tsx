"use client";

import { useState } from "react";
import { CycleWheel } from "@/components/marketing/CycleWheel";
import { journeyHref, stageKeys } from "@/lib/journey-context";

const contexts = ["Mi proyecto o mi trabajo", "Una empresa o cámara", "Una universidad", "Una A.C. o fundación"];
const stages = [
  {
    name: "Descubrir", element: "Fuego", capacity: "Mentalidad y propósito",
    practice: "Revisas qué quieres mover, por qué te importa y con qué recursos cuentas. El acompañamiento te ayuda a elegir un punto de partida.",
    examples: [
      "Antes de iniciar o retomar, pones en palabras una necesidad que quieres atender y conversas con alguien que la vive.",
      "El equipo identifica una dificultad recurrente en su trabajo y acuerda cuál vale la pena explorar primero.",
      "Un estudiante observa una necesidad de su entorno y reconoce qué podría aportar, aunque todavía no quiera abrir un negocio.",
      "La organización revisa una necesidad de su comunidad y los recursos con los que ya cuenta para responder."
    ]
  },
  {
    name: "Aterrizar", element: "Tierra", capacity: "Habilidades y herramientas",
    practice: "Conviertes una idea en una prueba pequeña. Acuerdas qué hacer, qué habilidad necesitas y qué observarás al intentarlo.",
    examples: [
      "Preparas una versión sencilla de tu propuesta y la pruebas con una persona antes de invertir más tiempo o dinero.",
      "El equipo ensaya una mejora con un grupo pequeño de clientes o colegas y registra lo que ocurre.",
      "El docente acompaña una entrevista o un prototipo; el estudiante documenta qué aprendió al ponerlo a prueba.",
      "La organización prueba una actividad o un servicio a pequeña escala y registra sus costos y la respuesta de las personas."
    ]
  },
  {
    name: "Adaptar", element: "Agua", capacity: "Acción, disciplina y hábitos",
    practice: "Llevas lo acordado a tu semana, registras lo que pasó y lo revisas con acompañamiento. Ajustas la acción, los apoyos o tu forma de organizarte.",
    examples: [
      "Si tu trabajo te deja poco tiempo, reduces el paso a algo viable y lo registras en Emprende Diario para revisarlo después.",
      "El equipo revisa qué ocurrió en el piloto y ajusta responsabilidades o tiempos antes del siguiente intento.",
      "El grupo compara su primera prueba con lo que esperaba y decide qué cambiar en el siguiente intento.",
      "Con la carpeta de accionables o la herramienta acordada, el equipo revisa avances y obstáculos para ajustar su iniciativa."
    ]
  },
  {
    name: "Crecer", element: "Aire", capacity: "Liderazgo y colaboración",
    practice: "Reconoces qué funciona y qué necesitas para sostenerlo. Trabajas cómo colaborar, delegar y ampliar tu red de apoyo.",
    examples: [
      "Preparas una conversación con un posible colaborador: qué necesitas, qué puedes aportar y cuál sería el siguiente paso.",
      "El equipo decide cómo compartir una mejora con otras áreas y quién acompañará su continuidad.",
      "El estudiante identifica dónde aplicar lo aprendido: otro proyecto, su futuro trabajo o una iniciativa propia.",
      "La organización define quién dará seguimiento a la iniciativa y con qué aliados podría sostenerla."
    ]
  }
];

export function HomeCycle() {
  const [stage, setStage] = useState(0);
  const [context, setContext] = useState(0);
  return <div className="home-cycle-explorer" id="ciclo">
    <div className="home-cycle-wheel">
      <p className="hub-eyebrow">Elige una etapa. Puedes volver a cualquiera.</p>
      <CycleWheel compact selectedStage={stage} onStageChange={setStage} />
      <p className="home-cycle-caption">El ciclo reúne las etapas. La ruta guiada propone actividades para trabajarlas. <strong>Volver no es retroceder.</strong></p>
    </div>
    <div className="home-cycle-reading">
      {stages.map((item, index) => <section key={item.name} id={`home-cycle-panel-${index}`} role="tabpanel"
        aria-labelledby={`home-cycle-tab-${index}`} tabIndex={0} hidden={stage !== index}>
        <p className="hub-eyebrow">0{index + 1} / {item.element}</p>
        <h3>{item.name}</h3>
        <p className="home-cycle-capacity">{item.capacity}</p>
        <p>{item.practice}</p>
      </section>)}
      <div className="home-cycle-example">
        <label htmlFor="cycle-context">Ver un ejemplo para</label>
        <select id="cycle-context" value={context} onChange={event => setContext(Number(event.target.value))}>
          {contexts.map((name, index) => <option key={name} value={index}>{name}</option>)}
        </select>
        <p aria-live="polite" aria-atomic="true">{stages[stage].examples[context]}</p>
      </div>
      <a className="hub-link" href={journeyHref("/como-lo-hacemos", { stage: stageKeys[stage] }, "etapas")}>Explorar esta etapa en el recorrido <span aria-hidden="true">→</span></a>
    </div>
  </div>;
}
