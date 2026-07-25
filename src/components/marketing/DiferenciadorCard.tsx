const noEs = [
  "Otro curso que termina y te deja igual",
  "Motivación que dura una semana",
  "Contenido genérico para \"cualquier emprendedor\"",
  "Recorrerlo en soledad",
];

const siEs = [
  "Un ciclo acompañado que se repite hasta volverse hábito",
  "Estructura que te sostiene cuando el entusiasmo baja",
  "Un sistema pensado para tu momento de transición",
  "Mentores y comunidad caminando contigo",
];

export function DiferenciadorCard() {
  return (
    <div className="grid gap-6 rounded-xl border border-border-subtle bg-white p-6 shadow-[0_1px_3px_rgba(71,72,85,0.12),0_1px_2px_rgba(71,72,85,0.08)] sm:grid-cols-2 sm:p-8">
      <div>
        <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.1em] text-gray-dark/80">
          uHub NO es
        </h3>
        <ul className="mt-4 space-y-3">
          {noEs.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-dark">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-gray-dark/70"
                aria-hidden
              >
                ✕
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.1em] text-red-uhub">
          uHub SÍ es
        </h3>
        <ul className="mt-4 space-y-3">
          {siEs.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-dark">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-red-uhub"
                aria-hidden
              >
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
