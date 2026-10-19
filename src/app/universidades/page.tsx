import { pageMetadata } from "../institutional";
import { Arrow, SiteFooter, SiteHeader } from "../components";

export const metadata = pageMetadata("Capacidades emprendedoras para la vida · Universidades", "uHub: Formación práctica para docentes: dos días para experimentar y facilitar actividades que desarrollen iniciativa y capacidades emprendedoras en estudiantes.", "/universidades");
const contact = "https://wa.me/526142346499?text=Hola%2C%20represento%20una%20universidad%20y%20quiero%20conocer%20la%20formaci%C3%B3n%20docente%20de%20uHub";

export default function UniversidadesPage() {
  return <>
    <SiteHeader />
    <main id="contenido" className="service-page">
      <section className="inner-hero">
        <div><p className="eyebrow">uHüb para universidades</p><h1>Capacidades emprendedoras para toda la vida.</h1><p>Identificar oportunidades, probar ideas, colaborar y tomar decisiones son habilidades que tus estudiantes pueden usar en un negocio, en su trabajo o en su comunidad.</p><p>Acompañamos a los docentes para que lleven ese aprendizaje al aula, con experiencias prácticas y preguntas que despierten iniciativa.</p><a className="button button-primary" href={contact} target="_blank" rel="noreferrer">Solicita la propuesta para tus docentes <Arrow external /></a></div>
        <aside className="inner-quote"><span>Sembrar posibilidades</span><strong>Lo que aprenden hoy puede abrirles caminos años después.</strong></aside>
      </section>
      <section className="inner-section">
        <div className="section-kicker"><p className="eyebrow">Distintos futuros, capacidades compartidas</p><h2>¿Para qué le sirve a tu estudiante?</h2></div>
        <ol className="service-life-paths">
          <li><h3>Para explorar su futuro</h3><p>Conocer el emprendimiento como una posibilidad, observar necesidades y desarrollar confianza para probar ideas cuando decida hacerlo.</p></li>
          <li><h3>Para emprender ahora</h3><p>Identificar a quienes ya quieren iniciar, ayudarles a dar una primera prueba y conectarlos con las opciones de incubación y acompañamiento pertinentes.</p></li>
          <li><h3>Para innovar en su trabajo</h3><p>Aprender a proponer mejoras, resolver problemas y colaborar dentro de una empresa o institución, desde cualquier disciplina.</p></li>
        </ol>
      </section>
      <section className="inner-section" id="formacion-docente">
        <div className="section-kicker"><p className="eyebrow">Una primera colaboración concreta</p><h2>Entrénate para Emprender.</h2></div>
        <div className="service-detail"><p>Un programa de actualización docente en el que las y los profesores experimentan actividades que después pueden facilitar con sus estudiantes.</p><ul><li><strong>Formato de referencia:</strong> dos días presenciales de trabajo práctico, con un grupo sugerido de 15 docentes.</li><li><strong>Qué se trabaja:</strong> retos, herramientas para explorar y probar ideas, y el rol del docente como mentor y guía.</li><li><strong>Qué se llevan:</strong> materiales de trabajo, constancia de participación y recomendaciones para aplicar lo aprendido en su siguiente ciclo escolar.</li><li><strong>Capacidad que buscamos desarrollar:</strong> que cada docente pueda facilitar un reto emprendedor, guiar una primera prueba y acompañar la reflexión de sus estudiantes sobre lo aprendido.</li><li><strong>Cómo se adapta:</strong> acordamos el temario, los recursos y el alcance a partir del perfil de tus docentes y el calendario de tu institución.</li></ul><div className="route-actions"><a className="text-link" href="/downloads/uhub-universidades.pdf" target="_blank" rel="noreferrer">Descargar ficha para tu comité · PDF <Arrow /></a><a className="text-link" href="mailto:rodrigo@uhub.mx?subject=Formaci%C3%B3n%20docente%20uHub">Escribir a Rodrigo</a></div></div>
        <div className="service-evidence"><div><span className="service-evidence-label">Colaboración en preparación</span><h3>Tecnológico de Nuevo Casas Grandes.</h3><p>La actualización docente está prevista para diciembre de 2026. Esta primera colaboración busca llevar experiencias prácticas y herramientas de acompañamiento al aula. Los resultados se documentarán después de su realización.</p></div><div><span className="service-evidence-label">Posibilidad de continuidad</span><h3>Un nodo en tu universidad.</h3><p>La colaboración puede evolucionar hacia un nodo que conecte docentes, estudiantes y mentores. La operación acompañada se diseña con la universidad. La transferencia para que una institución opere el modelo por su cuenta sigue en desarrollo.</p></div></div>
      </section>
      <section className="inner-section"><div className="service-detail"><p className="eyebrow">Cómo se hace visible el aprendizaje</p><h2>Observar, probar y reflexionar.</h2><p>Al diseñar la colaboración acordamos qué evidencias recoger: problemas que los estudiantes identifican, experimentos que realizan, decisiones que pueden explicar y aprendizajes que llevan a nuevos contextos.</p><p>La creación de un negocio es una posible trayectoria. El desarrollo de capacidades también se expresa en su trabajo, sus proyectos y su participación en la comunidad.</p><a className="text-link" href="/nosotros">Conoce de dónde viene nuestro modelo <Arrow /></a></div></section>
      <section className="inner-closing"><div><p className="eyebrow">Empecemos con tus docentes</p><h2>¿Qué oportunidades quieres abrir para tus estudiantes?</h2></div><a className="button button-primary" href={contact} target="_blank" rel="noreferrer">Solicita la propuesta para tus docentes <Arrow external /></a></section>
    </main><SiteFooter />
  </>;
}
