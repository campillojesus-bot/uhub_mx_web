import type { Metadata } from "next";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Emprende Diario",
  description:
    "Emprende Diario: la membresía de uHub para sostener tu emprendimiento con estructura diaria, mentores y comunidad.",
  alternates: { canonical: "/emprende-diario" },
};

const contactWhatsapp = whatsappLink(
  "Hola, quiero información de Emprende Diario"
);

export default function EmprendeDiarioPage() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[640px] px-6 text-center">
        <h1 className="text-balance font-display text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-black leading-tight tracking-tight text-gray-dark">
          Emprende Diario
        </h1>
        <p className="mt-5 font-display text-lg font-extrabold text-red-uhub">
          Emprender no es un evento. Es un hábito que se sostiene.
        </p>
        <p className="text-pretty mt-6 leading-relaxed text-gray-dark">
          La membresía de uHub para tu ritmo diario: planeación semanal
          guiada, retos mensuales, El Motor, MentorClass incluida, mentoría
          y comunidad activa.
        </p>
        <p className="mt-4 leading-relaxed text-gray-dark">
          <strong>Ritmo</strong> ($499 MXN/mes) — por tu cuenta, con el
          sistema y la comunidad. <strong>Momentum</strong> (premium,
          próximamente, por invitación) — acompañado 1:1.
        </p>
        <a
          href={contactWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-red-uhub px-6 py-3 font-display text-[0.95rem] font-bold text-white no-underline hover:bg-red-uhub-hover"
        >
          Escríbenos por WhatsApp
        </a>
        <p className="mt-4 text-sm text-gray-dark/80">
          [PENDIENTE: link de pago Stripe — Emprende Diario Ritmo $499]
        </p>
      </div>
    </section>
  );
}
