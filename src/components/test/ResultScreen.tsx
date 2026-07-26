"use client";

import { useState } from "react";
import Link from "next/link";
import { PROFILES, QUADRANT_CELLS, type Profile, type ProfileKey } from "@/lib/testProfiles";
import { whatsappLink } from "@/lib/whatsapp";

const talkToRodrigo = whatsappLink(
  "Hola Rodrigo, acabo de hacer el test del cuadrante uHub"
);

const popupPosition: Record<1 | 2 | 3 | 4, string> = {
  1: "top-full left-0 mt-2",
  2: "top-full right-0 mt-2",
  3: "bottom-full left-0 mb-2",
  4: "bottom-full right-0 mb-2",
};

export function ResultScreen({
  profile,
  onRestart,
}: {
  profile: Profile;
  onRestart: () => void;
}) {
  const [openCell, setOpenCell] = useState<ProfileKey | null>(null);

  return (
    <div>
      {/* Hero */}
      <div
        className="relative mb-5 overflow-hidden rounded-2xl border border-border-subtle bg-white p-9 text-center sm:p-11"
        style={{ borderTopColor: profile.color, borderTopWidth: 4 }}
      >
        <span
          className="inline-block rounded-full px-3.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.06em]"
          style={{ background: profile.bg, color: profile.color }}
        >
          {profile.tag}
        </span>
        <h2 className="text-balance mt-4 font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.5rem)] font-black leading-[1.05] tracking-tight text-gray-dark">
          Eres <span style={{ color: profile.color }}>{profile.name}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[520px] text-pretty leading-relaxed text-gray-dark">
          {profile.desc}
        </p>
      </div>

      {/* Cuadrante interactivo */}
      <div className="mb-5 rounded-2xl border border-border-subtle bg-white p-7 sm:p-9">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.06em] text-gray-dark/80">
          Tu posición en el cuadrante uHub — toca cada perfil para saber más
        </p>

        <div className="mx-auto max-w-[460px]">
          <div className="flex items-center justify-between px-1 pb-1.5">
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.06em] text-gray-dark/80">
              <ChevronIcon dir="left" /> Seguridad · bajo riesgo
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.06em] text-gray-dark/80">
              Independencia · alto riesgo <ChevronIcon dir="right" />
            </span>
          </div>

          <div className="flex items-stretch gap-2">
            <div className="flex w-6 shrink-0 flex-col items-center justify-between">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.06em] text-gray-dark/80"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                ↑ Innovar
              </span>
              <div className="mx-auto my-1.5 w-px flex-1 bg-border-subtle" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.06em] text-gray-dark/80"
                style={{ writingMode: "vertical-rl" }}
              >
                ↓ Libertad
              </span>
            </div>

            <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-2">
              {QUADRANT_CELLS.map((cell) => {
                const p = PROFILES[cell.key];
                const isActive = p.key === profile.key;
                const isOpen = openCell === cell.key;
                return (
                  <div
                    key={cell.key}
                    className="relative min-h-[110px] cursor-pointer rounded-[14px] border-[1.5px] p-3.5 transition-all duration-200"
                    style={
                      isActive
                        ? {
                            background: p.bg,
                            borderColor: p.color,
                            borderWidth: 2,
                            transform: "scale(1.03)",
                            boxShadow: "0 8px 20px rgba(0,0,0,.1)",
                          }
                        : { background: "#FAFAFA", borderColor: "#D1D1D1" }
                    }
                    onClick={() => setOpenCell(isOpen ? null : cell.key)}
                  >
                    {isActive && (
                      <span
                        className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.04em] text-white"
                        style={{ background: p.color }}
                      >
                        ✓ Tu resultado
                      </span>
                    )}
                    <div
                      className="mb-1 text-[11px] font-bold"
                      style={{ color: isActive ? p.color : "#6B6B6B" }}
                    >
                      0{cell.q}
                    </div>
                    <div
                      className="mb-1.5 text-sm font-bold leading-tight"
                      style={{ color: isActive ? p.color : "#1A1A1A" }}
                    >
                      {p.name}
                    </div>
                    <div className="text-xs leading-snug text-gray-dark/80">
                      {p.miniDesc}
                    </div>
                    <span
                      className="mt-2 inline-block rounded-full px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.04em]"
                      style={{ background: p.bg, color: p.color }}
                    >
                      {p.badgeLabel}
                    </span>

                    {isOpen && (
                      <div
                        role="dialog"
                        onClick={(e) => e.stopPropagation()}
                        className={`absolute z-10 w-[220px] rounded-xl border border-border-subtle bg-white p-4 text-left text-[13px] leading-relaxed text-gray-dark shadow-[0_12px_32px_rgba(0,0,0,.14)] ${popupPosition[cell.q]}`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenCell(null)}
                          aria-label="Cerrar"
                          className="float-right ml-2 text-base leading-none text-gray-dark/80"
                        >
                          ×
                        </button>
                        <div
                          className="mb-1.5 font-display text-sm font-extrabold"
                          style={{ color: p.color }}
                        >
                          {p.name}
                        </div>
                        {p.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fortalezas */}
      <div className="mb-4 rounded-[18px] border border-border-subtle bg-white p-7">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.07em] text-gray-dark/80">
          Tus fortalezas
        </p>
        <ul className="flex flex-col gap-3">
          {profile.strengths.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-dark">
              <span
                className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
                style={{ background: profile.bg }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={profile.color} strokeWidth="2.5" aria-hidden>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Retos */}
      <div className="mb-4 rounded-[18px] border border-border-subtle bg-white p-7">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.07em] text-gray-dark/80">
          Retos que vienen con tu perfil
        </p>
        <ul className="flex flex-col gap-3">
          {profile.challenges.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-dark">
              <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-gray-light">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="2.5" aria-hidden>
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Recomendación */}
      <div
        className="mb-5 rounded-[18px] border p-7"
        style={{ background: profile.bg, borderColor: profile.color }}
      >
        <p
          className="mb-2.5 text-xs font-bold uppercase tracking-[0.07em]"
          style={{ color: profile.color }}
        >
          Lo que necesitas ahora
        </p>
        <p className="mb-4 leading-relaxed text-gray-dark">{profile.rec}</p>
        <Link
          href="/emprende-diario"
          className="inline-flex items-center gap-2 rounded-[10px] px-5 py-3.5 font-display text-sm font-bold text-white no-underline transition-opacity hover:opacity-90"
          style={{ background: profile.color }}
        >
          Conoce Emprende Diario
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <button
          type="button"
          onClick={onRestart}
          className="min-h-[44px] rounded-xl border-[1.5px] border-border-subtle px-6 py-3 font-display text-sm font-semibold text-gray-dark transition-colors hover:border-gray-dark"
        >
          Repetir diagnóstico
        </button>
        <a
          href={talkToRodrigo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center rounded-xl border-[1.5px] border-border-subtle px-6 py-3 font-display text-sm font-semibold text-gray-dark no-underline transition-colors hover:border-gray-dark"
        >
          Hablar con Rodrigo
        </a>
      </div>
    </div>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === "left" ? (
        <>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </>
      ) : (
        <>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </>
      )}
    </svg>
  );
}
