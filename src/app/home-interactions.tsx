"use client";

import { useState, useRef, type KeyboardEvent } from "react";

const audiences = ["Para mi proyecto", "Para mi universidad", "Para mi organización"];
export const cycle = [
  { name: "Descubrir", element: "Fuego", title: "Encuentra un punto de partida.",
    variants: [
      ["Tienes una inquietud, quieres reiniciar o todavía no sabes qué vale la pena intentar.", "Conversaciones y ejercicios para reconocer tus recursos, observar necesidades y contrastar tus ideas con otras personas.", "Una oportunidad concreta, a quién puede servirle y una pregunta que quieras poner a prueba."],
      ["Quieres despertar iniciativa en estudiantes que aún están explorando su futuro.", "Formación docente y actividades para observar problemas, reconocer capacidades y conversar con posibles usuarios.", "Una necesidad observada y una primera propuesta que el estudiante pueda explicar."],
      ["Tu equipo ve algo que podría mejorar, pero todavía no ha definido por dónde empezar.", "Un diagnóstico y conversaciones para identificar retos, recursos y oportunidades alineadas con la misión de la organización.", "Un reto priorizado, una persona responsable y una hipótesis de mejora."]
    ]
  },
  { name: "Aterrizar", element: "Tierra", title: "Haz una primera prueba real.",
    variants: [
      ["Tienes una idea y necesitas pasar de pensarla a probarla, con el tiempo y los recursos que sí tienes.", "Orientación para diseñar un experimento pequeño, elegir con quién probarlo y revisar lo que necesitas aprender.", "Una primera prueba realizada y aprendizajes de personas reales para decidir qué sigue."],
      ["Tus estudiantes ya tienen una propuesta; necesitan experimentar fuera de la teoría.", "Herramientas para que el docente guíe entrevistas, prototipos sencillos y pruebas dentro o fuera del aula.", "Una evidencia de aprendizaje: qué probaron, qué observaron y qué cambiarían."],
      ["Hay una iniciativa elegida, pero faltan acuerdos y una prueba antes de comprometer más recursos.", "Acompañamiento para delimitar el piloto, asignar responsables y definir qué evidencia recoger.", "Un piloto con alcance, responsables y una primera validación con usuarios o clientes."]
    ]
  },
  { name: "Adaptar", element: "Agua", title: "Ajusta y encuentra tu ritmo.",
    variants: [
      ["Ya empezaste, te atoraste o te cuesta sostenerlo junto con tu trabajo y otras responsabilidades.", "Planeación de acciones posibles, seguimiento y retroalimentación con mentores y comunidad, según tu modalidad.", "Ajustes basados en lo que aprendiste y una rutina de acciones que puedas revisar y sostener."],
      ["La primera prueba no salió como esperaban o el grupo necesita organizarse para continuar.", "Recursos para acompañar la reflexión, ajustar el reto y distribuir tareas sin resolver todo por el estudiante.", "Un segundo intento con cambios justificados y acuerdos de colaboración."],
      ["El piloto ya muestra aprendizajes y necesitas convertirlos en decisiones y una práctica de trabajo.", "Revisión de avances, obstáculos y acuerdos; acompañamiento para ajustar la propuesta y la operación.", "Una iniciativa ajustada con responsables, próximos pasos e indicadores acordados."]
    ]
  },
  { name: "Crecer", element: "Aire", title: "Fortalece lo que funciona.",
    variants: [
      ["Ya reconoces qué funciona y quieres dar continuidad, colaborar o asumir un nuevo reto.", "Mentoría y conexiones para revisar prioridades, desarrollar habilidades y decidir qué mantener o delegar.", "Un siguiente paso definido y una red de apoyo para avanzar con mayor autonomía."],
      ["Hay aprendizajes que pueden llevarse a otro proyecto, al trabajo o a una iniciativa emprendedora.", "Orientación para conectar capacidades y proyectos con mentores, incubación u otras oportunidades pertinentes.", "Un plan de continuidad para quienes desean seguir y capacidades que acompañan a todo el grupo."],
      ["La iniciativa tiene avances y necesitas decidir cómo sostenerla, ampliarla o compartir lo aprendido.", "Revisión de resultados, responsabilidades y recursos para planear la siguiente etapa.", "Un plan de continuidad y criterios para decidir si conviene ampliar, ajustar o replantear."]
    ]
  }
];

