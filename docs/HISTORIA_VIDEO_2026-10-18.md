# Historia de la A.C. y video de Rodrigo · 18 de octubre de 2026

Rama: `ajustes-raiz-v11`. PR #2 hacia `v2-modelo`. Sin cambios en main ni producción.

## Base del contenido

Rodrigo confirmó la aceptación del grant y el requisito de una A.C. en 2018, y la constitución en 2019. Pablo había propuesto una A.C. y una S.C.; no se afirma que la S.C. se constituyera. No se asigna fecha de inicio a AWE.

Grabación original revisada: `AMEX Storytelling Rodrigo.mov`, 4:36, en inglés, participación en American Express Leadership Academy. El cierre incluye comentarios del público. El relato gira en torno a la resistencia inicial de Rodrigo a crear una asociación civil, la oportunidad que lo llevó a reconsiderarlo, la adaptación y el valor de habilidades y mentores.

La miniatura procede del segundo 125 del original. No es una imagen generada. La página abre el enlace que proporcionó Rodrigo: https://youtu.be/SQEgU2qCA3M . Sin reproducción automática ni rastreadores de un reproductor incrustado.

## Título propuesto para YouTube

No estaba en el plan: así nació uHüb A.C. | Rodrigo Campillo

## Descripción propuesta para YouTube

Crear una asociación civil no estaba en mis planes. De hecho, cuando mi socio Pablo lo propuso, yo no estaba convencido.

En esta participación en American Express Leadership Academy comparto cómo una oportunidad nos llevó a reconsiderar el rumbo de uHüb: de un coworking y una comunidad emprendedora a dar también el paso hacia una asociación civil.

Es una historia sobre cambiar de opinión, adaptarnos cuando los planes cambian y reconocer el valor de las habilidades y los mentores para seguir adelante. Algo que también vivimos quienes acompañamos a otros a emprender.

Soy Rodrigo Campillo, fundador de uHüb, Centro de Desarrollo Emprendedor.

La participación es en inglés e incluye comentarios del público al final.

Recibe Lunes 1-1-1: una historia, un reto y una pregunta para avanzar cada semana.
https://uhub.kit.com/b3786d63e8

Estas propuestas no se han guardado en YouTube: se entregan a Rodrigo para editar los metadatos de su video.

## Cambios de copy: antes y después

En el diff siguiente, cada línea con `-` es el antes y cada línea con `+` es el después. Las líneas añadidas sin equivalente anterior son contenido nuevo. Incluye los párrafos históricos, navegación, título y descripción del video, idioma, duración, CTA y texto alternativo. No se cambió el copy bloqueado de la raíz.

```diff
diff --git a/src/app/nosotros/page.tsx b/src/app/nosotros/page.tsx
index d0e395c..cd8bfde 100644
--- a/src/app/nosotros/page.tsx
+++ b/src/app/nosotros/page.tsx
@@ -40,7 +40,15 @@ const chapters = [
   },
   {
-    date: "2019 en adelante", id: "programas", title: "El acompañamiento tomó estructura.",
+    date: "2018–2019", id: "asociacion-civil", title: "Nace uHüb A.C.",
     paragraphs: [
-      "En 2019 se constituyó uHüb A.C. La colaboración con el Consulado de Estados Unidos y AWE abrió una primera oportunidad para ampliar la formación y las mentorías. Después se sumaron otras alianzas, entre ellas FECHAC, y programas para personas con distintos contextos y barreras para emprender.",
+      "La idea de contar con una asociación civil ya estaba sobre la mesa. Pablo, entonces socio de uHüb, había propuesto tener una A.C. y una S.C.",
+      "En 2018 nos aceptaron para recibir un apoyo económico, un grant. Para poder recibirlo, nos indicaron que necesitábamos constituirnos como asociación civil. Aquella oportunidad impulsó una decisión que ya habíamos conversado.",
+      "En 2019 se constituyó uHüb A.C. Esa es la fecha de nacimiento de la asociación; la comunidad y el coworking ya tenían su propio recorrido.",
+    ],
+  },
+  {
+    date: "Las alianzas y los programas", id: "programas", title: "El acompañamiento tomó estructura.",
+    paragraphs: [
+      "La colaboración con el Consulado de Estados Unidos y AWE abrió una oportunidad para ampliar la formación y las mentorías. Después se sumaron otras alianzas, entre ellas FECHAC, y programas para personas con distintos contextos y barreras para emprender.",
       "La pandemia volvió a poner a prueba el proyecto. Cambiaron la operación, las relaciones y el equipo. De los diez socios iniciales fuimos pasando a otra estructura; también vivimos la pérdida de un socio. Mantener uHüb implicó revisar decisiones y adaptar la forma de trabajar.",
       "El acompañamiento a organizaciones, como el trabajo de intraemprendimiento con FICOSEC, amplió el campo de aplicación: personas que quieren innovar y generar recursos desde una institución también necesitan probar ideas, aprender y darles seguimiento.",
@@ -84,4 +92,5 @@ export default function AboutPage() {
           <a href="#origen">El origen</a>
           <a href="#coworking">El coworking</a>
+          <a href="#asociacion-civil">Nace la A.C.</a>
           <a href="#modelo">Cómo nació el modelo</a>
           <a href="#hoy">Dónde estamos hoy</a>
@@ -95,4 +104,19 @@ export default function AboutPage() {
                 <h2>{chapter.title}</h2>
                 {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
+                {chapter.id === "asociacion-civil" && (
+                  <a className="history-archive history-talk" href="https://youtu.be/SQEgU2qCA3M" target="_blank" rel="noreferrer">
+                    <span className="history-talk-media">
+                      <img src="/images/rodrigo-american-express.webp" alt="Rodrigo Campillo compartiendo su historia en American Express Leadership Academy." width="1280" height="720" loading="lazy" />
+                      <span className="history-talk-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
+                    </span>
+                    <span>
+                      <small>American Express Leadership Academy</small>
+                      <strong>No estaba en el plan.</strong>
+                      <span>Rodrigo cuenta por qué cambió de opinión sobre crear una asociación civil y qué aprendió al hacerlo.</span>
+                      <span className="history-talk-meta">En inglés · 4:36 · Incluye comentarios del público</span>
+                      <span className="history-talk-link">Ver la charla en YouTube <Arrow external /></span>
+                    </span>
+                  </a>
+                )}
                 {chapter.id === "programas" && (
                   <figure className="history-photo-wide">
```

## Archivos

- `src/app/nosotros/page.tsx`: hito propio de la A.C. y acceso al video; AWE conserva su capítulo y foto.
- `src/app/root-home.css`: presentación responsiva de la miniatura, botón de reproducción visual, foco visible y movimiento reducido.
- `public/images/rodrigo-american-express.webp`: fotograma real comprimido.
- `AGENTS.md`: fechas confirmadas, alcance histórico y uso autorizado de la grabación.
- Este documento: copy propuesto, fuentes y antes/después.

No se modifica la Brújula, el test, formularios, ofertas ni pagos.

## Verificación de esta revisión

- `npm run lint` y `npm run build`: correctos.
- Chromium sobre compilación de producción: 360, 390 y 1440 px, respuesta 200, imagen cargada, URL de YouTube exacta, foco visible, sin desbordamiento horizontal ni errores de JavaScript.
- Inspección visual de las capturas en móvil y escritorio: miniatura y texto legibles.
- Se conserva la foto de AWE y el ancla `#programas`.
- La reproducción en YouTube y sus metadatos no se han modificado ni se presentan como una prueba realizada por el sitio.
