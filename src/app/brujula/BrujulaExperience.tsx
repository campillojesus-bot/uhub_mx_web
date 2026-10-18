"use client";

import { useState } from "react";
import Link from "next/link";

type Context = "idea" | "ventas";
type Axis = "fuego" | "tierra" | "agua" | "aire";
type AnswerPair = [number | null, number | null];
type Answers = Record<Axis, AnswerPair>;
type Dimension = {
  id: Axis;
  name: string;
  stage: string;
  capacity: string;
  color: string;
  questions: Record<Context, [string, string]>;
  actions: Record<Context, [string, string, string]>;
  interpretation: string;
};

const DIMENSIONS: Dimension[] = [
  {
    id: "fuego", name: "Fuego", stage: "Descubrir", capacity: "Mentalidad y propósito", color: "#B81632",
    questions: {
      idea: ["Tengo claro por qué quiero emprender y qué me gustaría cambiar.", "Cuando algo no sale como espero, puedo aprender y volver a intentarlo."],
      ventas: ["Tengo claro por qué existe mi proyecto y qué quiero lograr con él.", "Puedo replantear decisiones y aprender de los errores sin perder mi propósito."],
    },
    actions: {
      idea: ["Escribe por qué te importa esta idea y qué quieres poner en movimiento.", "Comparte ese propósito con alguien de confianza y escucha sus preguntas.", "Elige un primer paso pequeño que te permita aprender, aunque no sea perfecto."],
      ventas: ["Escribe qué quieres lograr con tu proyecto en los próximos 90 días.", "Identifica una decisión pendiente y qué te está impidiendo tomarla.", "Comenta esa decisión con tu mentor o una persona que conozca tu proyecto."],
    },
    interpretation: "Es momento de trabajar la claridad personal y la capacidad de aprender sin abandonar tu intención.",
  },
  {
    id: "tierra", name: "Tierra", stage: "Aterrizar", capacity: "Habilidades y herramientas", color: "#8C8F94",
    questions: {
      idea: ["Identifico las habilidades que necesito desarrollar para llevar mi idea a la práctica.", "Sé transformar mi idea en una prueba sencilla que pueda realizar con los recursos que tengo."],
      ventas: ["Identifico las habilidades que necesito fortalecer para mejorar mi negocio.", "Sé elegir una mejora concreta y qué aprendizaje o herramienta necesito para aplicarla."],
    },
    actions: {
      idea: ["Anota dos habilidades que necesitas para poner a prueba tu idea.", "Elige una de ellas y busca un recurso, ejercicio o persona para practicarla.", "Diseña una primera prueba pequeña que puedas realizar esta semana."],
      ventas: ["Selecciona un reto actual y la habilidad que te falta para resolverlo.", "Elige una práctica concreta para fortalecerla, sin intentar aprender todo a la vez.", "Aplica esa habilidad en una mejora pequeña del negocio y anota qué ocurrió."],
    },
    interpretation: "Aterrizar no es aprenderlo todo: es desarrollar la habilidad precisa para dar el siguiente paso real.",
  },
  {
    id: "agua", name: "Agua", stage: "Adaptar", capacity: "Mercado, acción y hábitos", color: "#6D1F30",
    questions: {
      idea: ["Puedo identificar a quién podría servir mi idea y conversar con esas personas.", "Estoy pasando de las ideas a acciones y reviso lo que aprendo para ajustar mi propuesta."],
      ventas: ["Conozco a mis clientes prioritarios y escucho lo que realmente necesitan.", "Doy seguimiento a mis acciones y a mis clientes, y ajusto mi forma de trabajar según los resultados."],
    },
    actions: {
      idea: ["Describe a quién quieres servir y qué problema crees que tiene.", "Conversa con dos personas de ese grupo para escuchar su experiencia, sin tratar de convencerlas.", "Registra qué escuchaste y qué cambiarás en tu siguiente prueba."],
      ventas: ["Identifica un grupo de clientes prioritarios y una necesidad que se repite.", "Da seguimiento a tres conversaciones, solicitudes o cotizaciones pendientes.", "Reserva quince minutos al final de la semana para revisar qué funcionó y ajustar."],
    },
    interpretation: "El aprendizaje ocurre en contacto con el mercado, al actuar, observar y volver a intentarlo con ajustes.",
  },
  {
    id: "aire", name: "Aire", stage: "Crecer", capacity: "Liderazgo y colaboración", color: "#474855",
    questions: {
      idea: ["Me animo a pedir apoyo y aprender con personas que tienen experiencias distintas.", "Puedo explicar mi idea con claridad y escuchar otras perspectivas."],
      ventas: ["Sé buscar colaboración o apoyo para avanzar en mis retos.", "Puedo compartir responsabilidades, construir acuerdos y darles seguimiento."],
    },
    actions: {
      idea: ["Identifica a dos personas que puedan aportar otra perspectiva a tu idea.", "Prepara una explicación de tu proyecto de menos de un minuto.", "Pide una conversación y escucha qué oportunidades o riesgos identifican."],
      ventas: ["Identifica una tarea o reto que no necesitas resolver por tu cuenta.", "Contacta a alguien que pueda colaborar o compartir conocimiento útil.", "Acuerda un siguiente paso concreto y define cuándo le darás seguimiento."],
    },
    interpretation: "El siguiente paso puede depender menos de hacerlo todo tú y más de conectar, colaborar y liderar.",
  },
];

