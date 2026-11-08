"use client";

import { useRef, useState, type KeyboardEvent } from "react";

/**
 * Ciclo de Cambio Emprendedor uHub — porteado fiel del artefacto ya
 * construido en /referencia-ciclo (misma paleta, tokens e interacción:
 * clic en cada segmento para ver el detalle). No es un diagrama nuevo.
 */
const ACTIVE_COLOR = "var(--surface-brand)";
const INACTIVE_COLOR = "var(--surface-brand-deep)";

const stages = [
  {
    name: "Descubrir",
    el: "Fuego",
    work: "Mentalidad y propósito",
    desc: "Encuentras el porqué que sostiene todo lo demás. Sin propósito claro, el negocio no aguanta.",
    icon: (
      <path
        d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    name: "Aterrizar",
    el: "Tierra",
    work: "Habilidades y modelo de negocio",
    desc: "Conviertes la idea en un modelo que funciona. Aprendes lo que hay que aprender, sin adornos.",
    icon: (
      <path
        d="M7 20h10 M10 20c5.5-2.5.8-6.4 3-10 M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    name: "Adaptar",
    el: "Agua",
    work: "Disciplina y hábitos",
    desc: "Sostienes el movimiento cuando la motivación baja. Emprender no es un evento: es un hábito.",
    icon: (
      <path
        d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    name: "Crecer",
    el: "Aire",
    work: "Liderazgo y crecimiento",
    desc: "Escalas lo que ya funciona y empiezas a guiar a otros. Creces sin perder el propósito.",
    icon: (
      <path
        d="M12.8 19.6A2 2 0 1 0 14 16H2 M17.5 8a2.5 2.5 0 1 1 2 4H2 M9.8 4.4A2 2 0 1 1 11 8H2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

const segmentPaths = [
  "M82.23,61.51 A210,210 0 0,1 357.77,61.51 L280.36,150.57 A92,92 0 0,0 159.64,150.57 Z",
  "M378.49,82.23 A210,210 0 0,1 378.49,357.77 L289.43,280.36 A92,92 0 0,0 289.43,159.64 Z",
  "M357.77,378.49 A210,210 0 0,1 82.23,378.49 L159.64,289.43 A92,92 0 0,0 280.36,289.43 Z",
  "M61.51,357.77 A210,210 0 0,1 61.51,82.23 L150.57,159.64 A92,92 0 0,0 150.57,280.36 Z",
];

const labelPos = [
  { x: 220, y: 44 },
  { x: 396, y: 220 },
  { x: 220, y: 396 },
  { x: 44, y: 220 },
];

const iconCircle = [
  { cx: 220, cy: 106 },
  { cx: 334, cy: 220 },
  { cx: 220, cy: 334 },
  { cx: 106, cy: 220 },
];

export function CycleWheel({ compact = false, selectedStage, onStageChange, panelPrefix = "home-cycle" }: {
  compact?: boolean;
  selectedStage?: number;
  onStageChange?: (stage: number) => void;
  panelPrefix?: string;
}) {
  const [localStage, setLocalStage] = useState(0);
  const active = selectedStage ?? localStage;
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const setActive = (stage: number) => { setLocalStage(stage); onStageChange?.(stage); };
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (["ArrowRight", "ArrowDown"].includes(event.key)) next = (index + 1) % 4;
    else if (["ArrowLeft", "ArrowUp"].includes(event.key)) next = (index + 3) % 4;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 3;
    else return;
    event.preventDefault(); setActive(next); refs.current[next]?.focus();
  }
  const current = stages[active];

  return (
    <div className={compact ? "mx-auto max-w-[400px]" : "mx-auto flex max-w-[1040px] flex-wrap items-center justify-center gap-12"}>
      <div className={compact ? "cycle-mini-wheel" : "w-full min-w-[280px] max-w-[540px] flex-1"}>
        <svg
          viewBox="-24 -24 488 488"
          className="block h-auto w-full overflow-visible"
          role={compact ? undefined : "group"}
          aria-hidden={compact || undefined}
          aria-label={compact ? "Ciclo uHüb: Fuego · Descubrir, Tierra · Aterrizar, Agua · Adaptar, Aire · Crecer. Puedes volver a cualquier etapa." : "Rueda del Ciclo de Cambio Emprendedor uHüb"}
        >
          {stages.map((stage, i) => {
            const isActive = i === active;
            const stageColor = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
            const icon = iconCircle[i];
            return (
              <g
                key={stage.name}
                role={compact ? undefined : "button"}
                tabIndex={compact ? undefined : 0}
                aria-label={compact ? undefined : stage.name}
                aria-pressed={compact ? undefined : isActive}
                onClick={() => setActive(i)}
                onKeyDown={compact ? undefined : (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                style={{
                  cursor: "pointer",
                  transform: isActive ? "scale(1.045)" : "scale(1)",
                  transformOrigin: "220px 220px",
                  transition: "transform .28s var(--motion-ease)",
                }}
              >
                {/*
                  Solid fill only, never opacity: the active wedge is solid
                  red and every inactive wedge is solid burgundy — group-level
                  opacity forced an offscreen compositing buffer that clipped
                  to the SVG viewport, cutting off the trailing letters of the
                  longer labels (e.g. "Aterrizar"), and it washed the red out
                  to an off-brand pink instead of solid burgundy.
                */}
                <path
                  d={segmentPaths[i]}
                  style={{
                    fill: stageColor,
                    transition: "fill .28s var(--motion-ease)",
                  }}
                />
                {!compact && <text
                  x={compact ? [220, 370, 220, 70][i] : labelPos[i].x}
                  y={compact ? [45, 220, 395, 220][i] : labelPos[i].y}
                  style={{
                    fill: "#fff",
                    // "Aterrizar" (9 chars) is wider than its wedge at this
                    // radius and overhangs onto the page background — the
                    // stroke keeps it legible there without moving/resizing
                    // any label relative to the reference artifact.
                    stroke: "#474855",
                    strokeWidth: 3,
                    paintOrder: "stroke fill",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: compact ? 19 : 16,
                    letterSpacing: "0.01em",
                    textAnchor: "middle",
                    dominantBaseline: "central",
                  }}
                >
                  {compact ? <><tspan x={[220, 370, 220, 70][i]} dy="-7">{stage.el}</tspan><tspan x={[220, 370, 220, 70][i]} dy="23" fontSize="17">{stage.name}</tspan></> : stage.name}
                </text>}
                {!compact && <circle
                  cx={icon.cx}
                  cy={icon.cy}
                  r={20}
                  style={{ fill: "#fff", stroke: "#e4e3e6", strokeWidth: 1.5 }}
                />}
                {!compact && <g
                  transform={`translate(${icon.cx - 11.4},${icon.cy - 11.4}) scale(0.95)`}
                  style={{ stroke: stageColor, transition: "stroke .28s ease" }}
                >
                  {stage.icon}
                </g>}
              </g>
            );
          })}

          {/* Center hub */}
          <circle cx={220} cy={220} r={92} style={{ fill: "#fff", stroke: "#e4e3e6", strokeWidth: 1.5 }} />
          <path
            d="M220,162 A58,58 0 0,1 277.1,209.9"
            style={{ fill: "none", stroke: "#87838d", strokeWidth: 3, strokeLinecap: "round" }}
          />
          <path d="M277.1,209.9 L271.3,203 L280.2,201.4 Z" style={{ fill: "#87838d" }} />
          <path
            d="M270.2,249 A58,58 0 0,1 200.2,274.5"
            style={{ fill: "none", stroke: "#87838d", strokeWidth: 3, strokeLinecap: "round" }}
          />
          <path d="M200.2,274.5 L209.1,272.9 L206,281.4 Z" style={{ fill: "#87838d" }} />
          <path
            d="M169.8,249 A58,58 0 0,1 182.7,175.6"
            style={{ fill: "none", stroke: "#87838d", strokeWidth: 3, strokeLinecap: "round" }}
          />
          <path d="M182.7,175.6 L179.6,184.1 L173.8,177.2 Z" style={{ fill: "#87838d" }} />
          <g transform="translate(208,170) scale(1.05)">
            <path
              d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 3a4 4 0 0 1 0 8 4 4 0 0 1 0-8z"
              style={{ fill: "none", stroke: "#B81632", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
            />
          </g>
          <text
            x={220}
            y={210}
            style={{
              fill: "#B81632",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 20,
              letterSpacing: "0.02em",
              textAnchor: "middle",
              dominantBaseline: "central",
            }}
          >
            {compact ? "Tu ciclo" : "uHüb"}
          </text>
          <text
            x={220}
            y={230}
            style={{
              fill: "#87838d",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.02em",
              textAnchor: "middle",
              dominantBaseline: "central",
            }}
          >
            {compact ? "Puedes volver." : "propósito · motor"}
          </text>
        </svg>
        {compact && <div className="cycle-mini-controls" role="tablist" aria-label="Explorar las etapas del ciclo">
          {stages.map((stage, i) => <button key={stage.name} type="button" role="tab"
            className={`cycle-mini-control cycle-mini-control-${i}`}
            id={`${panelPrefix}-tab-${i}`} aria-controls={`${panelPrefix}-panel-${i}`}
            aria-selected={i === active} tabIndex={i === active ? 0 : -1}
            title={`${stage.name} · ${stage.work}`} aria-label={`Explorar la etapa ${stage.name}`}
            ref={node => { refs.current[i] = node; }} onKeyDown={event => navigate(event, i)}
            onClick={() => setActive(i)}><span>{stage.el}</span><strong>{stage.name}</strong></button>)}
        </div>}
      </div>

      {/* Detail panel */}
      {!compact && <aside className="w-full min-w-[280px] max-w-[400px] flex-1">
        <div className="flex items-baseline gap-3.5">
          <span
            className="font-display text-[2.6rem] font-black leading-none"
            style={{ color: ACTIVE_COLOR }}
          >
            0{active + 1}
          </span>
          <span className="inline-flex items-center gap-2 font-body text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-gray-dark/80">
            <span
              className="inline-block h-[9px] w-[9px] rounded-full"
              style={{ background: ACTIVE_COLOR }}
            />
            {current.el}
          </span>
        </div>
        <h3
          className="mt-1 font-display text-[2rem] font-black leading-[1.05]"
          style={{ color: ACTIVE_COLOR }}
        >
          {current.name}
        </h3>
        <p className="mt-1 font-display text-[0.95rem] font-extrabold text-gray-dark">
          {current.work}
        </p>
        <p className="mt-3.5 text-pretty text-[1.125rem] leading-[1.55] text-gray-dark">
          {current.desc}
        </p>

        <div className="mt-6 flex gap-2">
          {stages.map((stage, i) => (
            <button
              key={stage.name}
              onClick={() => setActive(i)}
              aria-label={stage.name}
              className="h-2 flex-1 rounded-sm border-0 p-0 transition-colors duration-200"
              style={{ background: i === active ? ACTIVE_COLOR : "#e4e3e6" }}
            />
          ))}
        </div>
        <p className="mt-3 text-xs tracking-wide text-gray-dark/70">
          Haz clic en cada etapa de la rueda.
        </p>
      </aside>}
    </div>
  );
}
