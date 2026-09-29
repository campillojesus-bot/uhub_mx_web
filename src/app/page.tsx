import { Arrow, SiteFooter, SiteHeader } from "./components";
import { CycleWheel, ChangeStories } from "./home-interactions";
import { ModelExplorer } from "./model-explorer";
import type { Metadata } from "next";
import { EditorialPhoto } from "./editorial-photos";
import { NewsletterForm } from "./newsletter-form";

const doors = [
  {
    name: "Soy emprendedor",
    text: "Quiero iniciar, retomar o sostener un proyecto: por mi cuenta, junto con otros o desde mi trabajo.",
    href: "/emprende-diario",
    destination: "Emprende Diario",
  },
  {
    name: "Soy empresa o cámara",
    text: "Quiero desarrollar a mi equipo o a los negocios que represento.",
    href: "/organizaciones",
    destination: "Talleres y organizaciones",
  },
  {
    name: "Soy universidad",
    text: "Quiero desarrollar habilidades emprendedoras para la vida y el trabajo.",
    href: "/universidades",
    destination: "Universidades",
  },
  {
    name: "Soy A.C. o fundación",
    text: "Busco fortalecer mi organización o acompañar mejor a las personas y proyectos que apoyo.",
    href: "/organizaciones/osc",
    destination: "Organizaciones sociales",
  },
];

export const metadata: Metadata = {
  title: { absolute: "uHüb · Nadie emprende solo" },
  description: "uHub es un modelo de desarrollo emprendedor con la persona al centro: mentores, comunidad, hábitos y un método para iniciar, rehacer o sostener lo que emprendes.",
  alternates: { canonical: "/" },
  openGraph: { title: "uHüb · Nadie emprende solo", description: "uHub te ayuda a construir tu propio ecosistema: mentores, comunidad, hábitos y un método.", url: "https://uhub.mx", images: [{ url: "/og.png", width: 1200, height: 630, alt: "uHüb · Centro de Desarrollo Emprendedor" }] },
};

