import { pageMetadata } from "../institutional";
import { Arrow, SiteFooter, SiteHeader } from "../components";

export const metadata = pageMetadata("Red uHüb · Mentores y comunidad", "Comparte tu experiencia como mentor base o especializado. Conoce la Red uHub y las formas de acompañar a otros emprendedores.", "/mentores");

export default function MentoresPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="service-page">
        <section className="inner-hero" id="inicio">
          <div>
            <p className="eyebrow">Red uHüb</p>
            <h1>Quien fue acompañado, hoy puede acompañar.</h1>
            <p>
              Estamos preparando un primer grupo piloto de la Red uHüb.
              Buscamos personas con experiencia emprendedora, egresados y
              especialistas que quieran acompañar a otras personas y compartir
              lo que saben.
            </p>
            <a
              className="button button-primary"
              href="https://wa.me/526142346499?text=Hola%2C%20me%20interesa%20colaborar%20como%20mentor%20en%20la%20Red%20uHub"
              target="_blank"
              rel="noreferrer"
            >
              Quiero acompañar <Arrow external />
            </a>
          </div>
          <aside className="inner-quote"><span>La red en construcción</span><strong>Mentores base para la continuidad. Especialistas para el reto que tienes enfrente.</strong></aside>
        </section>
        <section className="inner-section">
          <div className="route-overview">
            <p className="eyebrow">Formas de participar</p>
            <h2>
              Tu experiencia puede ayudar a alguien a dar su siguiente paso.
            </h2>
            <p>
              <strong>Mentor base.</strong> Acompaña la continuidad del proceso,
              escucha el contexto de la persona, ayuda a acordar acciones y revisa avances. Mantiene la bitácora del proceso e identifica cuándo conviene sumar a un especialista.
            </p>
            <p>
              <strong>Mentor especializado.</strong> Aporta experiencia en un
              tema concreto —por ejemplo, finanzas, ventas o tecnología—. Trabaja una pregunta o un reto definido y comparte recomendaciones para que la persona las pruebe y dé seguimiento con su mentor base.
            </p>
            <p>
              Ya contamos con un primer módulo de formación para ser mentor.
              El segundo, dedicado a aplicar las etapas y el seguimiento del
              modelo uHüb, está en preparación. La incorporación comienza con
              un grupo pequeño; dedicación, responsabilidades y condiciones se
              acuerdan según el rol y el programa.
            </p>
            <p>El mentor ayuda a preguntar, decidir y aprender de la práctica; las decisiones del proyecto siguen siendo del emprendedor. El apoyo entre egresados también forma parte de la comunidad. Es distinto al compromiso de un mentor asignado: cada forma de participar tiene su lugar.</p>
            <div className="route-actions">
              <a
                className="text-link"
                href="mailto:rodrigo@uhub.mx?subject=Quiero%20ser%20parte%20de%20la%20Red%20uHub"
              >
                Cuéntanos tu experiencia <Arrow external />
              </a>
              <a
                className="text-link"
                href="https://www.uhub.org.mx/mentores"
                target="_blank"
                rel="noreferrer"
              >
                Mentores del programa A.C. <Arrow external />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
