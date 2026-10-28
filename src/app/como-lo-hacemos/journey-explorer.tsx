"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Arrow } from "../components";
import { lunesSubscription } from "../components";
import { journeyStages, type JourneyMode } from "./journey-data";
import { challenges, supports, stageKeys, readJourneyContext, journeyHref, type JourneyContext, type ChallengeId } from "@/lib/journey-context";

function StageGlyph({ index }: { index: number }) {
  const paths = [
    "M12 3c1 6 7 7 7 12a7 7 0 0 1-14 0c0-3 2-5 4-7 0 3 1 4 2 4 2-2 2-5 1-9Z",
    "m3 9 9-5 9 5-9 5-9-5Zm0 6 9 5 9-5M12 14v6",
    "M3 8c3-5 6 5 9 0s6 5 9 0M3 15c3-5 6 5 9 0s6 5 9 0",
    "M3 9h13a3 3 0 1 0-3-3M3 14h16a3 3 0 1 1-3 3M3 19h7",
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[index]} /></svg>;
}

export function JourneyExplorer() {
  const params = useSearchParams();
  return <JourneyContent key={params.toString()} initialContext={readJourneyContext(params)} />;
}

function JourneyContent({ initialContext }: { initialContext: JourneyContext }) {
  const firstChallenge = challenges.find(item => item.id === initialContext.challenge);
  const firstStage = initialContext.stage ?? firstChallenge?.stage;
  const [active, setActive] = useState(firstStage ? stageKeys.indexOf(firstStage) : 0);
  const [mode, setMode] = useState<JourneyMode>(firstChallenge ? "challenge" : "route");
  const [challengeId, setChallengeId] = useState<ChallengeId | undefined>(initialContext.challenge);
  const [outcome, setOutcome] = useState<"done" | "stuck" | null>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = journeyStages[active];
  const challenge = challenges.find(item => item.id === challengeId);
  const support = supports.find(item => item.id === initialContext.support);
  const currentContext = { ...initialContext, stage: stageKeys[active], challenge: challengeId };
  const selectStage = (index: number) => { setActive(index); setOutcome(null); };
  function chooseChallenge(id: ChallengeId) {
    const selected = challenges.find(item => item.id === id)!;
    setChallengeId(id);
    setMode("challenge");
    selectStage(stageKeys.indexOf(selected.stage));
  }
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = { ArrowRight: (index + 1) % 4, ArrowDown: (index + 1) % 4, ArrowLeft: (index + 3) % 4, ArrowUp: (index + 3) % 4, Home: 0, End: 3 };
    if (event.key in keys) { event.preventDefault(); const next = keys[event.key]; selectStage(next); buttons.current[next]?.focus(); }
  }

  return <section className="jr-section jr-explorer" id="etapas" aria-labelledby="journey-heading">
    <div className="jr-section-heading"><p className="jr-eyebrow">01 / Elige tu recorrido</p><h2 id="journey-heading">Cuatro etapas a las que puedes volver.</h2><p>Descubrir, Aterrizar, Adaptar y Crecer te ayudan a ubicar qué necesitas trabajar. El recorrido es cíclico porque puedes volver a estas etapas cuando cambia tu proyecto o tu situación. Volver no es retroceder.</p></div>
    <fieldset className="jr-challenge-picker" id="tu-reto">
      <legend>¿Qué quieres resolver hoy?</legend>
      <p>Elige una situación para explorar un ejemplo. También puedes recorrer las etapas directamente.</p>
      <div className="jr-challenge-options">{challenges.map((item, index) => <button type="button" key={item.id} aria-pressed={challengeId === item.id} onClick={() => chooseChallenge(item.id)}><span aria-hidden="true">0{index + 1}</span><span><strong>{item.title}</strong><small>{item.detail}</small></span><span aria-hidden="true">→</span></button>)}</div>
    </fieldset>
    <div className="jr-starting-point" aria-live="polite" aria-atomic="true">
      {challenge ? <><strong>Tu reto: {challenge.title}.</strong><p>{challenge.reason} Abrimos una etapa como punto de partida; puedes explorar cualquiera de las cuatro.</p></> : initialContext.source === "brujula" ? <><strong>Retomamos el área que elegiste en tu Brújula.</strong><p>Abajo puedes explorar una acción y el acompañamiento en esa etapa. Tu resultado orienta la exploración; puedes cambiar de etapa cuando lo necesites.</p></> : <p>Este mapa muestra ejemplos de práctica. Elegir un reto no determina tu perfil, tu plan ni una etapa obligatoria.</p>}
      {support && <p><strong>El apoyo que elegiste: {support.label}.</strong> {support.suggestion}</p>}
    </div>
    <div className="jr-route-definition"><strong>La ruta guiada te orienta en la práctica.</strong><p>Propone una secuencia de actividades, recursos y acciones para trabajar las etapas. En este mapa puedes explorar ejemplos de cómo sería seguirla o trabajar sobre un reto propio.</p></div>
    <fieldset className="jr-mode-picker"><legend>¿Cómo quieres recorrerlo?</legend>
      <div className="jr-mode-options">{([
        ["route", "Seguir la ruta guiada", "Quiero una guía para empezar o retomar."],
        ["challenge", "Trabajar sobre mi reto actual", "Ya tengo algo en marcha y sé qué quiero revisar."],
      ] as const).map(([value, title, detail]) => <label key={value} className={mode === value ? "is-active" : ""}>
        <input type="radio" name="journey-mode" value={value} checked={mode === value} onChange={() => { setMode(value); setOutcome(null); }} />
        <span><strong>{title}</strong><small>{detail}</small></span>
      </label>)}</div>
      <p className="jr-mode-note">{mode === "route" ? "Puedes retomar solo la parte que necesitas; volver a una etapa no exige repetir toda la ruta." : "Partes de un reto propio. Puedes apoyarte en la ruta guiada para revisar una habilidad o retomar una práctica."} <strong>A tu ritmo también puede ser con acompañamiento.</strong></p>
    </fieldset>

    <div className="jr-workspace">
      <div className="jr-map">
        <div className="jr-map-top"><span>Tu recorrido / uHüb</span><span>Explora libremente</span></div>
        <div className="jr-trail">
          <svg className="jr-trail-lines" viewBox="0 0 500 540" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path className="jr-return-line" d="M365 420C495 430 495 515 250 515S-30 420 25 200 45 50 135 65" />
            <path className="jr-trail-shadow" d="M135 65C135 125 365 125 365 185S135 245 135 305 365 365 365 425" />
            <path className="jr-trail-stroke" d="M135 65C135 125 365 125 365 185S135 245 135 305 365 365 365 425" />
          </svg>
          <div role="tablist" aria-label="Etapas del recorrido" className="jr-stage-tabs">
            {journeyStages.map((item, index) => <button key={item.name} id={`journey-tab-${index}`} ref={el => { buttons.current[index] = el; }} role="tab" aria-selected={active === index} aria-controls="journey-panel" tabIndex={active === index ? 0 : -1} onKeyDown={e => navigate(e, index)} onClick={() => selectStage(index)} className={`jr-stage jr-stage-${index} ${active === index ? "is-active" : ""}`}>
              <span className="jr-stage-symbol"><StageGlyph index={index} /></span><span className="jr-stage-meta">0{index + 1} / {item.element}</span><strong>{item.name}</strong><span className="jr-stage-indicator">{active === index ? "Explorando" : "Explorar →"}</span>
            </button>)}
          </div>
        </div>
        <p className="jr-map-caption"><span aria-hidden="true">↺</span> Puedes volver con otra idea, otro reto o más experiencia.</p>
      </div>

      <div className="jr-stage-panel" id="journey-panel" role="tabpanel" aria-labelledby={`journey-tab-${active}`} tabIndex={0}>
        <div className="jr-panel-copy" key={`${active}-${mode}`}>
          <p className="jr-eyebrow">{stage.name} / {stage.capacity}</p>
          <h3>{stage.question}</h3><p className="jr-situation">{stage.situation}</p>
          <div className="jr-stage-work"><span className="jr-label">{mode === "route" ? "Si sigues la ruta guiada" : "Si trabajas sobre tu reto actual"}</span><p>{stage[mode]}</p></div>
          <div className="jr-action-example"><span className="jr-label">Una acción posible</span><p>{mode === "route" ? stage.action : stage.ownAction}</p><div><span aria-hidden="true">↳</span><p><strong>Qué registrarías</strong>{stage.evidence}</p></div></div>
          <div className="jr-support-note"><span className="jr-label">Con acompañamiento</span><p>{stage.mentor}</p></div>
          <details className="jr-connection"><summary>¿Qué conexión podrías buscar? <span aria-hidden="true">+</span></summary><p>{stage.connection}</p><p>Prepara qué quieres preguntar, qué puedes aportar y cómo darás seguimiento.</p></details>
        </div>
        <button className="jr-next-stage" onClick={() => selectStage((active + 1) % 4)}>{active === 3 ? "Volver a Descubrir" : `Explorar la etapa ${journeyStages[(active + 1) % 4].name}`}<span aria-hidden="true">{active === 3 ? "↺" : "→"}</span></button>
      </div>
    </div>

    <div className="jr-rehearsal" aria-labelledby="rehearsal-title">
      <div className="jr-rehearsal-intro"><p className="jr-eyebrow">02 / Después de intentarlo</p><h2 id="rehearsal-title">Aquí empieza el seguimiento.</h2><p>Una acción puede salir, cambiar o atorarse. Lo que ocurre te ayuda a decidir el siguiente paso.</p><small>Ejemplo interactivo. Explora las respuestas; no se registra como un avance tuyo.</small></div>
      <div className="jr-notebook"><div className="jr-notebook-top"><span>Mi acción / {stage.name}</span><span>Ejemplo</span></div><p className="jr-notebook-action">{mode === "route" ? stage.action : stage.ownAction}</p>
        <div className="jr-outcome-buttons" role="group" aria-label="Explora qué pasaría con esta acción"><button aria-pressed={outcome === "done"} onClick={() => setOutcome("done")}>La probé <span aria-hidden="true">✓</span></button><button aria-pressed={outcome === "stuck"} onClick={() => setOutcome("stuck")}>Me atoré <span aria-hidden="true">↺</span></button></div>
        <div className="jr-reflection" aria-live="polite" aria-atomic="true">{outcome ? <><span className="jr-label">{outcome === "done" ? "Ahora revisas lo que aprendiste" : "Ahora ajustas el paso"}</span><p>{stage[outcome]}</p><p className="jr-reflection-record">Ese aprendizaje vuelve a tu registro de acciones y a la siguiente revisión.</p></> : <p>Elige una respuesta para ver cómo continuarías con el acompañamiento.</p>}</div>
        {outcome && <button className="jr-reset" onClick={() => setOutcome(null)}>Volver a explorar el ejemplo ↺</button>}
      </div>
    </div>
    <div className="jr-next-step">
      <div><p className="jr-eyebrow">De explorar a acompañarte</p><h3>¿Quieres trabajar esto con continuidad?</h3><p>Conoce cómo se vive en Emprende Diario. Conservaremos el reto y la etapa que elegiste para preparar tu solicitud de ingreso, si decides continuar.</p></div>
      <div><Link className="button button-primary" href={journeyHref("/emprende-diario", currentContext, "ingreso")}>Conocer mis opciones de ingreso <Arrow /></Link><a className="jr-link" href={lunesSubscription}>Primero quiero recibir Lunes 1-1-1 <Arrow external /></a><small>La suscripción es opcional y se completa en Kit.</small></div>
    </div>
  </section>;
}

