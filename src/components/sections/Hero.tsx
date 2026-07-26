import { Button } from "@/components/ui/Button";

const floatingCards = [
  { label: "Sistema", position: "left-0 top-4 sm:left-2" },
  { label: "Mentores", position: "right-0 top-20 sm:right-2 sm:top-24" },
  { label: "Comunidad", position: "left-6 bottom-4 sm:left-10" },
] as const;

/**
 * [PENDIENTE: fotografía real del hero] — cuando llegue, sustituye toda
 * la composición de tarjetas flotantes de la derecha por la foto real.
 */
export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-8">
        <div className="lg:pr-6">
          <p className="font-display text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-red-uhub">
            Para quienes inician, reinician, ajustan el rumbo o sostienen
            mientras todo cambia
          </p>
          <h1 className="mt-5 max-w-[18ch] text-balance font-display text-[clamp(2.25rem,1.5rem+2.5vw,3.25rem)] font-black leading-[1.1] tracking-tight text-gray-dark">
            Sé lo que tengo que hacer. Sé que puedo.{" "}
            <span className="text-red-uhub">Pero no lo hago.</span>
          </h1>
          <p className="mt-6 max-w-[50ch] text-pretty text-lg leading-relaxed text-gray-dark">
            Diseñamos sistemas de estructura, hábitos y mentores para
            personas emprendedoras en transición — para que avanzar deje de
            depender de tu motivación del día.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/test" variant="primary">
              Descubre qué tipo de emprendedor eres
            </Button>
            <Button href="#sistema" variant="outline">
              Conoce el sistema
            </Button>
          </div>
          <p className="mt-5 text-sm font-medium text-gray-dark/80">
            Tres minutos · Gratis · Sin fórmulas mágicas
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:mx-0 lg:max-w-none">
          <div className="absolute inset-0 rounded-2xl bg-gray-light" />

          {floatingCards.map((card) => (
            <div
              key={card.label}
              className={`absolute w-32 rounded-xl border border-border-subtle bg-white px-4 py-3 text-center shadow-[0_4px_12px_rgba(71,72,85,0.14)] ${card.position}`}
            >
              <span className="font-display text-sm font-extrabold text-gray-dark">
                {card.label}
              </span>
            </div>
          ))}

          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 rounded-xl border-2 border-red-uhub bg-white px-6 py-6 text-center shadow-[0_4px_12px_rgba(71,72,85,0.14)]">
            <p className="font-display text-lg font-black leading-snug text-red-uhub">
              LA IDEA NO BASTA.
            </p>
            <p className="mt-1.5 text-sm leading-snug text-gray-dark">
              Hace falta una persona capaz de sostenerla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
