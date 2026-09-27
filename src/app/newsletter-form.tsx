import { lunesSubscription } from "./components";

export function NewsletterForm() {
  return (
    <div className="root-newsletter-capture">
      <a className="root-button" href={lunesSubscription}>Recibir Lunes 1-1-1 <span aria-hidden="true">↗</span></a>
      <p className="root-newsletter-privacy">Gratis, por correo. Completa tu suscripción en nuestra página de Kit. Puedes darte de baja cuando quieras.</p>
    </div>
  );
}
