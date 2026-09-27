"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const mainLinks = [
  ["Empresas y cámaras", "/organizaciones"],
  ["A.C. y fundaciones", "/organizaciones/osc"],
  ["Universidades", "/universidades"],
  ["Cómo lo hacemos", "/como-lo-hacemos"],
  ["Nosotros", "/nosotros"],
];
const personalLinks = [
  ["Emprendedores", "/emprende-diario"],
  ["MentorClass", "/mentorclass"],
  ["Test del cuadrante", "/test"],
];

export function SiteNavigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const dismiss = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node))
        setMobileOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuRef.current
          ?.querySelectorAll("details[open]")
          .forEach((el) => el.removeAttribute("open"));
        if (mobileOpen) buttonRef.current?.focus();
      }
    };
    document.addEventListener("click", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("click", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [mobileOpen]);
  return (
    <div className="uhub-navigation" ref={menuRef}>
      <nav className="uhub-desktop-nav" aria-label="Navegación principal">
        <details
          className="uhub-nav-dropdown"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node))
              event.currentTarget.open = false;
          }}
        >
          <summary>
            Emprendedores <span aria-hidden="true">⌄</span>
          </summary>
          <div>
            {personalLinks.map(([name, href]) => (
              <Link
                href={href}
                key={href}
                onClick={(event) =>
                  event.currentTarget
                    .closest("details")
                    ?.removeAttribute("open")
                }
              >
                {name}
              </Link>
            ))}
          </div>
        </details>
        {mainLinks.map(([name, href]) => (
          <Link href={href} key={href}>
            {name}
          </Link>
        ))}
      </nav>
      <Link className="uhub-header-cta" href="/#caminos">
        Encuentra tu camino <span aria-hidden="true">↗</span>
      </Link>
      <button
        type="button"
        ref={buttonRef}
        className="uhub-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
      >
        {mobileOpen ? "Cerrar" : "Menú"}
        <span aria-hidden="true">{mobileOpen ? "×" : "+"}</span>
      </button>
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          className="uhub-mobile-nav"
          aria-label="Navegación móvil"
          onClick={(event) => {
            if ((event.target as Element).closest("a")) setMobileOpen(false);
          }}
        >
          <span>Emprendedores</span>
          {personalLinks.map(([name, href]) => (
            <Link href={href} key={href}>
              {name}
            </Link>
          ))}
          <hr />
          {mainLinks.map(([name, href]) => (
            <Link href={href} key={href}>
              {name}
            </Link>
          ))}
          <Link className="uhub-mobile-path" href="/#caminos">
            Encuentra tu camino <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      )}
    </div>
  );
}
