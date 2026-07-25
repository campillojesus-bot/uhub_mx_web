import { TestimonioCard } from "@/components/marketing/TestimonioCard";
import { StatCallout } from "@/components/marketing/StatCallout";

const testimonios = [
  "Le dio formalidad a una idea que no tenía rumbo fijo.",
  "Me ayudó a creer en mí y perder el miedo.",
  "Me hizo fuerte para afrontar los retos del día a día.",
  "A no sentirme sola en el camino.",
];

export function Evidence() {
  return (
    <section className="bg-gray-light py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="text-balance text-center font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
          Esto no es teoría. Son personas reales.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonios.map((quote) => (
            <TestimonioCard key={quote} quote={quote} attribution="Graduada uHub" />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-[720px]">
          <StatCallout
            stats={[
              { value: "11", label: "Años de operación continua" },
              { value: "+2,000", label: "Activados en comunidad emprendedora", color: "orange" },
              { value: "+550", label: "Acompañados estructuralmente" },
            ]}
          />
          <p className="mt-6 text-center text-xs italic text-gray-dark/80 sm:text-left">
            [PENDIENTE: cifra de resultado propia de Emprende Diario — aún no
            documentada]
          </p>
        </div>
      </div>
    </section>
  );
}
