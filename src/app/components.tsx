import Link from "next/link";
import { SiteNavigation } from "./navigation";
import { contacto, membresia } from "@/data/uhub";

export const whatsappGeneral = contacto.general;
export const whatsappMembership = membresia.solicitudUrl;
export const whatsappOrganizations =
  "https://wa.me/526142346499?text=Hola%2C%20represento%20una%20organizaci%C3%B3n%20y%20quiero%20conocer%20uHub";
export const lunesSubscription =
  "https://uhub.kit.com/b3786d63e8";

export function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true" data-external={external || undefined}>→</span>;
}

export function Logo({ compact = false }: { compact?: boolean }) {
  // Serve the original file directly; preserve its proportions and transparency.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`brand-logo${compact ? " brand-logo-compact" : ""}`}
      src="/uhub-logo-original.png"
      alt="uHüb, Centro de Desarrollo Emprendedor"
      width="2048"
      height="908"
    />
  );
}

export function SiteHeader() {
  return (
    <>
      <a className="uhub-skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="uhub-header" id="cabecera">
        <Link href="/" className="logo-link" aria-label="uHüb, inicio">
          <Logo compact />
        </Link>
        <SiteNavigation />
        <a className="uhub-header-cta" href={whatsappGeneral} target="_blank" rel="noreferrer">Hablemos <Arrow external /></a>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="uhub-footer">
      <div className="uhub-footer-top">
        <div className="uhub-footer-brand">
          <Link href="/" aria-label="uHüb, inicio">
            <Logo />
          </Link>
          <p>
            Centro de Desarrollo Emprendedor.
            <br />
            Mentores, práctica y comunidad.
          </p>
        </div>
        <div className="uhub-footer-column">
          <span>Encuentra tu camino</span>
          <Link href="/emprende-diario">Emprende Diario</Link>
          <Link href="/organizaciones">Empresas y cámaras</Link>
          <Link href="/organizaciones/osc">A.C. y fundaciones</Link>
          <Link href="/universidades">Universidades</Link>
          <Link href="/como-lo-hacemos">Cómo lo hacemos</Link>
          <Link href="/nosotros">Nosotros</Link>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="uhub-footer-column" id="mentores">
          <span>Comparte tu experiencia</span>
          <Link href="/mentores">¿Quieres acompañar a otros como mentor? <Arrow /></Link>
          <span className="footer-ac-label">Programas de la asociación civil</span>
          <a href="https://uhub.org.mx" target="_blank" rel="noreferrer">uHüb A.C. <Arrow external /></a>
          <p className="footer-ac-note">Programas financiados por fundaciones en Chihuahua y Ciudad Juárez.</p>
        </div>
        <div className="uhub-footer-column" id="contacto">
          <span>Hablemos</span>
          <a href="mailto:rodrigo@uhub.mx">rodrigo@uhub.mx</a>
          <a href={whatsappGeneral} target="_blank" rel="noreferrer">
            WhatsApp · (614) 234-6499 <Arrow external />
          </a>
          <a href="mailto:rodrigo@uhub.mx?subject=Consulta%20de%20avisos%20legales">
            Consultar avisos legales
          </a>
        </div>
      </div>
      <div className="uhub-footer-bottom">
        <span>© {new Date().getFullYear()} uHüb</span>
        <span>Primero la persona. Luego el negocio.</span>
        <a href="#cabecera">Volver arriba →</a>
      </div>
    </footer>
  );
}
