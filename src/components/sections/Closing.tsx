import { Button } from "@/components/ui/Button";

export function Closing() {
  return (
    <>
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

      <section className="border-t border-border-subtle bg-gray-light py-16">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <h3 className="font-display text-lg font-extrabold text-gray-dark">
            uHub también acompaña a quien empieza desde más atrás.
          </h3>
          <p className="mt-4 leading-relaxed text-gray-dark">
            A través de <strong>uHub AC</strong>, nuestro brazo filantrópico,
            acompañamos gratuitamente a emprendedores en contextos adversos
            gracias al respaldo de fundaciones, empresas e instituciones. Es
            el acompañamiento más profundo que damos: doce meses y una quinta
            etapa —consolidar— para profesionalizar el proyecto.
          </p>
          <a
            href="https://uhub.org.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex font-display text-base font-bold text-red-uhub no-underline hover:underline"
          >
            Conoce uHub AC →
          </a>
        </div>
      </section>
    </>
  );
}
