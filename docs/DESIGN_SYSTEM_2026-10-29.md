# Identidad visual y ciclo — 29 de octubre de 2026

Base: e810230, rama `home-paraguas-v2`, PR #4. Se aplica el addendum `prompt_astra_correcciones_design_system.md` y la petición posterior de Rodrigo de recuperar la interacción del ciclo. No se toca main ni producción.

## Decisiones aplicadas

- Mulish servida por Next/font; pesos 300, 400, 600, 700, 800 y 900 para los usos existentes. Tokens oficiales del addendum, alias semánticos y puente para los componentes conservados. No se altera el PNG original.
- Hero vino/carmín; fondo preparado para picture WebP/JPG con prioridad alta. No se pide un archivo inexistente. La foto real queda pendiente.
- H1/H2 en caja alta por CSS, texto original conservado; cifras con tamaño/peso propio. Botones de acción en píldora, foco visible y movimiento reducido.
- Origen papel, modelo menta, historia rosa, continuidad carmín/vino, footer vino. Header sin CTA duplicado; se mantiene la entrada de Personas para no perder una audiencia en páginas internas.
- Ciclo interactivo por clic, toque y teclado, con una etapa activa y un ejemplo por contexto. Contextos: proyecto/trabajo, empresa/cámara, universidad, A.C./fundación. Los ejemplos no son promesas ni condiciones de una oferta. El enlace al recorrido lleva la etapa seleccionada y no transporta datos personales.
- La interacción completa, tres capas, Brújula, formularios y puntuaciones se conservan. Los cambios de Brújula y test son solo valores visuales de color y glifos.
- Cynthia integrada con el retrato ya presente en el repositorio, después de inspeccionarlo. Narración de trayectoria autorizada en el adjunto, sin comillas inventadas. Se atribuye al programa AWE / uHüb A.C. El enlace lleva al capítulo real de programas en Nosotros, no a una nueva página vacía ni a un enlace externo que no se pudo verificar.
- Footer: «Primero la persona. Luego el negocio.»; flechas de navegación unificadas en →, sin cambiar destinos ni valores enviados a integraciones.

## Adaptaciones razonadas

| Solicitud del adjunto | Implementación y motivo |
|---|---|
| Solo hover en la rueda | La petición posterior de Rodrigo pide explicar situaciones. Se añade clic/toque/teclado y un panel breve; hover por sí solo no funciona en móvil. |
| «Porque primero cambia la persona, después el negocio» | Se conserva el subtítulo concreto que incluye persona/equipo/comunidad. La frase de marca vive en el footer como principio; no se vuelve una secuencia causal universal. |
| 97% de continuidad | No se publica todavía. Falta denominador, población, cohorte y fecha de medición. Se usa el recuento de 953 sesiones indicado en el mismo addendum. |
| +1,300 participaciones | Se publica como participaciones en actividades abiertas desde 2016, con atribución a uHüb A.C. No personas únicas. |
| 953 sesiones | Desde 2023, corte octubre de 2026, distinto del recuento de participaciones. No se suman ni se adjudican a la membresía. |
| Cifras «verificadas» | Los valores provienen de la corrección suministrada por Rodrigo. No se adjuntó el informe completo en esta ronda; no se afirma auditoría independiente. Se retiran 600/+2,000 del render de portada. |
| Gray-500 en texto de 14px | Se conserva el token, pero las notas de lectura usan slate para evitar contraste insuficiente sobre blanco. |
| Eliminar Emprendedores del header | Se quita el CTA redundante; la entrada «Personas» conserva acceso a Emprende Diario, MentorClass y test junto a las demás audiencias. |
| Foto de Cynthia pendiente | Ya existe `public/images/cynthia-pinon.webp`; se usa el archivo real, no un avatar. |
| Ver más historias | No se crea un destino vacío ni se reactivan otros testimonios sin autorización. El enlace dice exactamente lo que encontrará: historia de los programas en Nosotros. |

## Antes y después

El diff literal de copy está en `DESIGN_SYSTEM_COPY_2026-10-29.md`. Se conserva el historial anterior; estas decisiones prevalecen sobre la portada estática y la paleta del brief previo.

## Pendientes reales

- Foto real del hero (acompañamiento), que Rodrigo actualizará después.
- Informe completo y base del 97% si se desea usar esa tasa.
- Texto legal y condiciones comerciales/autorizadas; enlace Stripe aún no recibido en este checkout. No se redactan ni inventan.
- La suscripción de Kit y captura del test no se envían en QA; no se afirma recepción en Sheets.

## Validación

Lint y build/TypeScript locales correctos. La validación remota y visual se registra en el PR para que apunte al commit exacto y no requiera un commit circular de documentación.
