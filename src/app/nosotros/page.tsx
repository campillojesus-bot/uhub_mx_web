import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "uHub existe porque el emprendimiento no fracasa por falta de ideas, sino por falta de sistema y acompañamiento.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[640px] px-6 text-center">
        <h1 className="text-balance font-display text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-black leading-tight tracking-tight text-gray-dark">
          Nosotros
        </h1>
        <p className="text-pretty mt-6 leading-relaxed text-gray-dark">
          uHub existe porque el emprendimiento no fracasa por falta de
          ideas, sino por falta de sistema y acompañamiento — y porque
          nadie debería atravesar ese cambio en soledad.
        </p>
        <p className="mt-4 leading-relaxed text-gray-dark">
          Estamos construyendo esta página con calma. Mientras tanto,
          conoce a Rodrigo y el porqué de uHub en la portada, o descubre tu
          perfil de emprendedor.
        </p>
        <Button href="/test" variant="primary" className="mt-8">
          Descubre qué tipo de emprendedor eres
        </Button>
      </div>
    </section>
  );
}
