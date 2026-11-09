import type { Metadata } from "next";
import { Arrow, SiteFooter, SiteHeader, whatsappGeneral } from "./components";
import { HomeCycle } from "./home-cycle";
import { HomeStories } from "./home-stories";
import { cifras } from "@/data/uhub";
import { CountUp } from "@/components/CountUp";
import { NetworkStats } from "@/components/marketing/NetworkStats";
import { KitSignup } from "./kit-signup";
import { KitContents } from "@/components/marketing/KitContents";
import "./home-paraguas.css";

const doors = [
  { name: "Para mí", text: "Quiero iniciar, retomar o sostener una iniciativa — también desde mi trabajo.", href: "/emprende-diario" },
  { name: "Para una empresa o cámara", text: "Buscamos desarrollar habilidades para que nuestro equipo o nuestros socios propongan y pongan mejoras en práctica.", href: "/organizaciones" },
  { name: "Para una universidad", text: "Queremos desarrollar competencias emprendedoras en estudiantes o docentes.", href: "/universidades" },
  { name: "Para una A.C. o fundación", text: "Queremos fortalecer nuestra organización o acompañar a quienes apoyamos.", href: "/organizaciones/osc" },
];

export const metadata: Metadata = {
  title: { absolute: "La constancia se construye · uHüb" },
  description: "uHub, Centro de Desarrollo Emprendedor: mentores, práctica y seguimiento para personas, empresas, universidades y organizaciones. Encuentra tu camino con uHüb.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "La constancia se construye · uHüb",
    description: "Mentores, estructura y hábitos para iniciar, retomar o sostener lo que emprendes. Para ti, tu equipo y tu comunidad.",
    url: "https://uhub.mx",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "uHüb · Centro de Desarrollo Emprendedor" }],
  },
};

export default function Home() {
  return <>
    <SiteHeader />
    <main className="hub-home" id="contenido">
      <section className="hub-hero" id="inicio" aria-labelledby="home-title">
        <div className="hub-hero-intro">
          <div className="hub-shell hub-hero-copy">
            <p className="hub-eyebrow">Centro de Desarrollo Emprendedor</p>
            <h1 id="home-title">La constancia <span>se construye.</span></h1>
            <p className="hub-hero-promise">Iniciar algo no falla por falta de ideas. Falla por falta de estructura para sostenerlo.</p>
            <p className="hub-hero-support">Te acompañamos con mentores y un método para que tú, o tu equipo, pasen de la intención a la práctica sin detenerse.</p>
          </div>
          <picture className="hub-hero-photo">
            <img src="/images/rodrigo-campillo-011.webp" alt="Rodrigo Campillo, fundador de uHüb, frente al pizarrón del centro." width="800" height="800" style={{ objectPosition: "50% 10%" }} fetchPriority="high" loading="eager" />
          </picture>
        </div>
        <div className="hub-shell">
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
          <div><strong><CountUp value={cifras.mentorias.valor} /></strong><span>sesiones de mentoría uno a uno</span></div>
          <div><strong>Presencial y en línea</strong><span>Modalidades de acompañamiento</span></div>
        </div>
        <p className="hub-metrics-source">Mentorías: {cifras.entidad} · {cifras.territorio.ciudad} {cifras.territorio.complemento} · 2023–2025. Fuente: {cifras.fuente}.</p>
      </div>

      <section className="hub-why hub-section" id="por-que" aria-labelledby="why-title">
        <div className="hub-reading">
          <p className="hub-eyebrow">Nadie emprende solo</p>
          <h2 id="why-title">El talento está repartido. <em>El ecosistema, no.</em></h2>
          <p>Emprender no es solo abrir negocios; es una competencia para la vida. Ya sea que estés fundando tu propia empresa, proponiendo innovaciones dentro de tu empleo, o liderando una causa comunitaria, necesitas las mismas habilidades: resiliencia, disciplina y capacidad de adaptación.</p>
          <p>Hay gente con una idea buenísima que no llega a probarla. A veces le falta una habilidad, tiempo o recursos; otras, alguien a quien preguntarle cómo empezar.</p>
          <p>Contar con ejemplos, contactos y apoyo puede abrir posibilidades. Para empezar y sostener un proyecto también necesitas práctica, apoyo y un entorno que te ayude a avanzar.</p>
          <p>Por eso existe uHüb: para ayudarte a construir ese entorno y convertir tus intenciones en acciones posibles.</p>
          <p className="hub-why-close">No te enseñamos a hacer una empresa, te desarrollamos para que seas capaz de iniciar lo que sea.</p>
          <a className="hub-link" href="/nosotros">Cómo empezó esto <Arrow /></a>
        </div>
      </section>

      <section className="hub-mentoria hub-section" aria-labelledby="mentoria-title">
        <div className="hub-shell hub-mentoria-layout">
          <figure className="hub-mentoria-scene">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mentoria-uno-a-uno-004.webp" alt="Dos personas conversan en una mesa con una libreta y una computadora abierta." width="1200" height="675" loading="lazy" />
          </figure>
          <div className="hub-mentoria-copy">
            <p className="hub-eyebrow">Cómo trabajamos</p>
            <h2 id="mentoria-title">Mentores, <em>no consultores.</em></h2>
            <p className="hub-mentoria-lead">Tú haces el camino. Nosotros te acompañamos.</p>
            <p>Traes una decisión que te cuesta tomar. Con tu mentor eliges una acción, la pruebas y revisan juntos qué pasó. Tú o tu equipo conservan las decisiones y ganan práctica para sostenerlas por su cuenta.</p>
            <p>También damos capacitación con Biné Educación: talleres y cursos donde trabajas lo que tienes enfrente esta semana. Hay opciones con constancia oficial, según el curso.</p>
          </div>
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
            <h2 id="stay-title">El Kit de Estructura <span className="kit-wordmark">uHüb</span>.</h2>
            <p className="hub-kit-lead">Déjanos tu correo y descarga tres cosas para usar esta semana:</p>
            <KitContents />
            <p className="kit-weekly">Y luego, cada lunes: una idea, una pregunta, una acción. Eso es <strong>Lunes 1-1-1</strong>. Puedes salirte cuando quieras.</p>
            <KitSignup />
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
