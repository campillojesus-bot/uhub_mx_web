/* eslint-disable @next/next/no-img-element */
import { pageMetadata } from "../institutional";
import Link from "next/link";
import { Arrow, SiteFooter, SiteHeader } from "../components";

export const metadata = pageMetadata("La historia de uHub y el origen del modelo de acompañamiento", "Rodrigo Campillo cuenta cómo una comunidad y un coworking dieron origen al modelo de acompañamiento uHub: descubrir, aterrizar, adaptar y crecer.", "/nosotros");

const chapters = [
  {
    date: "Antes de uHub", id: "origen", title: "Aprendí a volver a empezar.",
    paragraphs: [
      "Crecí en una familia emprendedora. Vi a mis papás abrir negocios, pasar por dificultades, cerrar y empezar de nuevo. En 1996, mi mamá inició una casa de retiro con una casa, unos muebles y las primeras camas. En mi familia, emprender también significaba adaptarse y construir con lo que había.",
      "Mis propios intentos comenzaron vendiendo por internet. Después colaboré en el negocio familiar, lancé una revista para adultos mayores que no funcionó y vendí ropa a mayoreo y menudeo. Antes de acompañar a otras personas, ya conocía la incertidumbre de intentar algo y tener que replantearlo.",
      "En 2012 atravesé pérdidas y cambios personales importantes. Buscar encuentros con otras personas emprendedoras me abrió nuevas conversaciones, referentes y posibilidades. Más adelante entendería cuánto había influido ese entorno en mi propio recorrido.",
    ],
  },
  {
    date: "2013–2014", id: "comunidad", title: "Una invitación abrió otro camino.",
    paragraphs: [
      "En 2013 participé en Lean Startup Machine, en el Tecnológico de Monterrey de Chihuahua. Ahí conocí a un mentor de Guadalajara que me acercó a Emprendedores Anónimos, una comunidad nacida en Chile. Cuando pregunté por un encuentro en Chihuahua, la respuesta fue una invitación a coordinarlo.",
      "La primera sesión fue en enero de 2014. Me daba mucho miedo hablar en público y estaba muy nervioso, pero la conversación entre emprendedores valió la pena. Seguimos reuniéndonos cada mes. Después llegaron invitaciones para mentorear en Startup Essentials y entré a Toastmasters para trabajar mi comunicación.",
      "Acompañar a otros se volvió una parte importante de mi trabajo. Escuchar sus preguntas también me hacía cuestionar mis propias decisiones. La comunidad nos permitía aprender unos de otros.",
    ],
  },
  {
    date: "Agosto de 2015", id: "coworking", title: "Diez personas y un edificio por transformar.",
    paragraphs: [
      "Vi la oportunidad de abrir un coworking en un edificio que necesitaba muchas mejoras. El propietario aceptó tomar esas adecuaciones a cuenta de renta. Al principio no avancé: me faltaban dinero y personas con quienes hacerlo.",
      "Busqué socios entre quienes había conocido en la comunidad. Reunimos a diez personas dispuestas a participar. Cada semana limpiábamos, acondicionábamos el lugar y conseguíamos muebles reciclados. Así nació uHub Coworking en agosto de 2015: un espacio para trabajar, encontrarnos y hacer comunidad.",
      "La idea original reunía escritorios, eventos y conexiones. Con el tiempo, las necesidades de quienes llegaban nos mostrarían que había algo más por desarrollar.",
    ],
  },
  {
    date: "Los primeros años", id: "acompanamiento", title: "Algunos venían por ayuda, aunque no usaran un escritorio.",
    paragraphs: [
      "Sostener el coworking fue difícil. Había personas que no encontraban en el espacio lo que buscaban y emprendedores que sí querían estar, pero no podían pagarlo de forma constante. Empezamos a ofrecer mentorías y apareció una señal muy clara: varias personas contrataban el acompañamiento sin usar el espacio.",
      "Llegaban con preguntas concretas: cómo aterrizar una idea, con qué recursos empezar, cómo conseguir clientes o qué hacer cuando se sentían atoradas. El valor de uHub comenzó a concentrarse en esas conversaciones y en lo que pasaba después.",
      "Diana Ramos es parte de esa trayectoria desde 2017. Su proyecto, Cuidaditos, pasó por mentorías y posteriormente por AWE/uHub. En su testimonio cuenta cómo aprendió a enfocar sus ideas y empezar con los recursos que tenía. Su recorrido también ha incluido ajustes y nuevas iniciativas.",
    ],
  },
  {
    date: "2019 en adelante", id: "programas", title: "El acompañamiento tomó estructura.",
    paragraphs: [
      "En 2019 se constituyó uHub A.C. La colaboración con el Consulado de Estados Unidos y AWE abrió una primera oportunidad para ampliar la formación y las mentorías. Después se sumaron otras alianzas, entre ellas FECHAC, y programas para personas con distintos contextos y barreras para emprender.",
      "La pandemia volvió a poner a prueba el proyecto. Cambiaron la operación, las relaciones y el equipo. De los diez socios iniciales fuimos pasando a otra estructura; también vivimos la pérdida de un socio. Mantener uHub implicó revisar decisiones y adaptar la forma de trabajar.",
      "El acompañamiento a organizaciones, como el trabajo de intraemprendimiento con FICOSEC, amplió el campo de aplicación: personas que quieren innovar y generar recursos desde una institución también necesitan probar ideas, aprender y darles seguimiento.",
    ],
  },
  {
    date: "Hoy y el siguiente paso", id: "hoy", title: "La continuidad también necesita un lugar.",
    paragraphs: [
      "Emprende Diario nació como una forma de continuar después de los programas. Hoy Ritmo reúne a egresados que buscan seguir trabajando con acompañamiento, retos y comunidad. Sus experiencias nos ayudan a entender qué necesitan para mantener esa práctica en su vida cotidiana.",
      "Estamos preparando un primer piloto de la Red uHub y colaboraciones para acercar el modelo a universidades y organizaciones. Formar a otras personas para acompañar es parte del siguiente paso: compartir lo aprendido y construir una capacidad que vaya más allá de una sola persona.",
    ],
  },
];

