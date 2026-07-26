"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="scroll-mt-16 bg-gray-light py-20 sm:py-24">
      <div className="mx-auto max-w-[560px] px-6 text-center">
        <h2 className="text-balance font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
          Emprender es humano
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-gray-dark">
          Estructura, hábitos y honestidad para sostener lo que empiezas — y
          a ti mismo.
        </p>
        <p className="mt-2 text-sm font-medium text-gray-dark/80">
          Por Rodrigo Campillo, fundador de uHub.
        </p>

        {submitted ? (
          <p className="mt-8 font-display text-lg font-bold text-gray-dark">
            Gracias por suscribirte.
          </p>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-[440px] flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="newsletter-section-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-section-email"
              type="email"
              required
              placeholder="tu@correo.com"
              className="min-h-[44px] w-full min-w-0 rounded-lg border border-border-subtle bg-white px-4 text-gray-dark placeholder:text-gray-medium focus:border-red-uhub focus:outline-none"
            />
            <button
              type="submit"
              className="min-h-[44px] shrink-0 rounded-lg bg-red-uhub px-6 font-display text-sm font-bold text-white hover:bg-red-uhub-hover"
            >
              Suscribirme
            </button>
          </form>
        )}
        <p className="mt-3 text-xs italic text-gray-dark/80">
          [PENDIENTE: form ID de Kit]
        </p>
      </div>
    </section>
  );
}
