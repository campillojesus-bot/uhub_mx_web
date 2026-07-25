/**
 * Regla de marca: si no hay foto real disponible, un bloque de color con
 * tipografía — nunca un placeholder gris genérico.
 */
export function PhotoBlock({
  label,
  tone = "dark",
  className = "",
}: {
  label: string;
  tone?: "dark" | "red" | "burgundy";
  className?: string;
}) {
  const toneClasses = {
    dark: "bg-gray-dark",
    red: "bg-red-uhub",
    burgundy: "bg-burgundy",
  } as const;

  return (
    <div
      className={`flex items-center justify-center rounded-xl p-8 text-center ${toneClasses[tone]} ${className}`}
    >
      <span className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-white/70">
        {label}
      </span>
    </div>
  );
}
