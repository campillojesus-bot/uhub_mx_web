import { Button } from "@/components/ui/Button";

const steps = [
  {
    num: "01",
    title: "Descubre qué tipo de emprendedor eres.",
    body: "Tres minutos, gratis.",
  },
  {
    num: "02",
    title: "Elige tu camino.",
    body: "Una MentorClass para probar, o Emprende Diario para tu ritmo diario.",
  },
  {
    num: "03",
    title: "Avanza acompañado.",
    body: "Con sistema, mentores y comunidad — y deja de empezar de cero cada lunes.",
  },
];

export function HowToStart() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <h2 className="text-balance font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
          Empezar es más simple de lo que crees
        </h2>

        <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="font-display text-3xl font-black text-red-uhub">
                {step.num}
              </div>
              <h3 className="mt-3 font-display text-lg font-extrabold text-gray-dark">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-dark">{step.body}</p>
            </div>
          ))}
        </div>

        <Button href="/test" variant="primary" className="mt-12">
          Empieza por el paso 1
        </Button>
      </div>
    </section>
  );
}
