import { pageMetadata } from "../institutional";
import { Arrow, SiteFooter, SiteHeader, whatsappOrganizations } from "../components";

export const metadata = pageMetadata("Talleres y acompañamiento para organizaciones", "Talleres uHub × Biné, innovación empresarial para cámaras, autosostenibilidad de OSC y seguimiento para fundaciones.", "/organizaciones");

const workshops = [
  ["Magia en el Servicio", "Actitud, procesos y detalles en la experiencia del cliente."],
  ["Innovación Empresarial Ágil", "Herramientas para probar ideas y aprender con menos riesgo."],
  ["Antifragilidad Empresarial", "Preparación y respuesta ante cambios e incertidumbre."],
  ["Lean y Guerrilla Marketing", "Acciones de marketing con creatividad y recursos acotados."],
  ["Intraemprendimiento Social e Innovador", "Iniciativas con propósito desde dentro de la organización."],
  ["Trabajo en Equipo de Alto Rendimiento", "Roles, acuerdos y comunicación para trabajar mejor."],
  ["Negociación Efectiva", "Preparación y herramientas para las negociaciones cotidianas."],
  ["Formación de Formadores", "Recursos para quienes capacitan y facilitan el aprendizaje."],
];

export default function OrganizationsPage() {
  return <>
    <SiteHeader />
    <main id="contenido" className="service-page">
      <section className="inner-hero organizations-hero">
        <div>
          <p className="eyebrow">uHüb para empresas e instituciones</p>
          <h1>Las próximas mejoras pueden empezar en tu equipo.</h1>
          <p>Ayudamos a las personas a detectar oportunidades, proponer soluciones y llevarlas a la práctica. Con talleres, capacitación y acompañamiento sobre los retos reales de tu organización.</p>
          <div className="route-actions">
            <a className="button button-primary" href={whatsappOrganizations} target="_blank" rel="noreferrer">Cuéntanos qué necesita tu equipo <Arrow external /></a>
            <a className="text-link" href="#talleres">Explorar talleres →</a>
          </div>
        </div>
        <figure className="service-hero-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/acompanamiento-uhub.webp" alt="Manuel Acosta conversa con participantes durante una plática empresarial." width="1280" height="960" fetchPriority="high" />
          <figcaption>Plática empresarial de uHüb × Biné. Aprendizaje en conversación con el equipo.</figcaption>
        </figure>
      </section>
      <section className="inner-section" id="opciones">
        <div className="section-kicker"><p className="eyebrow">Qué podemos trabajar contigo</p><h2>Del tema que importa a la acción que sigue.</h2></div>
        <p className="service-intro">Empezamos por entender a tu gente y el cambio que buscas. Elegimos juntos el formato, la duración y los entregables; el seguimiento se incluye cuando forma parte del proceso acordado.</p>
        <div className="section-kicker" id="colaboraciones"><p className="eyebrow">Acompañamiento según tu institución</p><h2>Una propuesta para el reto que compartes.</h2></div>
        <div className="organization-destinations">
          <a href="/organizaciones/camaras" id="nodos"><strong>Cámaras empresariales</strong><span>Un programa para que tus socios prueben mejoras en su negocio con empresarios mentores y un plan de continuidad.</span><span aria-hidden="true">→</span></a>
          <a href="/organizaciones/osc" id="autosostenibilidad"><strong>A.C. y organizaciones sociales</strong><span>Diseñar y validar una iniciativa que mejore su impacto o genere ingresos alineados con su misión.</span><span aria-hidden="true">→</span></a>
          <a href="/fundaciones"><strong>Fundaciones y convocatorias</strong><span>Acompañar a las personas que apoyas y reunir evidencia de sus acciones, aprendizajes y necesidades.</span><span aria-hidden="true">→</span></a>
          <a href="/universidades"><strong>Universidades</strong><span>Formar docentes que acompañen capacidades emprendedoras para la vida y conecten a quienes quieren seguir.</span><span aria-hidden="true">→</span></a>
        </div>
        <div className="service-offer-list">
          <article className="service-offer" id="talleres">
            <span>01</span><div><h3>Talleres y capacitación</h3><small>uHüb × Biné Educación</small></div>
            <div>
              <p>Para fortalecer habilidades concretas: liderazgo, ventas, servicio, comunicación, trabajo en equipo e innovación.</p>
              <p><strong>Pláticas de una hora</strong> para abrir un tema. <strong>Talleres de 3 a 4 horas</strong> para equipos de hasta 20 personas, con ejercicios aplicados y diploma de participación.</p>
              <details className="service-workshops"><summary>Ver los ocho talleres de un día</summary><ul>{workshops.map(([title, text]) => <li key={title}><strong>{title}.</strong> {text}</li>)}</ul></details>
              <p><strong>Al terminar:</strong> los participantes habrán practicado herramientas del tema elegido sobre situaciones de su trabajo. Definimos la evidencia de aprendizaje al acordar el taller.</p><p>El catálogo también incluye cursos con DC-3 y opciones en colaboración con ICATECH. La duración y el tipo de constancia dependen del curso elegido.</p>
              <div className="route-actions"><a className="text-link" href="/downloads/catalogo-capacitacion-uhub-bine.pdf" target="_blank" rel="noreferrer">Ver catálogo completo · PDF <Arrow /></a><a className="text-link" href="https://wa.me/526141989236?text=Hola%2C%20quiero%20cotizar%20una%20capacitaci%C3%B3n%20uHub%20y%20Bin%C3%A9" target="_blank" rel="noreferrer">Cotizar con Manuel <Arrow external /></a></div>
            </div>
          </article>
          <article className="service-offer" id="intraemprendimiento">
            <span>02</span><div><h3>Intraemprendimiento</h3><small>Iniciativa e innovación desde dentro</small></div>
            <div><p>Para equipos que quieren convertir una oportunidad de mejora en una iniciativa concreta: un servicio, un proceso o una nueva forma de resolver un problema.</p><p>Trabajamos la identificación del reto, una primera propuesta, su prueba y las decisiones que siguen. El alcance se adapta al equipo y al proyecto.</p><p><strong>Resultado que buscamos:</strong> que el equipo pueda presentar una iniciativa concreta, explicar qué aprendió al probarla y acordar responsables e indicadores para continuar.</p></div>
          </article>

        </div>
        <div className="service-evidence">
          <div><span className="service-evidence-label">Experiencia de acompañamiento</span><h3>Autosostenibilidad con organizaciones.</h3><p>Con FICOSEC hemos acompañado a organizaciones en el diseño y validación de iniciativas de generación de ingresos. Nuestra experiencia también incluye trabajo con organizaciones en Torreón.</p><p>Podemos conversar sobre el proceso y los aprendizajes relevantes para tu caso.</p></div>
          <div><span className="service-evidence-label">Quién participa</span><h3>uHüb y Biné Educación.</h3><p>uHüb aporta la experiencia de acompañamiento emprendedor. En la línea de capacitación, Biné suma instructores y herramientas para desarrollar habilidades en los equipos.</p><a className="text-link" href="/nosotros">Conoce nuestra trayectoria <Arrow /></a></div>
        </div>
      </section>
      <section className="inner-section" id="casos">
        <div className="section-kicker">
          <p className="eyebrow">Experiencia documentada · Programa con FICOSEC</p>
          <h2>Del proyecto a una prueba real.</h2>
          <p>Estos avances constan en el reporte de intraemprendimiento de uHüb. Cada organización siguió un proceso distinto.</p>
        </div>
        <div className="institutional-cases">
          <article>
            <span>01 / Mujeres Resilientes</span>
            <h3>Una capacitación encontró un nuevo mercado.</h3>
            <p>El equipo entrevistó a posibles clientes y enfocó su oferta de talleres en empresas. El reporte documenta ventas de capacitación sobre la NOM-035 y un proceso de contacto y seguimiento comercial.</p>
          </article>
          <article>
            <span>02 / Casa Amiga Esther</span>
            <h3>Un servicio incorporó un proceso de cobro.</h3>
            <p>La organización revisó a quién podía ofrecer servicios con cuota de recuperación. El reporte registra la implementación de un sistema de cobro y una ampliación del equipo a partir de esos ingresos.</p>
          </article>
          <article>
            <span>03 / Tenda de Cristo</span>
            <h3>La idea de una cocina colectiva llegó a operar.</h3>
            <p>Desarrollaron y abrieron Mangiarte. El proceso incluyó pruebas, adecuación del espacio, promoción y ventas de alimentos, también mediante plataformas de entrega.</p>
          </article>
        </div>
        <p className="service-source-note">Fuente: Reporte de intraemprendimiento FICOSEC–uHüb, casos de Mujeres Resilientes, Casa Amiga Esther y Tenda de Cristo. Son resultados de esa experiencia; cada nueva colaboración acuerda su propio alcance.</p>
      </section>
      <section className="inner-closing"><div><p className="eyebrow">Una conversación para empezar</p><h2>¿Qué te gustaría que tu equipo pudiera hacer mejor?</h2></div><a className="button button-primary" href={whatsappOrganizations} target="_blank" rel="noreferrer">Hablar con uHüb <Arrow external /></a></section>
    </main>
    <SiteFooter />
  </>;
}
