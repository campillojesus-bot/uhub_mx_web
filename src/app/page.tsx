import { Arrow, SiteFooter, SiteHeader } from "./components";
import { CycleWheel, ChangeStories } from "./home-interactions";
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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="root-home" id="contenido">
        <section
          className="root-hero root-container"
          id="inicio"
          aria-labelledby="home-title"
        >
          <div className="root-hero-copy">
            <p className="root-eyebrow">
              uHub · Centro de Desarrollo Emprendedor
            </p>
            <h1 id="home-title">
              Nadie emprende solo.
            </h1>
            <p className="root-hero-lead">
              uHub te ayuda a construir tu propio ecosistema —mentores, comunidad,
              hábitos y un método— para iniciar, rehacer o sostener lo que
              emprendes, con negocio o sin él.
            </p>
            <div className="root-hero-actions"><a className="root-button" href="#modelo">Conoce el modelo <span aria-hidden="true">↓</span></a><a className="root-hero-secondary" href="#caminos">Encuentra tu camino ↗</a></div>
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
              uHub / Desde 2015
            </span>
          </figure>
        </section>

        <div className="root-credibility" aria-label="Trayectoria de uHub">
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
          className="root-paths root-container root-section"
          id="caminos"
          aria-labelledby="paths-title"
        >
          <div className="root-section-heading">
            <p className="root-eyebrow">
              <span>01 /</span> Encuentra tu camino
            </p>
            <div className="root-heading-row">
              <h2 id="paths-title">
                ¿Por dónde <br />
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
          <p className="root-paths-note">¿Buscas el programa de acompañamiento de uHub A.C.? <a href="/programa">Conoce el programa y sus convocatorias <Arrow /></a></p>
        </section>

        <section
          className="root-why root-section"
          id="por-que"
          aria-labelledby="why-title"
        >
          <div className="root-container root-why-layout">
            <div>
              <p className="root-eyebrow">
                <span>02 /</span> Por qué existe uHub
              </p>
              <h2 id="why-title">
                El talento está repartido. <br />
                <em>El ecosistema, no.</em>
              </h2>
            </div>
            <div className="root-prose">
              <p>
                Decidirte a emprender, hacer una primera prueba y sostenerla
                en tu semana son retos distintos. También lo es retomar un
                proyecto o cambiar de rumbo cuando algo deja de funcionar.
              </p>
              <p>
                Para empezar y sostener un proyecto también necesitas práctica,
                apoyo y un entorno que te ayude a avanzar.
              </p>
              <p>
                Te acompañamos a convertir lo que quieres hacer en una acción
                posible, probarla y revisar lo que pasó. Si algo se atora,
                buscamos qué cambiar: el tamaño del paso, la habilidad que
                falta, el apoyo o la forma de organizarte.
              </p>
              <p>uHub nació para replicar, de forma estructurada, lo que yo tuve de forma natural. <span>— Rodrigo Campillo</span></p>
              <a className="root-text-link" href="/nosotros">Conoce nuestra historia <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="root-model root-container root-section" id="modelo" aria-labelledby="model-title">
          <p className="root-eyebrow"><span>03 /</span> El Modelo uHub</p>
          <div className="root-heading-row"><h2 id="model-title">El centro eres tú.<br /><em>Alrededor, lo que necesitas para lograrlo.</em></h2><p>El modelo reúne las capacidades que desarrollas, el ecosistema que construyes y las instituciones que acompañan ese desarrollo.</p></div>
          <div className="root-model-layers">
            <article><span>01 · La persona</span><h3>Lo que crece en ti</h3><p>Mentalidad y propósito, habilidades, disciplina y liderazgo. No tienes que dominarlo todo antes de empezar.</p></article>
            <article><span>02 · Tu ecosistema</span><h3>Con quién avanzas</h3><p>Mentores para revisar decisiones, especialistas según el reto, comunidad para compartir y hábitos que caben en tu semana.</p></article>
            <article><span>03 · Quienes necesitan que avances</span><h3>Las instituciones</h3><p>Trabajamos con instituciones para que lo aprendido se convierta en acciones y mejoras concretas.</p></article>
          </div>
          <a className="root-text-link" href="/como-lo-hacemos">Explora el acompañamiento paso a paso <Arrow /></a>
        </section>

        <section
          className="root-cycle root-container root-section"
          id="como-lo-hacemos"
          aria-labelledby="cycle-title"
        >
          <span id="ciclo" aria-hidden="true" />
          <p className="root-eyebrow">
            <span>04 /</span> El recorrido
          </p>
          <div className="root-heading-row">
            <h2 id="cycle-title">
              Un camino que recorres con práctica, acompañamiento y seguimiento.
            </h2>
            <p>
              Explora dónde estás, cómo te acompañamos y qué avance puedes
              buscar. Cuatro etapas a las que puedes volver cuando tu proyecto lo necesite.
            </p>
          </div>
          <CycleWheel />
          <div className="root-practice-summary">
            <h3>La práctica</h3>
            <p>Eliges un reto real, acuerdas tres acciones, lo revisas con alguien y dejas evidencia. Prototipos, no ideas.</p>
            <p>La frecuencia y el alcance del acompañamiento dependen de cada oferta.</p>
            <a className="root-text-link" href="/como-lo-hacemos">Ver cómo lo hacemos <Arrow /></a>
          </div>
          <div className="root-cycle-takeaway" id="resultado">
            <strong>Emprender no es lo que haces. Es en quién te conviertes.</strong>
            <p>El objetivo es que puedas seguir emprendiendo durante tu vida: con un negocio, dentro de una organización o en tu comunidad. El proyecto puede cambiar; lo aprendido va contigo.</p>
          </div>

        </section>

        <section className="root-origin root-section" id="trayectoria" aria-labelledby="origin-title">
          <div className="root-container">
            <p className="root-eyebrow"><span>04 /</span> Cómo llegamos hasta aquí</p>
            <div className="root-origin-heading">
              <h2 id="origin-title">Todo empezó<br />por conectar personas.</h2>
              <p>Algunas personas contrataban la mentoría sin usar el coworking. Esa señal nos llevó a poner el acompañamiento en el centro: entender a la persona, probar ideas y revisar sus avances.</p>
            </div>
            <ol className="root-timeline">
              <li><span>2013–2014</span><h3>La comunidad abre el camino.</h3><p>Lean Startup Machine conecta a Rodrigo con nuevos referentes. En enero de 2014 coordina la primera sesión de Emprendedores Anónimos en Chihuahua.</p></li>
              <li><span>Agosto de 2015</span><h3>Construir con lo que había.</h3><p>Diez personas se reúnen para acondicionar un edificio, conseguir muebles y abrir uHub Coworking. Después, las mentorías toman su propio lugar.</p></li>
              <li><span>2019</span><h3>El acompañamiento se organiza.</h3><p>Se constituye uHub A.C. Los programas dan estructura al aprendizaje, la mentoría y la comunidad.</p></li>
              <li><span>Hoy</span><h3>Dar continuidad. Compartir lo aprendido.</h3><p>Emprende Diario acompaña a egresados; la formación de mentores y los nodos abren nuevas posibilidades de colaboración.</p></li>
            </ol>
            <div className="root-founder-strip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/rodrigo-retrato.webp" alt="Rodrigo Campillo, fundador de uHub." width="273" height="273" loading="lazy" />
              <div><span>Rodrigo Campillo · Fundador de uHub</span><p>En su familia y en sus propios proyectos, Rodrigo aprendió a empezar, equivocarse y reiniciar. Esa experiencia y los retos que observó en mentoría fueron dando forma al modelo de uHub.</p><a href="/nosotros">Lee la historia completa <Arrow /></a></div>
            </div>
          </div>
        </section>

        <section
          className="root-people root-section"
          id="mentores"
          aria-labelledby="people-title"
        >
          <div className="root-container root-people-layout">
            <div className="root-people-copy">
              <p className="root-eyebrow">
                <span>05 /</span> Quién te acompaña
              </p>
              <h2 id="people-title">
                Personas que escuchan.<br />
                <em>Y te ayudan a avanzar.</em>
              </h2>
              <p>
                Un mentor base te ayuda a definir acciones y revisar avances.
                Un especialista aporta experiencia cuando aparece un reto
                concreto. La comunidad comparte aprendizajes y contactos.
              </p>
              <p>La combinación y frecuencia dependen del programa. Algunas personas que comenzaron como participantes hoy también acompañan a otras.</p>
              <a className="root-text-link" href="/mentores">
                Conoce la Red uHub <Arrow />
              </a>
            </div>
          </div>
          <div className="root-container root-mentor-feature">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/cynthia-pinon.webp" alt="Cynthia Piñón, emprendedora y mentora en programas de uHub A.C." width="160" height="160" loading="lazy" />
            <p><strong>Cynthia Piñón</strong><span>Emprendedora editorial y mentora. Tras participar en AWE/uHub, comparte su experiencia en temas financieros y de negocio con nuevas generaciones.</span></p>
            <a className="root-text-link" href="/mentores">Así puedes sumarte <Arrow /></a>
          </div>
        </section>

        <section
          className="root-stories root-container root-section"
          id="historias"
          aria-labelledby="stories-title"
        >
          <div className="root-stories-heading">
            <div>
              <p className="root-eyebrow">
                <span>06 /</span> Historias de cambio
              </p>
              <h2 id="stories-title">Historias de cambio.</h2>
            </div>
            <p className="root-story-context">Experiencias de programas de uHub A.C. Cada historia tiene su propio punto de partida y recorrido.</p>
          </div>
          <ChangeStories />
          <a className="root-video-story" href="https://www.youtube.com/watch?v=j0g-MtBuOWM" target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/diana-gonzalez-video.jpg" alt="Diana González durante el video de su experiencia con uHub." width="480" height="360" loading="lazy" />
            <span><small>También en su voz</small><strong>Diana González · Yo Soy SAAM</strong><span>Conoce su experiencia en uHub. Ver testimonio en YouTube <Arrow /></span></span>
          </a>
        </section>

        <section
          className="root-stay root-section"
          id="lunes"
          aria-labelledby="stay-title"
        >
          <div className="root-container root-stay-layout">
            <div>
              <p className="root-eyebrow">
                <span>07 /</span> Sigue en contacto
              </p>
              <h2 id="stay-title">
                ¿Todavía <br />
                explorando?
              </h2>
              <p>
                Cada lunes te mando una historia, un reto y una pregunta para
                llevar el emprendimiento a tu semana.
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
              Encuentra tu camino <span aria-hidden="true">↑</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
