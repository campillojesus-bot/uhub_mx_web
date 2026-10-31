import { pageMetadata } from "../institutional";
import { Suspense } from "react";
import { membresia } from "@/data/uhub";
import { MembershipEntry } from "./membership-entry";
import "../next-steps.css";
import {
  Arrow,
  SiteFooter,
  SiteHeader,
  lunesSubscription,
} from "../components";

export const metadata = pageMetadata("Emprende Diario · Acompañamiento para seguir", "uHub: Una membresía para convertir prioridades en acciones y sostenerlas con mentores y comunidad. Conoce el acompañamiento, solicita ingreso o empieza con Lunes 1-1-1.", "/emprende-diario");

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
          <div className="route-actions"><a className="button button-primary" href="#ingreso">Solicitar ingreso <Arrow /></a></div>
          <p className="membership-entry-note">${membresia.precio} {membresia.moneda}/{membresia.periodo} · {membresia.condiciones}. {membresia.elegibilidad}</p>
        </div>
        <aside className="inner-quote">
          <span>Práctica y acompañamiento</span>
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

      <section className="inner-section" aria-labelledby="brujula-invitation">
        <p className="eyebrow">Si quieres ubicar un punto de partida</p>
        <h2 id="brujula-invitation">¿Qué necesitas fortalecer ahora?</h2>
        <p>La Brújula Emprendedora te propone tres acciones para tu semana a partir de tus respuestas. Es una orientación para explorar tu siguiente paso; no determina tu perfil ni tu plan.</p>
        <a className="text-link" href="/brujula">Explorar mi Brújula Emprendedora <Arrow /></a>
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

      <section className="membership-options membership-month" aria-labelledby="month-title">
        <div className="membership-month-intro">
          <p className="eyebrow">Emprende Diario · Ingreso por solicitud</p>
          <h2 id="month-title">Un mes para aprender, actuar y revisar.</h2>
          <p>{membresia.acceso}</p>
          <p className="membership-price"><strong>${membresia.precio}</strong> {membresia.moneda}/{membresia.periodo}</p>
          <p>{membresia.condiciones}</p>
          <a className="button button-primary" href="#ingreso">Solicitar ingreso <Arrow /></a>
          <p className="membership-entry-note">{membresia.elegibilidad}</p>
        </div>
        <ol className="membership-month-weeks" aria-label="El acompañamiento durante el mes">
          {membresia.semanas.map((semana, index) => <li key={semana}><span>Semana {index + 1}</span><h3>{semana}</h3></li>)}
        </ol>
      </section>

      <Suspense fallback={<section className="inner-section" id="ingreso"><h2>Preparando tus opciones de ingreso…</h2></section>}><MembershipEntry /></Suspense>
      <section className="inner-closing"><div><p className="eyebrow">Si primero quieres conocernos</p><h2>Una historia, un reto y una pregunta cada lunes.</h2><p>Lunes 1-1-1 es gratuito. Empieza con una acción para tu semana.</p></div><a className="text-link" href={lunesSubscription}>Recibir Lunes 1-1-1 <Arrow external /></a></section>
      </main>
      <SiteFooter />
    </>
  );
}
