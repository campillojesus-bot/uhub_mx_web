import { redMentores } from "@/data/uhub";
import { CountUp } from "@/components/CountUp";

export function NetworkStats() {
  return <div className="network-stats">
    <p className="network-total"><strong><CountUp value={redMentores.total} /></strong><span>mentores activos en {redMentores.entidad}</span></p>
    <details className="network-detail">
      <summary>Conoce cómo se integra la red <span aria-hidden="true">▾</span></summary>
      <dl><div><dt>Mentores base</dt><dd>{redMentores.base}</dd></div><div><dt>Mentores especializados</dt><dd>{redMentores.especializados}</dd></div></dl>
      <p>La incorporación a la membresía y a cada programa se acuerda según experiencia, disponibilidad y necesidades de acompañamiento.</p>
    </details>
    <p className="network-source">{redMentores.fuente} · Corte: {redMentores.corte}.</p>
  </div>;
}
