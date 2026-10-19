import { pageMetadata } from "../institutional";
import {
  Arrow,
  SiteFooter,
  SiteHeader,
  whatsappMembership,
  lunesSubscription,
} from "../components";

export const metadata = pageMetadata("Emprende Diario · Acompañamiento para seguir", "uHub: Una membresía para convertir prioridades en acciones y sostenerlas con mentores y comunidad. Conoce Ritmo, solicita ingreso o empieza con Lunes 1-1-1.", "/emprende-diario");

export default function EmprendeDiarioPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="service-page membership-page">
      <section className="inner-hero membership-hero" id="inicio">
        <div>
          <p className="eyebrow">Emprende Diario · Una membresía de uHüb</p>
          <h1>Emprender no es un evento. Es un hábito que se sostiene.</h1>
          <p>Planeación, práctica y seguimiento para iniciar, retomar o sostener un proyecto. Por tu cuenta, junto con otras personas o desde tu trabajo: avanzas con el tiempo y los recursos que tienes.</p>
          <div className="route-actions"><a className="button button-primary" href={whatsappMembership} target="_blank" rel="noreferrer">Solicitar ingreso a Ritmo <Arrow external /></a></div>
          <p className="membership-entry-note">Ritmo · $399 MXN/mes. La comunidad actual está formada por egresados de uHüb A.C. Si eres nuevo, conversemos para confirmar tu opción de ingreso, la ruta y las condiciones antes de inscribirte.</p>
        </div>
        <aside className="inner-quote">
          <span>No vendemos contenido</span>
          <strong>Diseñamos una forma de volver.</strong>
        </aside>
      </section>

      <section className="inner-section"><p className="eyebrow">Tu momento puede ser distinto</p><h2>¿Qué necesitas sostener hoy?</h2><ul className="membership-situations"><li><strong>Estoy empezando.</strong><p>Quiero convertir una idea en una primera prueba y saber qué paso dar.</p></li><li><strong>Ya empecé y me atoré.</strong><p>Necesito revisar mis decisiones y organizar acciones compatibles con mi trabajo y responsabilidades.</p></li><li><strong>Quiero volver a intentarlo.</strong><p>Busco aprender de lo anterior, ajustar el rumbo y recuperar una práctica que pueda sostener.</p></li></ul></section>
      <section className="inner-section">
        <div className="section-kicker">
          <p className="eyebrow">Lo que sostiene el ritmo</p>
          <h2>Un modelo de acompañamiento para tu semana.</h2>
          <p>Aprendes, eliges una acción y revisas tu avance con otras personas.</p>
        </div>
        <div className="feature-grid">
          <article>
            <span>01</span>
            <h3>Planeación semanal guiada</h3>
            <p>
              Convierte tus prioridades en acciones posibles para la semana que
              sí tienes.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Retos y sesiones grupales</h3>
            <p>
              Una práctica común para avanzar, comparar aprendizajes y no
              aislarte.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Mentoría y comunidad</h3>
            <p>
              Personas que preguntan, escuchan y te ayudan a volver cuando te
              sales.
            </p>
          </article>
        </div>
      </section>

      <section className="inner-section membership-voices" id="experiencias">
        <div className="section-kicker">
          <p className="eyebrow">Voces de Emprende Diario</p>
          <h2>El acompañamiento continúa.</h2>
          <p>Omar y Mary participaron primero en programas de uHüb A.C. Hoy cuentan qué encuentran en la membresía.</p>
        </div>
        <figure className="membership-voice">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/omar-gomez.webp" alt="Omar Gómez, miembro de Emprende Diario." width="750" height="1000" loading="lazy" />
          <div>
            <span className="eyebrow">Seguimiento y disciplina</span>
            <blockquote>“Las reuniones grupales mensuales, además de los constantes seguimientos semanales, contribuyen a mantener una disciplina personal que se ve reflejada en los avances que vamos adquiriendo en nuestras iniciativas y en el transcurrir del tiempo.”</blockquote>
            <figcaption><strong>Omar Gómez</strong><span>Miembro de Emprende Diario · Egresado de uHüb A.C.</span></figcaption>
          </div>
        </figure>
        <figure className="membership-voice membership-voice-reverse">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mary-torres.webp" alt="Mary Torres, fundadora de V&amp;T Distribuidores y miembro de Emprende Diario." width="1600" height="1200" loading="lazy" />
          <div>
            <span className="eyebrow">Retos, comunidad y decisiones</span>
            <blockquote>“Cuando empecé a involucrarme más en la membresía y ser constante, volví a sentirme acompañada y orientada. Escuchar experiencias de otros emprendedores y hacer los retos me ayudó a tener más visión y tomar mejores decisiones para mi proyecto.”</blockquote>
            <figcaption><strong>Mary Torres · V&amp;T Distribuidores</strong><span>Miembro de Emprende Diario · Egresada de uHüb A.C.</span></figcaption>
          </div>
        </figure>
      </section>

      <section className="membership-options">
        <div className="section-kicker">
          <p className="eyebrow">Opciones de acompañamiento</p>
          <h2>Ritmo hoy. Momentum por invitación.</h2>
        </div>
        <div className="option-grid">
          <article>
            <span>Ritmo</span>
            <h3>
              $399 <small>MXN/mes</small>
            </h3>
            <p>
              La modalidad grupal de Emprende Diario. Trabaja tus prioridades
              con planeación, sesiones y comunidad. Confirmamos contigo el ingreso antes de inscribirte.
            </p>
            <ul>
              <li>Ruta y planeación semanal</li>
              <li>Retos mensuales</li>
              <li>Sesiones grupales de acompañamiento</li>
              <li>Comunidad activa</li>
            </ul>
            <a
              className="button button-secondary"
              href={whatsappMembership}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar ingreso a Ritmo <Arrow external />
            </a>
          </article>
          <article className="featured-option">
            <span>Momentum · Por invitación</span>
            <h3>Acompañamiento 1:1</h3>
            <p>
              Para quien necesita una mirada más cercana sobre su proceso y
              decisiones.
            </p>
            <ul>
              <li>Todo lo incluido en Ritmo</li>
              <li>Seguimiento personal</li>
              <li>Condiciones de ingreso por confirmar</li>
            </ul>
            <p className="membership-entry-note">La modalidad personalizada está en preparación. Todavía no hay contratación ni calendario confirmado.</p>
          </article>
        </div>
      </section>

      <section className="inner-closing"><div><p className="eyebrow">Si primero quieres conocernos</p><h2>Una historia, un reto y una pregunta cada lunes.</h2><p>Lunes 1-1-1 es gratuito. Empieza con una acción para tu semana.</p></div><a className="text-link" href={lunesSubscription}>Recibir Lunes 1-1-1 <Arrow external /></a></section>
      </main>
      <SiteFooter />
    </>
  );
}