const lessons = [
  ["Descubrir · Fuego", "Querer emprender, sin saber todavía para qué o por dónde.", "Explorar los motivos, el contexto y una oportunidad que tenga sentido para esa persona."],
  ["Aterrizar · Tierra", "Una idea que parece exigir más recursos de los disponibles.", "Acotar la propuesta, conversar con posibles clientes y diseñar una primera prueba alcanzable."],
  ["Adaptar · Agua", "Acciones acordadas que se posponen al volver a la rutina.", "Entender qué las está frenando, ajustar los compromisos y construir hábitos con seguimiento."],
  ["Crecer · Aire", "Un proyecto que avanza y trae responsabilidades nuevas.", "Desarrollar liderazgo, aprender a delegar y decidir cómo fortalecer lo que funciona."],
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenido" className="service-page history-page">
        <section className="inner-hero about-hero">
          <div>
            <p className="eyebrow">Nuestra historia · Contada por Rodrigo Campillo</p>
            <h1>uHub también aprendió a emprender.</h1>
            <p>Empezamos reuniendo personas en un coworking. Escucharlas, acompañarlas y vivir nuestros propios cambios dio forma al modelo que hoy compartimos.</p>
            <a className="button button-primary" href="#historia">Recorrer nuestra historia ↓</a>
          </div>
          <figure className="about-portrait">
            <img src="/images/rodrigo-retrato.webp" alt="Rodrigo Campillo, fundador de uHub." width="1600" height="1067" />
            <figcaption>Rodrigo Campillo · Fundador de uHub</figcaption>
          </figure>
        </section>

        <nav className="history-chapter-nav" aria-label="Capítulos de nuestra historia">
          <a href="#origen">El origen</a>
          <a href="#coworking">El coworking</a>
          <a href="#modelo">Cómo nació el modelo</a>
          <a href="#hoy">Dónde estamos hoy</a>
        </nav>

        <section className="inner-section history-chapters" id="historia" aria-label="La evolución de uHub">
          {chapters.map((chapter) => (
            <article className="history-chapter" id={chapter.id} key={chapter.id}>
              <p className="history-date">{chapter.date}</p>
              <div>
                <h2>{chapter.title}</h2>
                {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {chapter.id === "acompanamiento" && (
                  <figure className="history-photo-wide"><img src="/images/encuentro-coworking.webp" alt="Participantes reunidos alrededor de las mesas del coworking de uHub." width="1600" height="900" loading="lazy" /><figcaption>2016 · Compartir preguntas, experiencias y siguientes pasos.</figcaption></figure>
                )}
                {chapter.id === "coworking" && (
                  <>
                    <div className="history-photo-pair">
                      <figure><img src="/images/coworking-en-obra.webp" alt="El local de uHub durante las adecuaciones, con herramientas y materiales de construcción." width="1600" height="1200" loading="lazy" /><figcaption>2015 · El espacio todavía en obra.</figcaption></figure>
                      <figure><img src="/images/mobiliario-coworking.webp" alt="Mesas de madera y un carrete reutilizado como mesa en el coworking." width="1600" height="1200" loading="lazy" /><figcaption>2015 · Construir también significaba hacer los muebles.</figcaption></figure>
                    </div>
                    <figure className="history-photo-wide"><img src="/images/coworking-en-uso.webp" alt="Personas trabajando con sus computadoras en las mesas de madera del coworking uHub." width="1600" height="900" loading="lazy" /><figcaption>2016 · El lugar empieza a llenarse de proyectos y conversaciones.</figcaption></figure>
                    <blockquote className="history-pullquote">“No teníamos dinero pero éramos muchos.”<cite>Rodrigo Campillo</cite></blockquote>
                    <a className="history-archive" href="https://www.youtube.com/watch?v=VmYIPG2cKuM" target="_blank" rel="noreferrer">
                                <img src="/images/archivo-kickstarter-2016.jpg" alt="Fotograma del video de la campaña Kickstarter de uHub de 2016." width="480" height="360" loading="lazy" />
                      <span><small>Del archivo de uHub · 2016</small><strong>Así presentábamos el proyecto.</strong><span>Ver el video de la campaña Kickstarter en YouTube <Arrow /></span></span>
                    </a>
                  </>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="inner-section history-lessons" id="modelo">
          <div className="section-kicker">
            <p className="eyebrow">Del aprendizaje al modelo</p>
            <h2>Cada etapa responde a un reto que vimos repetirse.</h2>
            <p>Estas son observaciones de nuestra experiencia acompañando. El punto de partida de cada persona es distinto; por eso revisamos también sus tiempos, recursos y entorno.</p>
          </div>
          <div className="history-lesson-list">
            {lessons.map(([stage, challenge, response]) => (
              <article key={stage}>
                <span>{stage}</span>
                <h3>{challenge}</h3>
                <p>{response}</p>
              </article>
            ))}
          </div>
          <div className="history-reflection">
            <h3>Por eso es un ciclo.</h3>
            <p>Yo mismo he emprendido, reemprendido y cambiado de proyecto. En cada ocasión he tenido que volver a descubrir, aterrizar, adaptarme o desarrollar nuevas capacidades. Volver a una etapa puede ser justo lo que necesitas cuando cambian tus circunstancias.</p>
            <p>El programa anual de uHub A.C. incorpora además <strong>Consolidar</strong>, una etapa de formación técnica para fortalecer la operación del emprendimiento.</p>
            <Link className="text-link" href="/#ciclo">Explorar las cuatro etapas <Arrow /></Link>
          </div>
        </section>

        <section className="inner-section history-principles">
          <div className="section-kicker">
            <p className="eyebrow">La filosofía de acompañar</p>
            <h2>Primero entender a la persona.</h2>
          </div>
          <div className="history-principles-layout">
            <div>
              <p>Antes de hablar del siguiente paso, busco entender de dónde viene la persona, dónde está hoy y hacia dónde quiere ir. Su proyecto convive con una familia, un trabajo, recursos y responsabilidades reales.</p>
              <p>También cambió mi manera de mentorear. Aprendí a hacer preguntas, plantear escenarios y ayudar a que cada persona pruebe sus ideas. Después revisamos qué pasó: qué hizo, qué aprendió, qué se atravesó y cómo puede continuar.</p>
              <p>Yo también me he encontrado recomendando algo que me costaba poner en práctica. Acompañar me obliga a seguir aprendiendo y a reconocer cuándo necesito ayuda. Esa es la postura que queremos compartir con los mentores de uHub.</p>
            </div>
            <aside>
              <p className="eyebrow">El resultado que buscamos</p>
              <h3>Que te lleves la capacidad de seguir emprendiendo.</h3>
              <p>Tomar decisiones, probar, aprender, pedir apoyo y volver a empezar cuando haga falta. Capacidades que pueden acompañarte en un negocio, dentro de una organización o en tu siguiente proyecto.</p>
            </aside>
          </div>
        </section>

        <section className="inner-closing">
          <div><p className="eyebrow">Tu siguiente paso</p><h2>¿En qué momento de tu camino estás?</h2></div>
          <Link className="button button-primary" href="/#caminos">Encuentra tu camino <Arrow /></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
