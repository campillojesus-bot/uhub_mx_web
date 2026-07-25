import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function TwoDoors() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1000px] px-6">
        <h2 className="text-balance text-center font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
          Dos formas de empezar. Un mismo sistema.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* MentorClass */}
          <div className="flex flex-col rounded-xl border border-border-subtle bg-white p-8 shadow-[0_1px_3px_rgba(71,72,85,0.12),0_1px_2px_rgba(71,72,85,0.08)]">
            <span className="inline-flex w-fit items-center rounded-full bg-gray-light px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.08em] text-gray-dark">
              Empieza gratis
            </span>
            <h3 className="mt-4 font-display text-2xl font-black text-gray-dark">
              MentorClass
            </h3>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-gray-dark/80">
              Para quién
            </p>
            <p className="mt-1 text-gray-dark">
              Tienes ganas pero no has dado el paso, o quieres conocer el
              sistema antes de comprometerte.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-gray-dark/80">
              Qué obtienes
            </p>
            <p className="mt-1 text-gray-dark">
              Una clase mensual en vivo con Rodrigo. Práctica, aplicable el
              mismo día, sin costo.
            </p>
            <Button href="/mentorclass" variant="outline" className="mt-8">
              Conoce MentorClass
            </Button>
          </div>

          {/* Emprende Diario — destacada */}
          <div className="flex flex-col rounded-xl border-2 border-red-uhub bg-white p-8 shadow-[0_4px_12px_rgba(71,72,85,0.14)]">
            <span className="inline-flex w-fit items-center rounded-full bg-red-uhub px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.08em] text-white">
              La membresía
            </span>
            <h3 className="mt-4 font-display text-2xl font-black text-gray-dark">
              Emprende Diario
            </h3>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-gray-dark/80">
              Para quién
            </p>
            <p className="mt-1 text-gray-dark">
              Ya sabes qué hacer. Te falta estructura diaria, ritmo y gente
              que no te deje soltar.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-gray-dark/80">
              Qué obtienes
            </p>
            <p className="mt-1 text-gray-dark">
              Planeación semanal guiada, retos mensuales, El Motor, MentorClass
              incluida, mentoría y comunidad activa.
            </p>

            <div className="mt-6 flex flex-col gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-xl font-black text-gray-dark">
                  Ritmo — $499 MXN/mes
                </p>
                <p className="mt-1 text-sm text-gray-dark/80">
                  Momentum · premium, próximamente, por invitación
                </p>
              </div>
            </div>

            <Button href="/emprende-diario" variant="primary" className="mt-8">
              Conoce Emprende Diario
            </Button>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-dark/80">
          ¿Diriges una empresa, cámara, universidad u organización? Llevamos
          el sistema uHub a tu gente —{" "}
          <Link href="/organizaciones" className="font-semibold text-red-uhub no-underline hover:underline">
            conoce Organizaciones
          </Link>
        </p>
      </div>
    </section>
  );
}
