# Retos, orientación y siguiente paso

Implementación autorizada por Rodrigo el 28 de octubre de 2026.
Base: `ajustes-raiz-v11`, commit `cc774ed6f526e8d9f59ff284fe21308ad77dd7b9`.
Rama de entrega: `mejora-retos-continuidad`. No se modifica `main` ni se autoriza producción.

## Qué cambia y por qué

El visitante podía explorar el modelo sin llevar su elección al siguiente paso. Ahora un reto abre un ejemplo en el recorrido existente; la Brújula explica su orientación y abre la etapa correspondiente; Emprende Diario conserva la selección en una solicitud que se puede revisar y excluir antes de abrir WhatsApp.

No se construye un tercer diagnóstico ni se obliga a pasar por cuestionarios. Se conservan las cuatro puertas, el hero aprobado, las etapas, la ruta guiada, el trabajo sobre reto propio, el test y las integraciones existentes.

## Textos existentes: antes y después

| Archivo / ubicación | Antes | Después |
|---|---|---|
| `src/app/page.tsx`, muestra del recorrido | Explora una etapa, una acción posible y qué harías si te atoras. Puedes seguir la ruta guiada o trabajar sobre tu reto actual. | Parte de lo que necesitas hoy: poner una idea a prueba, sostener tus acciones, retomar o colaborar. Explora una acción posible y qué harías si te atoras. |
| `src/app/page.tsx`, enlace | Explora cómo sería tu recorrido | Explora el recorrido desde tu reto |
| `src/app/brujula/BrujulaExperience.tsx`, opción 3 de la escala accesible | A veces | Algo |
| Brújula, copiar | Copiar diagnóstico y acciones | Copiar resultado y acciones |
| Brújula, enlace de cierre | Conoce Emprende Diario | Conocer las opciones de ingreso |
| `src/app/organizaciones/page.tsx`, CTA del hero | Cuéntanos qué necesita tu equipo | Solicitar una propuesta |
| Organizaciones, CTA del cierre | Hablar con uHüb | Solicitar una propuesta |
| `src/app/organizaciones/osc/page.tsx`, hero y cierre | Agenda una conversación | Solicitar una conversación |

### Aviso de la Brújula

**Antes:** Prototipo orientativo de autopercepción, no un instrumento psicométrico validado ni una medición de impacto. Tus respuestas no se envían ni se guardan en un servidor desde esta página. La brújula no sustituye /test ni la conversación con un mentor.

**Después:** Es un punto de partida basado en tus respuestas, no una evaluación validada ni una medición de impacto. Tus respuestas y puntuaciones se calculan en este navegador y no se envían ni guardan en un servidor. Si continúas al recorrido, llevamos solo el área, la situación y el apoyo elegidos; no tus respuestas ni puntuaciones. El resultado no determina tu perfil ni un plan de pago.

## Contenido añadido (antes no existía)

- **Recorrido:** pregunta «¿Qué quieres resolver hoy?» con cuatro situaciones: poner una idea a prueba, sostener mis acciones, retomar o cambiar de rumbo, impulsar una iniciativa con otros. Cada elección explica por qué abre un ejemplo; nunca bloquea las otras etapas. El texto completo de situaciones y motivos está en `src/lib/journey-context.ts`.
- **Brújula:** «¿Por qué aparece esta área?» explica el promedio, muestra las dos respuestas de esa dimensión y aclara los empates. «¿Qué te ayudaría a ponerlo en práctica?» ofrece cuatro apoyos opcionales y sin puntuación: aclarar el siguiente paso, hacer espacio en la semana, practicar una habilidad o revisarlo con alguien. Las sugerencias están en el mismo catálogo. «Explorar mi siguiente paso» abre la etapa elegida, manteniendo el apoyo opcional.
- **Recorrido → continuidad:** «¿Quieres trabajar esto con continuidad?» explica el destino. «Conocer mis opciones de ingreso» conduce a Emprende Diario. Lunes 1-1-1 queda como enlace secundario opcional.
- **Emprende Diario:** «¿Llegas por primera vez?» aclara que se puede solicitar ingreso sin ser egresado. Tres pasos: compartir punto de partida, confirmar cómo participaría y decidir con esa información. No se inventa disponibilidad, horario, cancelación ni acceso automático.
- **Solicitud:** «Prepara tu solicitud de ingreso» muestra el mensaje completo, permite excluir la selección previa y abre WhatsApp sin enviarlo. El texto de precio continúa en $399 MXN/mes. La solicitud no inscribe, cobra ni suscribe a correos.
- **Personas que aún exploran:** la pregunta «¿Y si todavía no quiero solicitar ingreso?» conduce al formulario existente de Kit. No promete una MentorClass con fecha sin confirmar.
- **Instituciones:** se explica qué incluir en el mensaje y para qué. Se conservan las landings y el contacto comercial de Manuel para cotizar talleres.

