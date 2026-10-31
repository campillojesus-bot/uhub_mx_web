import type { Metadata } from "next";
import { Arrow, SiteFooter, SiteHeader, whatsappGeneral } from "./components";
import { HomeCycle } from "./home-cycle";
import { HomeStories } from "./home-stories";
import { cifras } from "@/data/uhub";
import { CountUp } from "@/components/CountUp";
import { NetworkStats } from "@/components/marketing/NetworkStats";
import { NewsletterForm } from "./newsletter-form";
import "./home-paraguas.css";

const doors = [
  { name: "Para mí", text: "Quiero iniciar, retomar o sostener una iniciativa — también desde mi trabajo.", href: "/emprende-diario" },
  { name: "Para una empresa o cámara", text: "Buscamos desarrollar habilidades para que nuestro equipo o nuestros socios propongan y pongan mejoras en práctica.", href: "/organizaciones" },
  { name: "Para una universidad", text: "Queremos desarrollar competencias emprendedoras en estudiantes o docentes.", href: "/universidades" },
  { name: "Para una A.C. o fundación", text: "Queremos fortalecer nuestra organización o acompañar a quienes apoyamos.", href: "/organizaciones/osc" },
];

export const metadata: Metadata = {
  title: { absolute: "uHüb · Nadie emprende solo" },
  description: "uHub, Centro de Desarrollo Emprendedor: mentores, práctica y seguimiento para personas, empresas, universidades y organizaciones. Encuentra tu camino con uHüb.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "uHüb · Nadie emprende solo",
    description: "Mentores, estructura y hábitos para iniciar, retomar o sostener lo que emprendes. Para ti, tu equipo y tu comunidad.",
    url: "https://uhub.mx",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "uHüb · Centro de Desarrollo Emprendedor" }],
  },
};

// Supply approved image paths here; absent assets never render broken images.
const heroPhoto: { webp: string; jpg: string; alt: string } | null = null;

