"use client";

import Link from "next/link";
import { useState } from "react";

const siteLinks = [
  { href: "/test", label: "Test del cuadrante" },
  { href: "/mentorclass", label: "MentorClass" },
  { href: "/emprende-diario", label: "Emprende Diario" },
  { href: "/organizaciones", label: "Organizaciones" },
  { href: "/nosotros", label: "Nosotros" },
];

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-gray-dark text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl font-black tracking-tight">
            <span className="text-red-uhub">u</span>Hüb
          </span>
          <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-white/70">
            Centro de Desarrollo Emprendedor.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.1em] text-white/50">
            Explora
          </h3>
          <ul className="mt-4 space-y-2.5">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-white/85 no-underline hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.1em] text-white/50">
            Síguenos
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="https://instagram.com/uhubmx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/85 no-underline hover:text-white"
              >
                Instagram — @uhubmx
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/uhubmx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/85 no-underline hover:text-white"
              >
                LinkedIn — uhubmx
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-white/70">
            Contacto: <span className="italic text-white/50">[PENDIENTE: correo de contacto]</span>
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.1em] text-white/50">
            Newsletter
          </h3>
          <p className="mt-4 text-sm text-white/70">
            Ideas y sistema para sostener tu emprendimiento, directo a tu correo.
          </p>
          {submitted ? (
            <p className="mt-4 text-sm font-semibold text-white">Gracias por suscribirte.</p>
          ) : (
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="tu@correo.com"
                className="min-h-[44px] w-full min-w-0 rounded-lg border border-white/20 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="min-h-[44px] shrink-0 rounded-lg bg-red-uhub px-4 font-display text-sm font-bold text-white hover:bg-red-uhub-hover"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} uHub. Todos los derechos reservados.</p>
          <p className="italic">[PENDIENTE: URL o texto del aviso de privacidad]</p>
        </div>
      </div>
    </footer>
  );
}
