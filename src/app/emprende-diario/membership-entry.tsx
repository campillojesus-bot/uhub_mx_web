"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Arrow, lunesSubscription, whatsappMembership } from "../components";
import { describeJourneyContext, readJourneyContext } from "@/lib/journey-context";

export function MembershipEntry() {
  const params = useSearchParams();
  return <EntryContent key={params.toString()} selection={describeJourneyContext(readJourneyContext(params))} />;
}

function EntryContent({ selection }: { selection: string[] }) {
  const [includeSelection, setIncludeSelection] = useState(true);
  const message = [
    "Hola, quiero solicitar mi ingreso a Ritmo de Emprende Diario.",
    ...(includeSelection ? selection : []),
    "Antes de inscribirme, quiero confirmar mi opción de ingreso, la ruta, la modalidad, el calendario y las condiciones.",
  ].join("\n");
  const href = new URL(whatsappMembership);
  href.searchParams.set("text", message);
  return <section className="inner-section membership-entry" id="ingreso" aria-labelledby="entry-title">
    <div className="section-kicker"><p className="eyebrow">Tu siguiente paso</p><h2 id="entry-title">¿Llegas por primera vez?</h2><p>Puedes solicitar ingreso aunque no hayas participado en uHüb A.C. La comunidad actual está formada por egresados; revisamos contigo la opción de ingreso antes de inscribirte.</p></div>
    <ol className="entry-steps">
      <li><span>01</span><h3>Comparte tu punto de partida</h3><p>Qué quieres iniciar, retomar o sostener y qué apoyo buscas. No necesitas haber hecho el test ni la Brújula.</p></li>
      <li><span>02</span><h3>Confirma cómo participarías</h3><p>Antes de decidir, solicita la ruta, modalidad, calendario, tiempo requerido y condiciones de ingreso y cancelación.</p></li>
      <li><span>03</span><h3>Decide con esa información</h3><p>Ritmo cuesta $399 MXN/mes. Esta solicitud inicia una conversación; no confirma tu inscripción ni realiza un cobro.</p></li>
    </ol>
    <div className="entry-request">
      <div><h3>Prepara tu solicitud de ingreso</h3><p>El botón abre un mensaje para uHüb. Puedes editarlo en WhatsApp antes de enviarlo.</p>
        {selection.length > 0 && <label className="entry-share"><input type="checkbox" checked={includeSelection} onChange={event => setIncludeSelection(event.target.checked)} />Incluir mi selección del recorrido en el mensaje</label>}
        <blockquote className="entry-message" aria-label="Vista previa de tu mensaje">{message}</blockquote>
      </div>
      <div className="entry-request-action"><a className="button button-primary" href={href.toString()} target="_blank" rel="noreferrer">Abrir solicitud en WhatsApp <Arrow external /></a><p>El mensaje se envía cuando tú lo confirmes en WhatsApp. No es una suscripción a correos.</p></div>
    </div>
    <details className="entry-faq"><summary>¿Y si todavía no quiero solicitar ingreso?</summary><p>Puedes empezar con Lunes 1-1-1: una historia, un reto y una pregunta por correo. La suscripción es gratuita y se completa en Kit.</p><a className="text-link" href={lunesSubscription}>Recibir Lunes 1-1-1 <Arrow external /></a></details>
  </section>;
}