export function CycleWheel() {
  const [stage, setStage] = useState(0);
  const [audience, setAudience] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % cycle.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + cycle.length - 1) % cycle.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = cycle.length - 1;
    else return;
    event.preventDefault(); setStage(next); refs.current[next]?.focus();
  }
  return <div className="route-explorer">
    <div className="route-audiences" role="group" aria-label="Ver el modelo según tu contexto">
      <span>Quiero verlo</span>
      {audiences.map((name, i) => <button type="button" key={name} aria-pressed={audience === i} onClick={() => setAudience(i)}>{name}</button>)}
    </div>
    <div className="journey-layout">
      <div className="journey-wheel">
        <svg viewBox="0 0 500 500" aria-hidden="true">
          <circle cx="250" cy="250" r="173" fill="none" stroke="#F0D3D8" strokeWidth="56" />
          {cycle.map((item,i)=>{
            const start=(i*90+184)*Math.PI/180, end=(i*90+266)*Math.PI/180;
            const x1=250+173*Math.cos(start),y1=250+173*Math.sin(start),x2=250+173*Math.cos(end),y2=250+173*Math.sin(end);
            return <path key={item.name} d={`M ${x1} ${y1} A 173 173 0 0 1 ${x2} ${y2}`} fill="none" stroke={stage===i?"#B81632":"#474855"} strokeWidth="56" className="journey-arc" />;
          })}
          <circle cx="250" cy="250" r="109" fill="white" stroke="#F0D3D8" />
          <path d="M218 169 A86 86 0 0 1 332 271" fill="none" stroke="#8C8F94" strokeWidth="1.5" />
          <path d="m325 263 7 9 7-9" fill="none" stroke="#8C8F94" strokeWidth="1.5" />
          <text x="250" y="237" className="journey-center">Tu camino</text>
          <text x="250" y="270" className="journey-center-small">Volver no es</text><text x="250" y="290" className="journey-center-small">retroceder.</text>
        </svg>
        <div role="tablist" aria-label="Etapas del modelo de acompañamiento" className="journey-controls">
          {cycle.map((item,i)=><button className={`journey-stop journey-stop-${i}`} type="button" role="tab" id={`stage-tab-${i}`} aria-controls={`stage-panel-${i}`} aria-selected={stage===i} tabIndex={stage===i?0:-1} ref={el=>{refs.current[i]=el;}} onKeyDown={e=>onKey(e,i)} onClick={()=>setStage(i)} key={item.name}>
            <span>0{i+1} / {item.element}</span><strong>{item.name}</strong>
          </button>)}
        </div>
      </div>
      <div className="journey-reading">
        {cycle.map((item,i)=><section key={item.name} role="tabpanel" id={`stage-panel-${i}`} aria-labelledby={`stage-tab-${i}`} hidden={stage!==i} tabIndex={0} className="journey-panel">
          <span className="journey-stage-number" aria-hidden="true">0{i+1}</span><p className="journey-context">{audiences[audience]} / {item.element}</p><h3>{item.title}</h3>
          <dl className="journey-details" aria-live="polite" aria-atomic="true">
            <div><dt>Dónde entras</dt><dd>{item.variants[audience][0]}</dd></div>
            <div><dt>Qué pone uHub</dt><dd>{item.variants[audience][1]}</dd></div>
            <div><dt>Qué avance buscamos</dt><dd>{item.variants[audience][2]}</dd></div>
          </dl>
        </section>)}
      </div>
    </div>
    <div className="route-explorer-bottom"><p>Estos avances orientan el proceso. El punto de entrada y el acompañamiento se acuerdan según cada persona o programa.</p><button type="button" onClick={() => { const next = (stage + 1) % 4; setStage(next); refs.current[next]?.focus(); }}>{stage === 3 ? "Volver a descubrir" : `Explorar ${cycle[stage + 1].name.toLowerCase()}`} <span aria-hidden="true">→</span></button></div>
  </div>;
}

const stories = [
  { name: "Cynthia Piñón", project: "Ediciones Algoritmo 524", program: "Programa AWE / uHub", photo: "/images/cynthia-pinon.webp", before: "Buscaba dirección para replantear su negocio editorial.", practice: "Probó ideas y revisó su modelo con acompañamiento.", change: "Desarrolló una propuesta editorial distinta y hoy también colabora como mentora.", href: "https://www.uhub.org.mx/historias/cynthia-pinon" },
  { name: "Mary Torres", project: "V&T Distribuidores", program: "Programa Emprendedores Líderes Sociales", photo: "/images/mary-torres.webp", before: "Necesitaba dar más estructura a la operación de su negocio de productos regionales.", practice: "Trabajó costos, organización y decisiones de negocio con mentores y compañeras.", change: "Fortaleció su red de colaboración y aplicó herramientas para organizar su emprendimiento.", href: "https://youtu.be/C282laMlz00" },
  { name: "Irma Griselda Ávila", project: "Cosecha que Alimenta al Corazón", program: "Programa anual de uHub A.C.", photo: "/images/griselda-avila.webp", before: "Quería dar mayor dirección y difusión a sus talleres de huertos urbanos.", practice: "Aplicó herramientas de promoción, administración y capacitación tecnológica.", change: "Desarrolló manuales para sus talleres y sumó colaboración para ofrecer sistemas de riego.", href: "https://www.uhub.org.mx/historias/irma-griselda" },
];

export function ChangeStories() {
  const [activeStory, setActiveStory] = useState(0);
  return (
    <div className="root-story-layout">
      <div className="root-story-list" aria-label="Elegir una historia">
        {stories.map((story, index) => (
          <button
            type="button"
            key={story.name}
            className={activeStory === index ? "is-active" : ""}
            onClick={() => setActiveStory(index)}
            aria-pressed={activeStory === index}
            aria-controls="story-detail"
          >
            <span>0{index + 1}</span>
            <strong>{story.name}</strong>
            <span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <article
        className="root-story-detail"
        id="story-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="root-story-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={stories[activeStory].photo} alt={stories[activeStory].name} width="500" height="625" loading="lazy" />
        </div>
        <div>
          <span className="root-story-name">{stories[activeStory].name}</span>
          <p className="root-story-project">{stories[activeStory].project}</p>
          <span className="root-story-program">{stories[activeStory].program}</span>
          <dl>
            <div>
              <dt>Situación</dt>
              <dd>{stories[activeStory].before}</dd>
            </div>
            <div>
              <dt>Qué trabajó</dt>
              <dd>{stories[activeStory].practice}</dd>
            </div>
            <div>
              <dt>Avances de su recorrido</dt>
              <dd>{stories[activeStory].change}</dd>
            </div>
          </dl>
          <a className="root-story-source" href={stories[activeStory].href} target="_blank" rel="noreferrer">Conoce su experiencia ↗</a>
        </div>
      </article>
    </div>
  );
}