export function AccompanimentExplorer() {
  const [context, setContext] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const membership = context === 0;
  const contexts = ["Membresía Emprende Diario", "Programa uHüb A.C."];
  function navigate(event: KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault(); const next = event.key === "Home" ? 0 : event.key === "End" ? 1 : 1 - context;
    setContext(next); tabs.current[next]?.focus();
  }
  return <section className="jr-section jr-accompaniment" id="acompanamiento" aria-labelledby="accompaniment-title">
    <div className="jr-section-heading"><p className="jr-eyebrow">03 / Quién camina contigo</p><h2 id="accompaniment-title">Una estructura compartida.<br />Distintas formas de vivirla.</h2><p>Puedes dejar de necesitar la ruta guiada y seguir encontrando valor en el acompañamiento: revisar decisiones, sostener acciones y construir conexiones. Mira cómo se trabaja en cada contexto.</p></div>
    <div className="jr-context-tabs" role="tablist" aria-label="Contexto del acompañamiento">{contexts.map((title, i) => <button role="tab" id={`context-tab-${i}`} aria-selected={context === i} aria-controls="context-panel" tabIndex={context === i ? 0 : -1} ref={el => { tabs.current[i] = el; }} onKeyDown={navigate} onClick={() => setContext(i)} key={title}>{title}<span aria-hidden="true">→</span></button>)}</div>
    <div className="jr-context-panel" id="context-panel" role="tabpanel" aria-labelledby={`context-tab-${context}`} tabIndex={0}>
      <article className="jr-base-mentor">
        <span className="jr-eyebrow">El hilo de tu proceso</span><h3>Tu mentor base</h3>
        {membership ? <><div className="jr-mentor-person">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/rodrigo-retrato.webp" width="273" height="273" loading="lazy" alt="Rodrigo Campillo, mentor base de Emprende Diario." /><div><strong>Rodrigo Campillo</strong><span>Actualmente, mentor base de la membresía.</span></div></div><p>Te ayuda a revisar decisiones, acciones y obstáculos, y a dar continuidad a lo que estás trabajando.</p></> : <><p className="jr-mentor-ac">Un mentor base da continuidad a tu proceso dentro del programa.</p><p>Revisa contigo el reto, los accionables y lo que ocurrió al ponerlos en práctica.</p></>}
        <p className="jr-mentor-caption">Una conversación se conecta con la siguiente a través de lo que haces entre sesiones.</p>
      </article>
      <div className="jr-support-rows">
        <article><span>01 / Experiencia específica</span><h3>{membership ? "Mentores invitados" : "Mentores especializados"}</h3><p>{membership ? "Aportan conocimientos y perspectivas sobre temas concretos en las sesiones de la membresía. El acceso y el formato corresponden a tu modalidad." : "Aportan experiencia para retos concretos, de acuerdo con las actividades y los apoyos del programa."}</p></article>
        <article><span>02 / Relaciones que se construyen</span><h3>Comunidad y conexiones</h3><p>{membership ? "Compartes experiencias con otros miembros, contrastas decisiones y amplías tu red mediante conversaciones y vínculos con seguimiento." : "Compartes tu proceso con otras personas del programa. La comunidad y quienes ya lo recorrieron pueden aportar experiencias y conexiones."}</p></article>
        <article><span>03 / De la intención a la práctica</span><h3>{membership ? "Tu herramienta Emprende Diario" : "Tu carpeta de accionables"}</h3><p>Registras qué vas a hacer, lo que ocurrió y lo que aprendiste. Ese registro te ayuda a preparar la siguiente revisión.</p></article>
      </div>
      <div className="jr-context-footer"><p>{membership ? "Ritmo trabaja con sesiones grupales. El ingreso, la ruta y las condiciones se confirman contigo antes de inscribirte." : "El acceso, la modalidad y el calendario corresponden a la convocatoria del programa de uHüb A.C."}</p><a className="jr-link" href={membership ? "/emprende-diario" : "https://www.uhub.org.mx/quiero-emprender"} {...(!membership ? { target: "_blank", rel: "noreferrer" } : {})}>{membership ? "Conocer Emprende Diario" : "Ver el programa de uHüb A.C."}<Arrow external={!membership} /></a></div>
    </div>
  </section>;
}