export default function Home() {
  return <>
    <SiteHeader />
    <main className="hub-home" id="contenido">
      <section className={`hub-hero${heroPhoto ? " hub-hero-with-photo" : ""}`} id="inicio" aria-labelledby="home-title">
        {heroPhoto && <picture className="hub-hero-photo">
          <source srcSet={heroPhoto.webp} type="image/webp" />
          <img src={heroPhoto.jpg} alt={heroPhoto.alt} width="2400" height="1030" loading="eager" fetchPriority="high" />
        </picture>}
        <div className="hub-shell">
          <p className="hub-eyebrow">Centro de Desarrollo Emprendedor</p>
          <h1 id="home-title">Nadie emprende solo.</h1>
          <p className="hub-lead">Ni tú, ni tu equipo, ni tu comunidad. Acompañamos con mentores, estructura y hábitos para iniciar, retomar o sostener lo que emprendes.</p>
          <div className="hub-paths" id="caminos">
            <span className="hub-anchor" id="para-quien" aria-hidden="true" />
            <h2 id="paths-title">¿Qué te trae aquí?</h2>
            <nav className="hub-doors" aria-labelledby="paths-title">
              {doors.map((door, index) => <a href={door.href} className="hub-door" key={door.href}>
                <span className="hub-door-index" aria-hidden="true">0{index + 1}</span>
                <span className="hub-door-copy"><strong>{door.name}</strong><span>{door.text}</span></span>
                <Arrow />
              </a>)}
            </nav>
          </div>
        </div>
      </section>

      <div className="hub-metrics" aria-label="Trayectoria de uHüb">
        <div className="hub-shell">
          <div><strong>Desde {cifras.desde}</strong><span>Construyendo comunidad</span></div>
          <div><strong><CountUp value={cifras.participaciones.valor} prefix={cifras.participaciones.prefijo} /></strong><span>{cifras.participaciones.etiqueta}</span></div>
          <div><strong><CountUp value={cifras.mentorias.valor} /></strong><span>{cifras.mentorias.etiqueta}</span></div>
          <div><strong>{cifras.territorio.ciudad}</strong><span>{cifras.territorio.complemento}</span></div>
        </div>
        <p className="hub-metrics-source">Datos de {cifras.entidad} · {cifras.fuente}. Participaciones y sesiones, no personas únicas.</p>
      </div>

      <section className="hub-why hub-section" id="por-que" aria-labelledby="why-title">
        <div className="hub-reading">
          <p className="hub-eyebrow">El punto de partida importa</p>
          <h2 id="why-title">El talento está repartido. <em>El ecosistema, no.</em></h2>
          <p>Hay gente con una idea buenísima que no llega a probarla. A veces le falta una habilidad, tiempo o recursos; otras, alguien a quien preguntarle cómo empezar.</p>
          <p>Contar con ejemplos, contactos y apoyo puede abrir posibilidades. Para empezar y sostener un proyecto también necesitas práctica, apoyo y un entorno que te ayude a avanzar.</p>
          <p>Por eso existe uHüb: para ayudarte a construir ese entorno y convertir tus intenciones en acciones posibles.</p>
          <a className="hub-link" href="/nosotros">Cómo empezó esto <Arrow /></a>
        </div>
      </section>

      <section className="hub-method hub-section" id="modelo" aria-labelledby="model-title">
        <div className="hub-shell">
          <span className="hub-anchor" id="como-lo-hacemos" aria-hidden="true" />
          <span className="hub-anchor" id="resultado" aria-hidden="true" />
          <p className="hub-eyebrow">De la intención a la práctica</p>
          <h2 id="model-title">Un solo modelo. <em>Distintas aplicaciones.</em></h2>
          <p className="hub-method-opening">Tu proyecto avanza con lo que haces entre una sesión y la siguiente.</p>
          <div className="hub-method-layout">
            <div className="hub-method-copy">
              <p>Empiezas desde una situación real: algo que quieres iniciar, retomar o mejorar. Eliges una acción posible, la pruebas y revisas qué pasó con alguien que te ayuda a ver otras posibilidades. De ahí sale la siguiente acción.</p>
              <p>Entre sesiones, llevas lo acordado a la práctica y registras qué ocurrió para revisarlo después.</p>
              <p>Mentores, comunidad, práctica y seguimiento se conectan con tu contexto. Ese es el Modelo uHüb.</p>
              <div className="hub-working-agreement">
                <h3>Tú haces el camino. Nosotros te acompañamos.</h3>
                <p>Trabajamos contigo sobre un reto real. Te ayudamos a elegir acciones, desarrollar habilidades y revisar lo que ocurre al ponerlas en práctica. Tú o tu equipo toman las decisiones y llevan esas acciones a su proyecto o trabajo cotidiano.</p>
              </div>
              <div className="hub-offer-note">
                <p>Los talleres y la capacitación desarrollan habilidades concretas. Los programas y la membresía te acompañan al ponerlas en práctica.</p>
              </div>
              <a className="hub-link" href="/como-lo-hacemos">Ver el recorrido completo <Arrow /></a>
            </div>

          </div>
          <HomeCycle />
        </div>
      </section>

      <HomeStories />
      <section className="hub-network hub-section" id="red-mentores" aria-labelledby="network-title">
        <div className="hub-shell hub-network-layout">
          <div>
            <p className="hub-eyebrow">La red</p>
            <h2 id="network-title">Acompañar también se aprende.</h2>
            <p>Algunas personas que fueron acompañadas hoy acompañan a otras. La red también reúne a emprendedores y especialistas que quieren compartir lo que han aprendido.</p>
            <p>Si tienes un camino recorrido, puedes formarte para acompañar con el Modelo uHüb y aportar tu experiencia a los retos de otras personas.</p>
            <a className="button button-primary" href="/mentores">Quiero ser mentor <Arrow /></a>
          </div>
          <NetworkStats />
        </div>
      </section>
      <section className="hub-stay hub-section" id="lunes" aria-labelledby="stay-title">
        <div className="hub-shell hub-stay-layout">
          <div>
            <p className="hub-eyebrow">Un primer paso para tu semana</p>
            <h2 id="stay-title">Si todavía no sabes por dónde empezar</h2>
            <p>Un correo los lunes: una historia, un reto y una pregunta. Para empezar la semana con algo concreto que puedas poner en práctica.</p>
            <NewsletterForm />
          </div>
          <aside className="hub-test" aria-labelledby="test-invitation">
            <p className="hub-eyebrow">Para tu propio recorrido</p>
            <h3 id="test-invitation">¿Qué perfil te describe hoy?</h3>
            <p>Explora cuatro perfiles emprendedores y reflexiona sobre tu contexto. Tu resultado es un punto de partida; no decide por ti qué camino tomar.</p>
            <a className="hub-link" href="/test">Hacer el test del cuadrante <Arrow /></a>
          </aside>
        </div>
      </section>
      <section className="hub-contact hub-section" aria-labelledby="contact-title">
        <div className="hub-shell hub-contact-layout">
          <div><h2 id="contact-title">¿Prefieres preguntar antes de decidir?</h2><p>Cuéntanos qué quieres iniciar, retomar o mejorar. Te orientamos sobre las opciones de acompañamiento.</p></div>
          <a className="button" href={whatsappGeneral} target="_blank" rel="noreferrer">Hablemos por WhatsApp <Arrow external /></a>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
