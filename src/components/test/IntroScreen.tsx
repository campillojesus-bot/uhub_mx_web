import { Button } from "@/components/ui/Button";

const meta = [
  {
    label: "3 minutos",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    label: "10 preguntas",
    icon: (
      <>
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
      </>
    ),
  },
  {
    label: "4 perfiles posibles",
    icon: (
      <>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </>
    ),
  },
];

export function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-white p-9 text-center sm:p-11">
      <span className="inline-block rounded-full bg-pink-soft px-3.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-red-uhub">
        Diagnóstico gratuito
      </span>
      <h1 className="text-balance mt-6 font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-[1.1] tracking-tight text-gray-dark">
        ¿Qué tipo de <span className="text-red-uhub">emprendedor</span> eres?
      </h1>
      <p className="mx-auto mt-4 max-w-[440px] text-pretty leading-relaxed text-gray-dark">
        10 preguntas. 3 minutos. Resultado real sobre dónde estás parado — y
        qué necesitas para avanzar.
      </p>

      <div className="my-7 flex flex-wrap justify-center gap-5 border-y border-border-subtle py-4">
        {meta.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm font-medium text-gray-dark"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B81632"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              {item.icon}
            </svg>
            {item.label}
          </div>
        ))}
      </div>

      <Button variant="primary" onClick={onStart}>
        Empezar diagnóstico
      </Button>
      <p className="mt-4 text-xs text-gray-dark/80">
        Sin curso de regalo. Sin pitch al final. Solo tu resultado.
      </p>
    </div>
  );
}
