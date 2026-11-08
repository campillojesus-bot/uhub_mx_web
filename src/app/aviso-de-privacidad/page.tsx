import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata } from "../institutional";
import "../resource-pages.css";

export const metadata = pageMetadata("Aviso de privacidad", "Aviso de privacidad del sitio comercial uHub: datos personales, uso de imágenes, proveedores, contacto y derechos ARCO.", "/aviso-de-privacidad");

export default function AvisoDePrivacidad() {
  return <><SiteHeader /><main id="contenido" className="resource-page legal-notice"><article className="resource-shell">
    <header><p className="resource-kicker">uhub.mx · Sitio comercial</p>
      <h1>Aviso de privacidad</h1>
      <p className="resource-meta">Última actualización: <time dateTime="2026-11-06">6 de noviembre de 2026</time>.</p>
    </header>
    <p>De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, <strong>Rodrigo Campillo Durán</strong>, persona física con actividad empresarial, operando bajo el nombre comercial «uHüb», con domicilio en <strong>Progreso 101, Col. Centro, Chihuahua, Chihuahua, C.P. 31000, México</strong>, pone a su disposición el siguiente aviso de privacidad.</p>
    <p>Este aviso corresponde a uhub.mx. Los programas de uHüb A.C. tienen su propio responsable y aviso.</p>
    <section><h2>Qué datos recabamos y para qué</h2>
      <p>Para brindarle los servicios ofrecidos en uhub.mx —la membresía Emprende Diario, el Kit de Estructura, el Test del Cuadrante, MentorClass, programas para organizaciones y la Red de Mentores— recabamos, según el servicio: nombre, correo electrónico, teléfono o WhatsApp y, en caso de contratar la membresía, datos de facturación. En el caso de organizaciones, recabamos además institución y cargo.</p>
      <p>Estos datos se utilizan para:</p>
      <ol><li>Identificarle y darle acceso a los servicios que contrate.</li><li>Facilitarle el resultado de su test y el contenido del Kit de Estructura.</li><li>Dar seguimiento a su proceso dentro de la membresía o los programas.</li><li>Enviarle el correo semanal Lunes 1-1-1 y comunicación relacionada con uHüb cuando se suscriba. Puede darse de baja en cualquier momento.</li><li>Procesar los pagos de la membresía cuando corresponda.</li><li>Atender solicitudes de información de organizaciones.</li></ol>
    </section>
    <section><h2>Testimonios, fotografías y nombres</h2>
      <p>Si usted nos comparte una fotografía, un testimonio o su historia para publicarse en uhub.mx o en nuestros materiales, lo haremos <strong>únicamente con su autorización expresa</strong> y en los términos que usted indique: nombre completo o solo nombre, con o sin fotografía, con o sin el nombre de su proyecto.</p>
      <p>Puede retirar esa autorización en cualquier momento escribiéndonos, y retiraremos su material de nuestro sitio dentro de los 15 días hábiles siguientes. El retiro no obliga a recuperar materiales ya impresos o ya distribuidos por terceros.</p>
    </section>
    <section><h2>Datos de pago</h2>
      <p>Los pagos se procesan a través de <strong>Stripe</strong>. uHüb no almacena los datos completos de su tarjeta: Stripe los resguarda conforme al estándar PCI-DSS. uHüb recibe únicamente la confirmación de la transacción y los últimos cuatro dígitos, para identificar el cobro. Solicitar ingreso desde esta página no realiza un cargo.</p>
    </section>
    <section><h2>Con quién compartimos sus datos</h2>
      <p>No vendemos sus datos personales. Para las finalidades indicadas los compartimos únicamente con:</p>
      <ul><li><strong>Stripe</strong>, para procesar pagos.</li><li><strong>Kit (antes ConvertKit)</strong>, para el registro al Kit de Estructura y el envío del correo semanal si se suscribe.</li><li><strong>Google</strong>, para el registro de formularios y resultados del test.</li><li>La autoridad competente, cuando sea requerido de forma fundada y motivada.</li></ul>
      <p>Si decide contactarnos por WhatsApp, el mensaje se envía desde esa aplicación cuando usted lo confirma.</p>
    </section>
    <section><h2>Sus derechos ARCO</h2>
      <p>Usted puede Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos. Para ejercer cualquiera de estos derechos, escriba a <a href="mailto:rodrigo@uhub.mx?subject=Derechos%20ARCO">rodrigo@uhub.mx</a> con el asunto «Derechos ARCO», indicando su nombre completo, el derecho que desea ejercer y adjuntando copia de una identificación oficial.</p>
      <p>Responderemos en un plazo máximo de 20 días hábiles.</p>
    </section>
    <section><h2>Cookies</h2><p>uhub.mx utiliza cookies y herramientas de analítica para entender cómo se usa el sitio. Puede desactivarlas desde la configuración de su navegador.</p></section>
    <section><h2>Cambios a este aviso</h2><p>Cualquier modificación se publicará en esta misma página, indicando la fecha de actualización.</p></section>
    <section><h2>Contacto</h2><p><a href="mailto:rodrigo@uhub.mx">rodrigo@uhub.mx</a> · <a href="tel:+526142346499">(614) 234-6499</a></p></section>
  </article></main><SiteFooter /></>;
}