function blankAnswers(): Answers {
  return { fuego: [null, null], tierra: [null, null], agua: [null, null], aire: [null, null] };
}

const labels = ["Nada", "Poco", "A veces", "Bastante", "Mucho"] as const;

function Compass({ values }: { values: { id: Axis; score: number }[] }) {
  const score = (id: Axis) => values.find((v) => v.id === id)?.score ?? 0;
  const x = (id: Axis, sign: number) => 180 + sign * (score(id) / 5) * 101;
  const y = (id: Axis, sign: number) => 180 + sign * (score(id) / 5) * 101;
  const pts = "180," + y("fuego", -1) + " " + x("tierra", 1) + ",180 180," + y("agua", 1) + " " + x("aire", -1) + ",180";
  return (
    <svg viewBox="0 0 360 360" role="img" aria-label={"Gráfico radar de los cuatro elementos: " + values.map(v => v.id + " " + v.score.toFixed(1) + " de 5").join(", ")}>
      <defs>
        <linearGradient id="br-fill" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#B81632" stopOpacity=".28" />
          <stop offset="1" stopColor="#6D1F30" stopOpacity=".18" />
        </linearGradient>
      </defs>
      {[1, 2, 3, 4, 5].map(n => (
        <polygon key={n} points={"180," + (180-n*101/5) + " " + (180+n*101/5) + ",180 180," + (180+n*101/5) + " " + (180-n*101/5) + ",180"} fill="none" stroke="#CBCDD2" strokeWidth="1" />
      ))}
      <path d="M180 79 V281 M79 180 H281" stroke="#BFC3CB" strokeWidth="1" strokeDasharray="4 5"/>
      <polygon points={pts} fill="url(#br-fill)" stroke="#B81632" strokeWidth="2.6" strokeLinejoin="round"/>
      {[
        { cx: 180, cy: y("fuego", -1), color: "#B81632" },
        { cx: x("tierra", 1), cy: 180, color: "#8C8F94" },
        { cx: 180, cy: y("agua", 1), color: "#6D1F30" },
        { cx: x("aire", -1), cy: 180, color: "#474855" },
      ].map((p,i) => <circle key={i} cx={p.cx} cy={p.cy} r="5.5" fill={p.color} stroke="#FFFFFF" strokeWidth="2"/>)}
      <g fontFamily="Arial, sans-serif" textAnchor="middle" fontSize="13" fontWeight="700">
        <text x="180" y="33" fill="#B81632">FUEGO</text>
        <text x="180" y="50" fontSize="11" fill="#474855">{score("fuego").toFixed(1)} / 5</text>
        <text x="318" y="176" fill="#8C8F94">TIERRA</text>
        <text x="318" y="192" fontSize="11" fill="#474855">{score("tierra").toFixed(1)} / 5</text>
        <text x="180" y="314" fill="#6D1F30">AGUA</text>
        <text x="180" y="330" fontSize="11" fill="#474855">{score("agua").toFixed(1)} / 5</text>
        <text x="42" y="176" fill="#474855">AIRE</text>
        <text x="42" y="192" fontSize="11" fill="#474855">{score("aire").toFixed(1)} / 5</text>
      </g>
      <circle cx="180" cy="180" r="9" fill="#B81632" />
      <circle cx="180" cy="180" r="2.4" fill="#FFFFFF" />
    </svg>
  );
}

