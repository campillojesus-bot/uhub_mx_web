"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#sistema", label: "El sistema" },
  { href: "/mentorclass", label: "MentorClass" },
  { href: "/emprende-diario", label: "Emprende Diario" },
  { href: "/organizaciones", label: "Organizaciones" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-2xl font-black tracking-tight text-gray-dark no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="text-red-uhub">u</span>Hüb
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-gray-dark no-underline hover:text-red-uhub"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/test" variant="primary" className="hidden sm:inline-flex">
            Descubre tu perfil
          </Button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-dark md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border-subtle bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 font-body text-base font-medium text-gray-dark no-underline hover:bg-gray-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Button href="/test" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Descubre tu perfil
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
