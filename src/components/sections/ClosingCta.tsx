import { Button } from "@/components/ui/Button";

export function ClosingCta() {
  return (
    <section className="bg-red-uhub py-20 sm:py-24">
      <div className="mx-auto max-w-[680px] px-6 text-center">
        <h2 className="text-balance font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight text-white">
          Deja de empezar de cero cada lunes.
        </h2>
        <p className="mt-5 text-lg text-white/90">
          No necesitas más información. Necesitas un sistema y gente que te
          acompañe.
        </p>
        <Button href="/test" variant="white" className="mt-8">
          Descubre qué tipo de emprendedor eres
        </Button>
      </div>
    </section>
  );
}
