import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "MentorClass",
  description:
    "MentorClass: una clase mensual en vivo con Rodrigo Campillo, práctica y aplicable el mismo día, sin costo. Conoce el sistema uHub antes de comprometerte.",
  alternates: { canonical: "/mentorclass" },
};

const bullets = [
  "Una hora en vivo con Rodrigo, una vez al mes.",
  "Un tema práctico que puedes aplicar el mismo día — no teoría suelta.",
  "Una primera probada del sistema uHub, sin costo y sin compromiso.",
];

export default function MentorClassPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[720px] px-6 text-center">
          <Kicker>Empieza gratis</Kicker>
          <h1 className="text-balance mt-5 font-display text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-black leading-tight tracking-tight text-gray-dark">
            MentorClass
          </h1>
          <p className="text-pretty mt-5 text-lg leading-relaxed text-gray-dark">
            Una clase mensual en vivo con Rodrigo. Práctica, aplicable el
            mismo día, sin costo.
          </p>
        </div>
      </section>

      <section className="bg-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="font-display text-xl font-extrabold text-gray-dark">
            Qué te llevas
          </h2>
          <ul className="mt-6 space-y-4">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-gray-dark">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-uhub" aria-hidden />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-xl font-extrabold text-gray-dark">
            Para quién
          </h2>
          <p className="mt-4 leading-relaxed text-gray-dark">
            Tienes ganas pero no has dado el paso, o quieres conocer el
            sistema antes de comprometerte.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <h2 className="text-center font-display text-xl font-extrabold text-gray-dark">
            Reserva tu lugar
          </h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border-subtle">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdC4WOKeJooBTObICpTnqrhW_4K-W8wcO4HKMpvFykLa9l7_g/viewform?embedded=true"
              title="Registro MentorClass"
              width="100%"
              height="900"
              className="block w-full"
            >
              Cargando formulario…
            </iframe>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-gray-light py-14">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <p className="text-gray-dark">
            ¿Ya sabes qué hacer y quieres estructura diaria?
          </p>
          <Link
            href="/emprende-diario"
            className="mt-2 inline-flex font-display text-base font-bold text-red-uhub no-underline hover:underline"
          >
            Conoce Emprende Diario →
          </Link>
        </div>
      </section>
    </>
  );
}
