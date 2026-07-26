import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

const contactWhatsapp = whatsappLink(
  "Hola, llegué desde uhub.mx y quiero más información"
);

const siteLinks = [
  { href: "/test", label: "Test del cuadrante" },
  { href: "/mentorclass", label: "MentorClass" },
  { href: "/emprende-diario", label: "Emprende Diario" },
  { href: "/organizaciones", label: "Organizaciones" },
  { href: "/nosotros", label: "Nosotros" },
];

export function Footer() {
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
            <a
              href={contactWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/85 no-underline hover:text-white"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
          <p className="mt-1 text-sm text-white/70">
            Correo: <span className="italic text-white/50">[PENDIENTE: correo de contacto]</span>
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.1em] text-white/50">
            Emprender es humano
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Estructura, hábitos y honestidad para sostener lo que empiezas —
            directo a tu correo.
          </p>
          <Link
            href="/#newsletter"
            className="mt-4 inline-flex font-display text-sm font-bold text-white no-underline hover:underline"
          >
            Suscribirme ↓
          </Link>
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
