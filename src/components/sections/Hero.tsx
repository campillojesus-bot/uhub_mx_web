import { Button } from "@/components/ui/Button";

/**
 * [PENDIENTE: fotografía real para el hero] — persona sola en su
 * escritorio o taller, momento de pausa, pensativa. Mientras tanto se usa
 * el overlay de marca (--overlay-dark) como fondo, no un placeholder gris.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,22,50,0.25),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-start px-6 py-24 sm:py-32">
        <h1 className="max-w-[18ch] text-balance font-display text-[clamp(2.25rem,1.5rem+2.5vw,3.25rem)] font-black leading-[1.1] tracking-tight text-white">
          Sé lo que tengo que hacer. Sé que puedo. Pero no lo hago.
        </h1>
        <p className="mt-6 max-w-[46ch] text-pretty text-lg leading-relaxed text-white/85">
          No te falta información. Te falta un sistema que te sostenga cuando
          el entusiasmo baja — y gente que camine contigo. Eso es uHub.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="/test" variant="primary">
            Descubre qué tipo de emprendedor eres
          </Button>
          <Button href="#sistema" variant="outlineLight">
            Conoce el sistema
          </Button>
        </div>
      </div>
    </section>
  );
}