## Cambios de destinos y mensajes

| Elemento | Antes | Después |
|---|---|---|
| Enlace del recorrido en home | `/como-lo-hacemos#etapas` | `/como-lo-hacemos#tu-reto` |
| Ingreso de Ritmo, hero y precio | WhatsApp directo | `#ingreso`: explica proceso y prepara mensaje editable |
| Brújula → recorrido | Enlace genérico en introducción | Se conserva; se añade resultado → etapa y apoyo elegidos |
| Recorrido → Emprende Diario | Enlace genérico en contexto membresía | Se conserva; se añade CTA con la selección del explorador |
| Contacto institucional | Saludo y tipo de institución | Saludo contextual + institución, reto, participantes y calendario por completar en WhatsApp |

**Mensaje nuevo de ingreso:**

> Hola, quiero solicitar mi ingreso a Ritmo de Emprende Diario.
>
> [La selección opcional se muestra aquí: reto, etapa, situación y apoyo; nunca respuestas o puntuaciones.]
>
> Antes de inscribirme, quiero confirmar mi opción de ingreso, la ruta, la modalidad, el calendario y las condiciones.

La nota entre corchetes es explicación interna; no se publica. Si no hay selección o se excluye, el mensaje contiene solo saludo y solicitud de condiciones.

**Contacto institucional:** Empresas comienza «Hola, represento una empresa y quiero solicitar una propuesta de uHüb para mi equipo.»; Universidades comienza «Hola, represento una universidad y quiero solicitar la propuesta de formación docente de uHüb.». Cámaras, OSC y fundaciones conservan sus saludos existentes. Todos estos enlaces incorporan la misma preparación:

> Institución:
> Reto que queremos trabajar:
> Quiénes participarían:
> Calendario que tenemos en mente:
>
> Queremos confirmar el alcance, el formato y la inversión antes de decidir.

## Interacción y revisión

- Brújula: al ver resultado o editar, el foco y el desplazamiento van al título del panel, no al principio de toda la página. Se respeta movimiento reducido.
- Puntuación: ocho preguntas, acciones, promedios y selección de empates conservados. El apoyo opcional no cambia resultados.
- URL: solo valores de catálogos permitidos. Se ignoran parámetros ajenos; no se envían respuestas, puntuaciones ni datos de contacto. Sin base de datos ni almacenamiento persistente nuevo.
- Estilos: acentos de la Brújula alineados a la marca, controles de al menos 44 px y estados de selección legibles. No se cambian fotografías.
- Nuevas pruebas de recorrido: 360, 390 y 1440 px, teclado, cambio libre de etapa, continuidad del contexto, exclusión del resumen y parámetros desconocidos. Se actualizan las pruebas existentes de Brújula para su foco y copy nuevos.
- CI se activa también en PR hacia `ajustes-raiz-v11` o `v2-modelo`; Playwright queda versionado en dependencias de desarrollo.

## Pendientes que no se inventaron

- Stripe, calendario, tiempo semanal, ingreso definitivo y condiciones de cancelación de Ritmo.
- Aviso autorizado antes de añadir una captura propia nueva.
- Responsable y capacidad operativa de seguimiento de interesados; la web prepara mensajes, no automatiza la atención.
- Prueba real de recepción en Sheets y conexión de los registros con Kit. No se enviaron suscripciones ni solicitudes durante la revisión.

No hay reemplazos globales de marca; el copy nuevo usa uHüb. URLs, archivos, identificadores, test, Google Forms y Kit se conservan.