export function BrujulaExperience() {
  const [context, setContext] = useState<Context>("idea");
  const [answers, setAnswers] = useState<Answers>(blankAnswers);
  const [screen, setScreen] = useState<"questions" | "results">("questions");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [chosenPriority, setChosenPriority] = useState<Axis | null>(null);

  const filled = DIMENSIONS.reduce((total, d) => total + answers[d.id].filter(v => v !== null).length, 0);
  const scored = DIMENSIONS.map(d => ({
    id: d.id, score: answers[d.id].reduce<number>((total, current) => total + (current ?? 0), 0) / 2,
  }));
  const sorted = [...scored].sort((a,b)=>a.score - b.score);
  const tied = sorted.filter(item => item.score === sorted[0].score);
  const chosenAxis = tied.some(item => item.id === chosenPriority) ? chosenPriority : tied[0].id;
  const priority = DIMENSIONS.find(d => d.id === chosenAxis) ?? DIMENSIONS[0];
  const highest = sorted[sorted.length - 1].score;
  const strongest = sorted.filter(item => item.score === highest);
  const strengthLabel = strongest.length === 4 ? "Las cuatro áreas están al mismo nivel" : strongest.map(item => DIMENSIONS.find(d => d.id === item.id)?.name).join(", ");
  const topScore = sorted[0].score.toFixed(1);
  const selectedContext = context === "idea" ? "Estoy desarrollando una idea" : "Ya tengo clientes o ventas";

  function chooseContext(next: Context) {
    if (next === context) return;
    setContext(next);
    setAnswers(blankAnswers());
    setScreen("questions");
    setCopyState("idle");
    setChosenPriority(null);
  }
  function answer(axis: Axis, index: 0 | 1, value: number) {
    setAnswers(previous => ({
      ...previous,
      [axis]: previous[axis].map((old, i) => i === index ? value : old) as AnswerPair,
    }));
    setCopyState("idle");
    setChosenPriority(null);
  }
  function jumpToTop() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }
  const summary = [
    "BRÚJULA EMPRENDEDORA · uHüb",
    selectedContext,
    ...DIMENSIONS.map(d => d.name + " (" + d.capacity + "): " + (scored.find(s => s.id === d.id)?.score ?? 0).toFixed(1) + "/5"),
    "Prioridad orientativa: " + priority.name + " · " + priority.capacity,
    tied.length > 1 ? "Prioridades empatadas: " + tied.map(v => DIMENSIONS.find(d => d.id === v.id)?.name).join(", ") : "",
    "Mi reto de los próximos 7 días:",
    ...priority.actions[context].map((action,i) => (i + 1) + ". " + action),
    "Resultado de autopercepción; no es una evaluación validada.",
  ].join("\n");

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  }

  return (
    <div className="br-container">
      <header className="br-hero">
        <div className="br-hero-copy">
          <p className="br-eyebrow">Modelo uHüb / Tu punto de partida</p>
          <h1>Tu camino cambia.<br/><em>Tu brújula también.</em></h1>
          <p>Identifica qué necesitas fortalecer hoy: mentalidad, habilidades, acción o liderazgo. No hay respuestas buenas o malas. Queremos entender desde dónde comienzas.</p>
          <div className="br-hero-meta"><span>4 elementos</span><i aria-hidden="true">·</i><span>8 preguntas</span><i aria-hidden="true">·</i><span>3 acciones para tu semana</span></div>
        </div>
        <div className="br-hero-art" aria-hidden="true">
          <span className="br-art-ring br-art-ring-one"/><span className="br-art-ring br-art-ring-two"/>
          <span className="br-art-axis br-art-fuego">Fuego</span><span className="br-art-axis br-art-tierra">Tierra</span>
          <span className="br-art-axis br-art-agua">Agua</span><span className="br-art-axis br-art-aire">Aire</span>
          <span className="br-art-center">uHüb</span>
        </div>
      </header>

      <div className="br-intro-line">
        <span>{screen === "questions" ? "01 / Explora tu situación" : "02 / Descubre tu siguiente paso"}</span>
        <Link href="/como-lo-hacemos#etapas">Conoce el recorrido de uHüb <span aria-hidden="true">→</span></Link>
      </div>

      <section className="br-panel" aria-labelledby="br-experience-title">
        {screen === "questions" ? (
          <>
            <div className="br-panel-heading">
              <div><p className="br-eyebrow">Antes de comenzar</p><h2 id="br-experience-title">¿En qué momento te encuentras?</h2><p>Las preguntas se adaptan a tu situación. Si cambias de opción, tus respuestas se reiniciarán.</p></div>
              <div className="br-progress"><strong>{filled}<small> / 8</small></strong><span>respondidas</span></div>
            </div>
            <div className="br-context" role="group" aria-label="Momento de tu proyecto">
              <button type="button" className={context === "idea" ? "is-selected" : ""} aria-pressed={context === "idea"} onClick={() => chooseContext("idea")}><span>Estoy desarrollando</span><strong>una idea</strong></button>
              <button type="button" className={context === "ventas" ? "is-selected" : ""} aria-pressed={context === "ventas"} onClick={() => chooseContext("ventas")}><span>Ya tengo clientes</span><strong>o ventas</strong></button>
            </div>
            <div className="br-progressbar" role="progressbar" aria-valuemin={0} aria-valuemax={8} aria-valuenow={filled} aria-label="Preguntas respondidas"><span style={{width: filled / 8 * 100 + "%"}}/></div>
            <p className="br-scale-note">¿Qué tanto te describe cada afirmación? Elige del 1 (nada) al 5 (mucho).</p>
            <div className="br-questions">
              {DIMENSIONS.map((dimension, di) => (
                <section className="br-dimension" key={dimension.id} aria-labelledby={"br-" + dimension.id}>
                  <div className="br-dimension-title">
                    <span className="br-step-num">0{di + 1}</span>
                    <span className="br-dimension-mark" style={{background: dimension.color}} />
                    <div><p>{dimension.stage} / {dimension.name}</p><h3 id={"br-" + dimension.id}>{dimension.capacity}</h3></div>
                  </div>
                  {dimension.questions[context].map((question, qi) => (
                    <fieldset className="br-question" key={question}>
                      <legend>{question}</legend>
                      <div className="br-scale">
                        {[1,2,3,4,5].map(value => (
                          <button
                            type="button"
                            key={value}
                            aria-label={value + " de 5: " + labels[value-1]}
                            aria-pressed={answers[dimension.id][qi] === value}
                            className={answers[dimension.id][qi] === value ? "is-chosen" : ""}
                            style={{"--br-dimension-color": dimension.color} as React.CSSProperties}
                            onClick={() => answer(dimension.id, qi as 0|1, value)}
                          >{value}</button>
                        ))}
                      </div>
                      <div className="br-scale-ends"><span>Nada</span><span>Mucho</span></div>
                    </fieldset>
                  ))}
                </section>
              ))}
            </div>
            <div className="br-complete">
              <div><strong>{filled === 8 ? "Ya puedes ver tu brújula." : "Responde las ocho afirmaciones."}</strong><p>Tu resultado orienta una conversación y una primera práctica; no te pone una etiqueta.</p></div>
              <button className="br-primary" type="button" disabled={filled !== 8} onClick={() => { setScreen("results"); setCopyState("idle"); jumpToTop(); }}>Ver mi brújula <span aria-hidden="true">→</span></button>
            </div>
          </>
        ) : (
          <>
            <div className="br-results-heading">
              <p className="br-eyebrow">Tu punto de partida / {selectedContext}</p>
              <h2 id="br-experience-title">No necesitas hacerlo todo.<br/><em>Necesitas saber qué trabajar primero.</em></h2>
              <p>Esta es tu fotografía de hoy, basada en lo que tú mismo respondiste. Puedes regresar y cambiar tus respuestas.</p>
            </div>
            <div className="br-result-layout">
              <div className="br-radar">
                <Compass values={scored}/>
                <p>Tu brújula actual · escala del 1 al 5</p>
              </div>
              <div className="br-result-scores">
                <p className="br-eyebrow">Los cuatro elementos</p>
                {DIMENSIONS.map(d => {
                  const value = scored.find(s=>s.id===d.id)?.score ?? 0;
                  return <div className="br-score" key={d.id}>
                    <div className="br-score-label"><strong>{d.name} <small>· {d.capacity}</small></strong><span>{value.toFixed(1)} / 5</span></div>
                    <div className="br-scorebar"><span style={{width: value / 5 * 100 + "%",background: d.color}}/></div>
                  </div>;
                })}
                <p className="br-score-caption">La puntuación más baja señala una oportunidad de práctica, no una deficiencia personal. No determina tu perfil emprendedor ni un plan de pago.</p>
              </div>
            </div>
            <div className="br-insight">
              <p className="br-eyebrow">Tu prioridad orientativa</p>
              {tied.length > 1 && (
                <div className="br-ties">
                  <p>Hay {tied.length} áreas con la misma puntuación. ¿Cuál quieres trabajar primero?</p>
                  <div role="group" aria-label="Elegir área empatada">
                    {tied.map(item => {
                      const option = DIMENSIONS.find(d => d.id === item.id)!;
                      return <button key={option.id} type="button" aria-pressed={priority.id === option.id} onClick={() => { setChosenPriority(option.id); setCopyState("idle"); }}>{option.name}</button>;
                    })}
                  </div>
                </div>
              )}
              <h3 style={{color: priority.color}}>{priority.name} <span>· {priority.stage}</span></h3>
              <p>{priority.interpretation}</p>
              <div className="br-insight-meta"><span>Autopercepción en esta área: {topScore} / 5</span><span>Fortaleza relativa: {strengthLabel}</span></div>
            </div>
            <div className="br-action-plan">
              <div><p className="br-eyebrow">Emprende Diario / Un paso a la vez</p><h3>Tres acciones para tus próximos 7 días</h3><p>Estas propuestas son ejemplos para iniciar. Puedes ajustarlas a tu situación y revisarlas con alguien que te acompañe.</p></div>
              <ol>{priority.actions[context].map((action,i)=><li key={action}><span>0{i+1}</span><p>{action}</p></li>)}</ol>
            </div>
            <div className="br-results-actions">
              <button type="button" className="br-primary" onClick={copySummary}>{copyState === "copied" ? "Resultado copiado ✓" : "Copiar diagnóstico y acciones"}</button>
              <button type="button" className="br-secondary" onClick={() => { setScreen("questions"); jumpToTop(); }}>Modificar respuestas</button>
            </div>
            {copyState === "copied" && <p role="status" className="br-copy-success">Se copiaron tus cuatro puntuaciones y las tres acciones para esta semana.</p>}
            {copyState === "failed" && <p role="status" className="br-copy-failure">No se pudo copiar automáticamente. Tu navegador puede necesitar permisos de portapapeles.</p>}
          </>
        )}
      </section>

      <footer className="br-outro">
        <div><p className="br-eyebrow">El siguiente paso no lo das solo</p><h2>La brújula señala una dirección.<br/><em>El acompañamiento te ayuda a avanzar.</em></h2></div>
        <Link href="/emprende-diario">Conoce Emprende Diario <span aria-hidden="true">→</span></Link>
      </footer>
      <p className="br-disclaimer">Prototipo orientativo de autopercepción, no un instrumento psicométrico validado ni una medición de impacto. Tus respuestas no se envían ni se guardan en un servidor desde esta página. La brújula no sustituye /test ni la conversación con un mentor.</p>
    </div>
  );
}
