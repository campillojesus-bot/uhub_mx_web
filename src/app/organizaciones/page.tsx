import type { Metadata } from "next";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Organizaciones",
  description:
    "uHub lleva su sistema de estructura, hábitos y acompañamiento a empresas, OSC, cámaras y universidades que quieren desarrollar capacidad emprendedora en su gente.",
  alternates: { canonical: "/organizaciones" },
};

const orgWhatsapp = whatsappLink(
  "Hola, represento una organización y quiero conocer uHub"
);

const audiences = [
  {
    title: "Empresas",
    body: "Intraemprendimiento: activar iniciativa y ejecución en los equipos.",
  },
  {
    title: "OSC",
    body: "Intraemprendimiento social; organizaciones que buscan volverse autosustentables.",
  },
  {
    title: "Cámaras y asociaciones",
    body: "Un beneficio real y medible para tus afiliados.",
  },
  {
    title: "Universidades",
    body: "Competencias emprendedoras para la vida; formación docente.",
  },
];

export default function OrganizacionesPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <h1 className="text-balance font-display text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-black leading-tight tracking-tight text-gray-dark">
            El mismo sistema, aplicado a la realidad de tu gente.
          </h1>
          <p className="text-pretty mt-6 text-lg leading-relaxed text-gray-dark">
            uHub lleva su sistema de estructura, hábitos y acompañamiento a
            organizaciones que quieren desarrollar capacidad emprendedora en
            su gente.
          </p>
        </div>
      </section>

      <section className="bg-gray-light py-16 sm:py-24">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-xl border border-border-subtle bg-white p-7 shadow-[0_1px_3px_rgba(71,72,85,0.12),0_1px_2px_rgba(71,72,85,0.08)]"
              >
                <h2 className="font-display text-lg font-extrabold text-gray-dark">
                  {audience.title}
                </h2>
                <p className="mt-2 leading-relaxed text-gray-dark">
                  {audience.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-uhub py-16 sm:py-20">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h2 className="text-balance font-display text-2xl font-black leading-tight text-white">
            ¿Diriges una de estas organizaciones?
          </h2>
          <p className="mt-4 text-white/90">
            Cuéntanos de tu organización y lo revisamos juntos.
          </p>
          <a
            href={orgWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 font-display text-[0.95rem] font-bold text-red-uhub no-underline hover:bg-gray-light"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