export default function Home() {
  return <>
    <SiteHeader />
    <main className="root-home root-v11" id="contenido">
        <section
          className="root-hero root-container"
          id="inicio"
          aria-labelledby="home-title"
        >
          <div className="root-hero-copy">
            <p className="root-eyebrow">
              uHüb · Centro de Desarrollo Emprendedor
            </p>
            <h1 id="home-title">
              Nadie emprende solo.
            </h1>
            <p className="root-hero-lead">
              uHüb te ayuda a construir tu propio ecosistema —mentores, comunidad,
              hábitos y un método— para iniciar, rehacer o sostener lo que
              emprendes, con negocio o sin él.
            </p>
            <div className="root-hero-actions"><a className="root-button" href="#modelo">Conoce el modelo <span aria-hidden="true">→</span></a><a className="root-hero-secondary" href="#caminos">Encuentra tu camino →</a></div>
          </div>
          <figure className="root-hero-visual">
            <div className="root-photo-frame">
              {/* Original portrait supplied by Rodrigo; Sarahi with her brushes and artwork. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sarahi-loya.jpg"
                width="1066"
                height="1600"
                alt="Sarahi Loya con sus pinceles y una de sus pinturas."
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span>Sarahi Loya · Artista y emprendedora</span>
              <strong>Lo que construyes también te construye.</strong>
            </figcaption>
            <span className="root-photo-index" aria-hidden="true">
              uHüb / Desde 2015
            </span>
          </figure>
        </section>

        <div className="root-credibility" aria-label="Trayectoria de uHüb">
          <span>
            <strong>Desde 2015</strong>
          </span>
          <i aria-hidden="true">·</i>
          <span>
            <strong>+2,000</strong> activados en comunidad
          </span>
          <i aria-hidden="true">·</i>
          <span>
            <strong>+550</strong> acompañados
          </span>
        </div>

        <section
          className="root-why root-section"
          id="por-que"
          aria-labelledby="why-title"
        >
          <div className="root-container root-why-layout">
            <div>
              <p className="root-eyebrow">
                <span>02 /</span> Por qué existe uHüb
              </p>
              <h2 id="why-title">
                El talento está repartido. <br />{" "}
                <em>El ecosistema, no.</em>
              </h2>
            </div>
            <div className="root-prose">
              <p>Hay quien crece rodeado de personas que emprenden: una familia que se arriesga, amigos con quienes compartir ideas, alguien a quien preguntarle cuando algo sale mal. Otras personas tienen las mismas ganas, pero menos ejemplos, contactos o apoyo para empezar.</p>
              <p>Para empezar y sostener un proyecto también necesitas práctica, apoyo y un entorno que te ayude a avanzar.</p>
              <p>Las universidades, empresas y organizaciones forman parte del ecosistema emprendedor. Pero cada persona también necesita construir el suyo: mentores con quienes revisar decisiones, una comunidad donde compartir lo que está viviendo y hábitos para convertir sus intenciones en acciones.</p>
              <p>Ahí trabaja uHüb. Te acompañamos a convertir lo que quieres hacer en una acción posible, probarla y revisar lo que pasó. Si algo se atora, buscamos qué cambiar: el tamaño del paso, la habilidad que falta, el apoyo o la forma de organizarte.</p>
              <p>uHüb nació para replicar, de forma estructurada, lo que yo tuve de forma natural. <span>— Rodrigo Campillo</span></p>
              <a className="root-text-link" href="/nosotros">Conoce nuestra historia <Arrow /></a>
            </div>
          </div>
          <div className="root-container">            <div className="root-founder-strip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/rodrigo-retrato.webp" alt="Rodrigo Campillo, fundador de uHüb." width="273" height="273" loading="lazy" />
              <div><span>Rodrigo Campillo · Fundador de uHüb</span><p>En su familia y en sus propios proyectos, Rodrigo aprendió a empezar, equivocarse y reiniciar. Esa experiencia y los retos que observó en mentoría fueron dando forma al modelo de uHüb.</p><a href="/nosotros">Lee la historia completa <Arrow /></a></div>
            </div></div>
        </section>

        <section className="root-model root-container root-section" id="modelo" aria-labelledby="model-title">
          <p className="root-eyebrow"><span>03 /</span> El Modelo uHüb</p>
          <h2 id="model-title">El centro eres tú.<br />{" "}<em>Alrededor, lo que necesitas para lograrlo.</em></h2>
          <ModelExplorer />
          <p className="model-principle">No vendemos contenido. Nos fijamos en cómo actúa la gente: qué sostiene, qué abandona y por qué.</p>
          <div className="model-human-note" id="mentores">
            <div><h3>Personas que escuchan. Y te ayudan a avanzar.</h3><p>Un mentor base te ayuda a definir acciones y revisar avances. Un especialista aporta experiencia cuando aparece un reto concreto. La comunidad comparte aprendizajes y contactos.</p></div>
            <a className="root-text-link" href="/mentores">Conoce la Red uHüb <Arrow /></a>
          </div>
        </section>
        <section className="root-cycle root-container root-section" id="como-lo-hacemos" aria-labelledby="cycle-title">
          <span id="ciclo" aria-hidden="true" />
          <p className="root-eyebrow"><span>04 /</span> Cómo lo hacemos</p>
          <h2 id="cycle-title">Un camino que recorres con práctica, acompañamiento y seguimiento.</h2>
          <CycleWheel />
          <div className="practice-loop">
            <div className="practice-loop-heading"><p className="root-eyebrow">La práctica</p><h3>Prototipos, no ideas.</h3></div>
            <ol>{["Eliges un reto real", "Acuerdas tres acciones", "Lo revisas con alguien", "Dejas evidencia"].map((step,i)=><li key={step}><span>0{i+1}</span><strong>{step}</strong><span aria-hidden="true">{i===3?"↺":"→"}</span></li>)}</ol>
          </div>
          <EditorialPhoto slot="practice" />
          <div className="practice-footer"><p>Mismo modelo, distintas formas: membresía, programas, talleres y acompañamiento dentro de instituciones.</p><a className="root-text-link" href="/como-lo-hacemos">Ver cómo lo hacemos <Arrow /></a></div>
        </section>
        <section className="root-for root-section" id="para-quien" aria-labelledby="for-title"><div className="root-container">
          <p className="root-eyebrow"><span>05 /</span> Para quién</p><h2 id="for-title">Para ti, y para quienes necesitan que avances.</h2>
          <div className="root-for-columns"><article><span>01 / La persona</span><h3>La persona</h3><p>Quien quiere iniciar, rehacer o sostener un proyecto, una iniciativa o un negocio: porque empieza, porque vuelve, porque innova dentro de su trabajo o porque emprende sin soltar lo seguro.</p></article>
          <article><span>02 / Las instituciones</span><h3>Las instituciones</h3><p>Empresas que quieren equipos que innoven. Cámaras con socios que necesitan reinventarse. Universidades que buscan desarrollar habilidades emprendedoras para la vida y el trabajo. A.C. que necesitan ingresos propios.</p></article></div>
          <EditorialPhoto slot="audience" />
          <p className="root-for-takeaway">Trabajamos con instituciones para que lo aprendido se convierta en acciones y mejoras concretas.</p>
        </div></section>
        <section className="root-result root-container root-section" id="resultado" aria-labelledby="result-title">
          <p className="root-eyebrow"><span>06 /</span> El resultado</p>
          <h2 id="result-title">Emprender no es lo que haces.<br />{" "}<em>Es en quién te conviertes.</em></h2>
          <p className="root-result-intro">Es un proceso, y cada quien va a su ritmo. Con el tiempo cambias cómo piensas, ganas habilidades, sostienes lo que empiezas y aprendes a guiar a otros. El objetivo no es emprender una vez: es seguir emprendiendo toda la vida, con negocio propio, dentro de una empresa, en tu comunidad o con tu familia.</p>
          <div className="root-stories-heading" id="historias"><h3>Historias de cambio.</h3><p className="root-story-context">Experiencias de programas de uHüb A.C. Cada historia tiene su propio punto de partida y recorrido.</p></div>
          <ChangeStories />
          <a className="root-video-story" href="https://www.youtube.com/watch?v=j0g-MtBuOWM" target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/diana-gonzalez-video.jpg" alt="Diana González durante el video de su experiencia con uHüb." width="480" height="360" loading="lazy" />
            <span><small>También en su voz</small><strong>Diana González · Yo Soy SAAM</strong><span>Conoce su experiencia en uHüb. Ver testimonio en YouTube <Arrow external /></span></span>
          </a>
        </section>
        <section
          className="root-paths root-container root-section"
          id="caminos"
          aria-labelledby="paths-title"
        >
          <div className="root-section-heading">
            <p className="root-eyebrow">
              <span>07 /</span> Encuentra tu camino
            </p>
            <div className="root-heading-row">
              <h2 id="paths-title">
                ¿Por dónde <br />{" "}
                quieres empezar?
              </h2>
              <p>Elige lo que necesitas hoy. Conoce cómo podemos ayudarte y qué opciones tienes para empezar.</p>
            </div>
          </div>
          <div className="root-doors">
            {doors.map((door, index) => (
              <a
                href={door.href}
                className={`root-door root-door-${index + 1}`}
                key={door.href}
              >
                <div className="root-door-top">
                  <span className="root-door-number">0{index + 1}</span>
                  <span className="root-door-arrow">
                    <Arrow />
                  </span>
                </div>
                <h3>{door.name}</h3>
                <p>{door.text}</p>
                <span className="root-door-destination">
                  {door.destination}
                </span>
              </a>
            ))}
          </div>
          <p className="root-paths-note">¿Buscas el programa de acompañamiento de uHüb A.C.? <a href="/programa">Conoce el programa y sus convocatorias <Arrow /></a></p>
        </section>

        <section
          className="root-stay root-section"
          id="lunes"
          aria-labelledby="stay-title"
        >
          <div className="root-container root-stay-layout">
            <div>
              <p className="root-eyebrow">
                <span>08 /</span> Sigue en contacto
              </p>
              <h2 id="stay-title">
                ¿Todavía <br />{" "}
                explorando?
              </h2>
              <p>
                Déjame tu correo y recibe una historia, un reto y una pregunta
                para dar el siguiente paso en lo que estás emprendiendo.
              </p>
              <NewsletterForm />
            </div>
            <div className="root-monday">
              <span className="root-monday-label">Lunes</span>
              <div
                className="root-monday-numbers"
                aria-label="1 historia, 1 reto, 1 pregunta"
              >
                <div>
                  <strong>1</strong>
                  <span>historia</span>
                </div>
                <i>—</i>
                <div>
                  <strong>1</strong>
                  <span>reto</span>
                </div>
                <i>—</i>
                <div>
                  <strong>1</strong>
                  <span>pregunta</span>
                </div>
              </div>
              <span className="root-monday-signature">
                De Rodrigo, para tu semana.
              </span>
            </div>
          </div>
          <div className="root-container root-last-path">
            <p>¿Ya sabes qué necesitas?</p>
            <a href="#caminos">
              Encuentra tu camino <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
    </main>
    <SiteFooter />
  </>;
}
