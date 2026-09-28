"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const layers = [
  { title: "La persona", subtitle: "Lo que crece en ti", items: ["Mentalidad", "Habilidades", "Disciplina", "Liderazgo"], text: "Mentalidad y propósito, habilidades, disciplina y liderazgo. No tienes que dominarlo todo antes de empezar." },
  { title: "Tu ecosistema", subtitle: "Lo que construyes con uHub", items: ["Comunidad", "Mentores", "Hábitos", "Método"], text: "Mentores para revisar decisiones, especialistas según el reto, comunidad para compartir y hábitos que caben en tu semana." },
  { title: "Quienes necesitan que avances", subtitle: "Las instituciones", items: ["Empresas", "Universidades", "Cámaras", "A.C. y fundaciones"], text: "Trabajamos con instituciones para que lo aprendido se convierta en acciones y mejoras concretas." },
];

export function ModelExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  function key(event: KeyboardEvent<HTMLButtonElement>, i: number) {
    const next = event.key === "ArrowDown" || event.key === "ArrowRight" ? (i + 1) % 3 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? (i + 2) % 3 : event.key === "Home" ? 0 : event.key === "End" ? 2 : null;
    if (next === null) return;
    event.preventDefault(); setActive(next); refs.current[next]?.focus();
  }
  return <div className="model-explorer" data-layer={active}>
    <div className="model-orbit">
      <svg viewBox="0 0 600 600" aria-hidden="true" className="model-orbit-svg">
        <defs><radialGradient id="model-light"><stop stopColor="#F0D3D8" stopOpacity=".5" /><stop offset="1" stopColor="#F2F2F2" stopOpacity="0" /></radialGradient></defs>
        <circle cx="300" cy="300" r="296" fill="url(#model-light)" />
        {[2, 1, 0].map(i => <g key={i} className={`model-ring model-ring-${i} ${active === i ? "is-active" : ""}`} onClick={() => setActive(i)}>
          <circle cx="300" cy="300" r={[83, 157, 246][i]} fill={i === 0 ? "#fff" : "none"} strokeWidth={[3, 64, 54][i]} />
        </g>)}
        <circle cx="300" cy="54" r="8" fill={active===2 ? "#B81632" : "#8C8F94"}/>
        <circle cx="457" cy="300" r="8" fill={active===1 ? "#B81632" : "#8C8F94"}/>
        <text x="300" y="48" className="model-ring-label">03</text>
        <text x="300" y="148" className="model-ring-label">02</text>
        <text x="300" y="271" className="model-center-label">01 / LA PERSONA</text>
        <text x="300" y="325" className="model-center-you">Tú</text>
        <text x="300" y="350" className="model-center-label">El centro eres tú.</text>
      </svg>
      <p className="model-orbit-note">Persona · Ecosistema · Instituciones</p>
    </div>
    <div className="model-controls">
      <div role="tablist" aria-label="Capas del Modelo uHub" aria-orientation="vertical" className="model-layer-tabs">
        {layers.map((l, i) => <button type="button" key={l.title} id={`model-tab-${i}`} role="tab" aria-selected={active===i} aria-controls={`model-panel-${i}`} tabIndex={active===i?0:-1} ref={el=>{refs.current[i]=el;}} onKeyDown={e=>key(e,i)} onClick={()=>setActive(i)}>
          <span>0{i+1}</span><strong>{l.title}</strong><span aria-hidden="true">{active===i?"−":"+"}</span>
        </button>)}
      </div>
      {layers.map((l,i)=><div key={l.title} className="model-layer-panel" role="tabpanel" tabIndex={0} hidden={active!==i} id={`model-panel-${i}`} aria-labelledby={`model-tab-${i}`}>
        <p className="model-layer-kicker">{l.subtitle}</p><ul>{l.items.map(item=><li key={item}>{item}</li>)}</ul><p>{l.text}</p>
      </div>)}
    </div>
  </div>;
}
