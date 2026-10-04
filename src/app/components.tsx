import Link from "next/link";
import { SiteNavigation } from "./navigation";

export const whatsappGeneral =
  "https://wa.me/526142346499?text=Hola%2C%20llegu%C3%A9%20desde%20uhub.mx%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n";
export const whatsappMembership =
  "https://wa.me/526142346499?text=Hola%2C%20quiero%20solicitar%20mi%20ingreso%20a%20Ritmo%20de%20Emprende%20Diario%20y%20conocer%20las%20condiciones";
export const whatsappOrganizations =
  "https://wa.me/526142346499?text=Hola%2C%20represento%20una%20organizaci%C3%B3n%20y%20quiero%20conocer%20uHub";
export const lunesSubscription =
  "https://uhub.kit.com/b3786d63e8";

export function Arrow({ external = false }: { external?: boolean }) {
  return <span aria-hidden="true">{external ? "↗" : "→"}</span>;
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
            Desde 2015.
          </p>
        </div>
        <div className="uhub-footer-column">
          <span>Encuentra tu camino</span>
          <Link href="/emprende-diario">Emprende Diario</Link>
          <Link href="/organizaciones">Empresas y cámaras</Link>
          <Link href="/organizaciones/camaras">Cámaras empresariales</Link>
          <Link href="/organizaciones/osc">A.C. y OSC</Link>
          <Link href="/fundaciones">Fundaciones</Link>
          <Link href="/organizaciones#talleres">Talleres y capacitación</Link>
          <Link href="/universidades">Universidades</Link>
          <Link href="/como-lo-hacemos">Cómo lo hacemos</Link>
          <Link href="/programa">Programa uHüb A.C.</Link>
        </div>
        <div className="uhub-footer-column">
          <span>Conecta con uHüb</span>
          <Link href="/mentorclass">MentorClass</Link>
          <Link href="/test">Test del cuadrante</Link>
          <Link href="/mentores">Red uHüb</Link>
          <Link href="/nosotros">Nosotros</Link>
          <a href={lunesSubscription}>Lunes 1-1-1</a>
        </div>
        <div className="uhub-footer-column">
          <span>Hablemos</span>
          <a href="mailto:rodrigo@uhub.mx">rodrigo@uhub.mx</a>
          <a href={whatsappGeneral} target="_blank" rel="noreferrer">
            WhatsApp <Arrow external />
          </a>
          <a href="mailto:rodrigo@uhub.mx?subject=Consulta%20de%20avisos%20legales">
            Consultar avisos legales
          </a>
        </div>
      </div>
      <div className="uhub-footer-bottom">
        <span>© {new Date().getFullYear()} uHüb</span>
        <span>Emprender es humano.</span>
        <a href="#cabecera">Volver arriba →</a>
      </div>
    </footer>
  );
}
