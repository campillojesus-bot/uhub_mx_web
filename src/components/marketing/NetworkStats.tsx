import { cifras, redMentores } from "@/data/uhub";
import { CountUp } from "@/components/CountUp";

export function NetworkStats({ showSessions = false }: { showSessions?: boolean }) {
  return <div className="network-stats">
    <p className="network-total"><strong><CountUp value={redMentores.total} /></strong><span>mentores activos en {redMentores.entidad}</span></p>
    <details className="network-detail">
      <summary>Conoce cómo se integra la red <span aria-hidden="true">▾</span></summary>
      <dl><div><dt>Mentores base</dt><dd>{redMentores.base}</dd></div><div><dt>Mentores especializados</dt><dd>{redMentores.especializados}</dd></div></dl>
      <p>La incorporación a la membresía y a cada programa se acuerda según experiencia, disponibilidad y necesidades de acompañamiento.</p>
    </details>
    {showSessions && <p className="network-source"><strong><CountUp value={cifras.mentorias.valor} /> sesiones de mentoría uno a uno</strong><br />{cifras.entidad} · {cifras.territorio.ciudad} {cifras.territorio.complemento} · 2023–2025.</p>}
    <p className="network-source">{redMentores.fuente} · Corte: {redMentores.corte}.</p>
  </div>;
}
