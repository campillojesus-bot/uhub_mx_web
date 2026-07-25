# uHub — Design System

uHub es una marca paraguas con dos rostros bajo una sola identidad visual:

- **uHub AC** — programa social de 12 meses (Chihuahua y Ciudad Juárez, próximamente otros estados). Donataria Autorizada, financiada por fundaciones. 550+ emprendedores acompañados en 10 años.
- **uHub Business / Emprende Diario** — membresía digital de acompañamiento emprendedor sin límite geográfico, en expansión nacional, más venta de programas de competencias emprendedoras a organizaciones de la sociedad civil y universidades.

Nunca se crea un sistema visual separado para AC vs Business — es la misma identidad; solo cambia el logo de contexto (uHub paraguas para lo institucional/AC, círculo de Emprende Diario para el producto comercial).

## Fuentes usadas

- `manual_marca_uhub_v1_3.docx` — Manual de Marca v1.3 (julio 2026): fundamentos estratégicos, arquitectura de marca, mensajes, audiencia, canales, pilares de contenido, bios, identidad visual.
- `uHub_Master_Narrative_v1_1.docx` — Master Narrative v1.1 (julio 2026): historias de origen, WHY, Golden Circle x3, guiones por escenario, módulos LEGO, anti-patrones.
- `UHUB_desarrollo de marca (1).pdf` — deck de desarrollo de marca y estrategia digital: tipografía, dirección de imagen, y el Proceso Emprendedor (Viajero → Emprendedor → Empresario).
- Logos subidos por el usuario: `Logo Uhub CDE.png`, `Logo Uhub blanco.png`, `Logo uHub center.jpg`, `Logo Emprende diario.jpeg` (en `assets/`).
- **GitHub repo [`campillojesus-bot/uhub_mx_web`](https://github.com/campillojesus-bot/uhub_mx_web)** — conectado y explorado. Contiene dos páginas reales: `index.html` (Emprende Diario, uhub.mx) y `uhub-institucional.html` (uHub AC, uhub.org.mx), copiadas sin modificar a `uploads/repo-reference/` para consulta. Se usaron como fuente de **patrones de UI** (header sticky, hero, pricing cards, FAQ accordion, stats grid, testimonial cards, cycle diagram) — ver `SiteHeader`, `PricingCard`, `FAQAccordion` abajo.
  - **Conflicto de color/tipografía detectado**: el código del repo usa dos paletas distintas entre sus dos páginas (`index.html`: rojo `#C0182A` + Barlow Condensed/Barlow; `uhub-institucional.html`: rojo `#E30613` + Nunito Sans) — ninguna coincide con el rojo `#B81632` ni con Avenir Next que especifica el Manual de Marca v1.3. Como el Manual es el documento de marca canónico y el repo son dos implementaciones inconsistentes entre sí, este sistema usa los **colores y tipografía del Manual** (fuente de verdad de identidad) y los **patrones de UI/estructura del repo** (fuente de verdad de código real), tal como se pidió. Flag para Rodrigo: decidir cuál paleta de código es la vigente, o alinear el repo al Manual.

## Índice

- `styles.css` — entry point (importa `tokens/*.css` y `base.css`)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`
- `assets/` — logos (`logo-uhub-primary.png`, `logo-uhub-white.png`, `logo-uhub-lockup.jpg`, `logo-emprende-diario.jpeg`) y `fonts/` (Montserrat, Inter variable — ver Tipografía)
- `guidelines/` — specimen cards: `colors/`, `type/`, `spacing/`, `brand/`
- `components/core/` — Button, Badge, Tag, Input, Card
- `components/marketing/` — Hero, CredibilityBand, StatCallout, DiferenciadorCard, ProcessDiagram, CircunstanciaCard, TestimonioCard, LineaTematicaCard, CierreInstitucional
- `ui_kits/uhub-ac/` — recreación de la home institucional (uhub.org.mx)
- `ui_kits/emprende-diario/` — recreación de la home comercial (uhub.mx) con test del cuadrante interactivo
- `SKILL.md` — versión portable para Claude Code / Agent Skills

### Components

| Componente | Grupo | Uso |
|---|---|---|
| Button | core | CTA primario/secundario/ghost/onDark |
| Badge | core | Pill de estado — único lugar donde el naranja se usa como fill |
| Tag | core | Chip neutro de metadata |
| Input | core | Campo de formulario (captura de correo) |
| Card | core | Superficie genérica |
| Hero | marketing | Foto + overlay oscuro + H1 + doble CTA |
| CredibilityBand | marketing | Banda oscura, una línea de cifras separadas por "·" |
| StatCallout | marketing | Número grande + etiqueta, en grupos de 3-4 |
| DiferenciadorCard | marketing | Comparación NO ES / SÍ ES |
| ProcessDiagram | marketing | Pasos numerados circulares (4 base, 5 para AC con Consolidar) |
| CircunstanciaCard | marketing | Punto de color + título + descripción, sin foto |
| TestimonioCard | marketing | Avatar iniciales + quote + resultados |
| LineaTematicaCard | marketing | Border-left — único uso aprobado de ese motivo |
| CierreInstitucional | marketing | Bloque de cierre oscuro con CTA |
| PricingCard | marketing | Plan/precio — badge, precio, checklist, CTA (patrón real del repo) |
| FAQAccordion | marketing | Acordeón de una sola apertura (patrón real del repo) |
| SiteHeader | navigation | Header sticky — logo, nav links, CTA (patrón real del repo) |

**Intentional additions:** no se encontró un Figma ni codebase de componentes (GitHub no conectado), así que el inventario se construyó a partir de los "Patrones de UI ya validados" que el propio Manual de Marca §8.5 enumera explícitamente, más un set mínimo de primitivas de formulario/CTA necesarias para que esos patrones funcionen (Button, Input, Card, Badge, Tag).

## CONTENT FUNDAMENTALS

**Mantra:** "Primero la persona. Luego el negocio."

**Tono:** directo sin ser grosero, reflexivo con filo (frases cortas que obligan a pensar), humano sin cursilería, honesto sobre lo difícil, con postura clara ante el mercado. Nunca neutral — tiene opiniones sobre coaches, cursos y fórmulas rápidas.

**Regla de apertura:** nunca abrir con una cifra. Siempre abrir con una persona o una historia; los datos van después ("las historias activan emoción, las estadísticas activan escepticismo").

**Persona vs. tú:** el mensaje habla directo a "tú" (el emprendedor), nunca en tercera persona distante. Ejemplo: *"El problema no es arrancar. Es volver."*

**Frases territorio (repetir, no parafrasear):**
- "Emprender no es un evento. Es un hábito que se sostiene."
- "El cambio que emprender exige no ocurre solo."
- "Primero la persona. Luego el negocio."
- "Sabes qué hacer. No lo haces."
- "Personas sobre proyectos. Proceso sobre evento. Permanencia sobre arranque."

**Frases prohibidas:** "Desbloquea tu potencial", "Transforma tu vida", "La vida que mereces", "Libertad financiera", "Deja de ser empleado", "El momento es ahora", cualquier promesa de resultado numérico específico ("$10K en 90 días"), cualquier apelación al miedo ("si no actúas, te quedarás atrás").

**Reglas específicas de uHub AC** (material institucional/funders): nunca "empoderar", "sinergia", "soluciones integrales", "holístico", "disruptivo", "ecosistema virtuoso", "pitch". Nunca cuantificar vulnerabilidad como porcentaje — describir circunstancias concretas ("mujeres que sostienen su casa solas", no "mujeres vulnerables"). Un solo "Sistema", nunca "programas" en plural; las líneas temáticas van subordinadas al Sistema, nunca al mismo nivel.

**Emoji:** máximo 1-2 por post, solo cuando aportan claridad visual. Nunca cohetes, dinero o fuego.

**Voz por capa:** Rodrigo Campillo (persona) narra y humaniza; uHub (marca paraguas) estructura; Emprende Diario (producto) convierte; Red uHub (comunidad) multiplica. Cada capa firma como sí misma — nunca se mezclan.

## VISUAL FOUNDATIONS

**Color:** el sistema se lee rojo (`#B81632`) y gris oscuro (`#474855`) — son los dominantes. Gris medio (`#8C8F94`) y gris claro (`#F2F2F2`) para texto secundario/fondos. Acentos secundarios de **uso limitado**: naranja `#F26D3D` (solo badges y detalles, nunca CTA primario ni color dominante), burgundy `#6D1F30` (alterna con el rojo en diagramas de proceso), rosa suave `#F0D3D8` (fondo de sección alterno), azul `#1B809E` (uso mínimo). Máximo 1-2 colores de fondo por documento/deck.

**Tipografía:** Avenir Next es la especificación de marca (Black/Heavy para títulos, Book para cuerpo) — no se recibieron los archivos con licencia, así que este sistema usa el fallback web que el propio manual aprueba: **Montserrat** (títulos, 800/900) + **Inter** (cuerpo, 400-600), ambas variables y auto-hospedadas en `assets/fonts/`. *Flag: si consigues los archivos reales de Avenir Next, reemplaza `tokens/fonts.css` y las referencias en `typography.css`.*

**Fondos:** sólidos, nunca degradados. Full-bleed en heroes con foto + overlay oscuro `rgba(71,72,85,.72)`. Franjas de color plano para separar secciones (gris claro, rosa suave).

**Fotografía:** solo personas reales, principalmente mujeres, edades diversas, en ambientes de trabajo/mentoría. Tono digno y aspiracional — nunca pobreza, victimización, stock genérico ni clipart. Sin foto real disponible → bloque de color de marca con tipografía, nunca un placeholder gris.

**Ilustración:** flat design, paleta de marca, ambos sexos, ambientes laborales — solo para conceptos abstractos/procesos.

**Animación:** no se especifica ningún sistema de animación en las fuentes; el sistema es predominantemente estático. Si se anima, mantenerlo mínimo (fades simples), nunca rebotes ni efectos 3D.

**Hover / press:** los botones cambian a un tono sólido más oscuro (`--cta-primary-bg-hover` / `-active`) — nunca opacidad, nunca sombra extra, nunca escalado.

**Bordes y sombras:** sombra de card mínima y sutil (`0 1px 3px rgba(71,72,85,.12)`), nunca relieve, brillo ni efectos 3D. Sin degradados en ningún elemento.

**Border-left de color:** su único uso aprobado es `LineaTematicaCard` (líneas temáticas del programa AC) — evitar el motivo genérico de "card con borde izquierdo de color" en cualquier otro contexto.

**Radios de esquina:** `--radius-sm` 4px (chips), `--radius-md` 8px (botones/inputs), `--radius-lg` 12px (cards), `--radius-pill` para badges/pills.

**Cards:** fondo blanco, borde sutil 1px (`--border-subtle`), radio 12px, sombra mínima. Sin borde de color salvo `LineaTematicaCard`.

**Layout:** mobile-first, ancho de contenido máximo `--max-content-width` 1200px, targets táctiles mínimo 44×44px, contraste WCAG 2.1 AA obligatorio en toda combinación color/texto.

**Transparencia / blur:** el único uso de transparencia es el overlay oscuro sobre foto en `Hero` (`rgba(71,72,85,.72)`) — no hay blur/glassmorphism en ninguna fuente.

**Restricciones técnicas adicionales:** sitios con tráfico de Google Ad Grants deben evitar páginas "en construcción", no depender de PDFs para contenido principal, HTTPS en todo, imágenes optimizadas (WebP, <200KB, lazy loading). CTAs de donación siempre a página propia `/donar`, nunca pasarela externa directa desde home.

## ICONOGRAPHY

No se encontró un set de iconos, sprite ni icon font en las fuentes recibidas (no hay acceso al repo de GitHub). Los patrones validados (§8.5) usan únicamente **glifos tipográficos simples** (✓ / ✕ en `DiferenciadorCard`, puntos de color en `CircunstanciaCard`/`LineaTematicaCard`, círculos numerados en `ProcessDiagram`) — no íconos ilustrados. No se usa emoji como ícono (ver reglas de emoji arriba). Si conectas el repo o Figma, reemplaza estos glifos por el sistema de íconos real del sitio; hasta entonces, cualquier necesidad de un ícono más elaborado en un UI kit debería usar una librería CDN de trazo simple (p. ej. Lucide) y marcarse como sustitución.

## Caveats / Pendientes

- **GitHub no conectado**: `campillojesus-bot/uhub_mx_web` no se pudo leer en esta sesión — ningún componente aquí viene del código real del sitio. Conecta el repo y pide una pasada de refinamiento para alinear valores exactos (paddings, radios, breakpoints) con el código de producción.
- **Tipografía sustituida**: Avenir Next → Montserrat/Inter (fallback ya aprobado por el manual, pero no es la fuente de marca real). Sube los archivos con licencia si los tienes.
- **Mensaje madre de marca sin resolver**: el propio Manual v1.3 documenta que existen 4 redacciones distintas del mensaje madre de uHub sin decisión final — este sistema usa "El cambio que emprender exige no ocurre solo" como la más citada, pero es una decisión pendiente del lado de Rodrigo, no mía.
- **Sin Figma**: todos los componentes son interpretaciones del Manual de Marca §8.5, no una recreación pixel-perfect de código existente.

¿Quieres que itere sobre algo específico — conectar el repo, ajustar el inventario de componentes, o construir más pantallas de los UI kits?
