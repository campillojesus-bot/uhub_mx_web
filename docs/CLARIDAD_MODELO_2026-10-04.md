# Modelo, ciclo y ruta — 4 de octubre de 2026

Rodrigo autorizó los tres ajustes de explicación con «ok dale»: definir el conjunto del modelo, explicar qué representa cada visual y nombrar las opciones como ruta guiada o reto actual.

## Alcance

- Definición compartida por raíz y página de recorrido para evitar diferencias de redacción.
- Contexto del diagrama de capas y de la rueda; explicación de ruta y ciclo junto al zigzag.
- Opciones «Seguir la ruta guiada» y «Trabajar sobre mi reto actual».
- Retomar una etapa no exige repetir la ruta. El acompañamiento sigue teniendo valor aunque no se necesite la ruta guiada.
- Ajustes de espaciado y lectura para los nuevos textos, sin cambiar interacción, ofertas, test ni integraciones.

## Antes / después de cada texto

### src/app/como-lo-hacemos/journey-explorer.tsx

| Antes | Después |
|---|---|
| Descubrir, Aterrizar, Adaptar y Crecer describen el momento del proyecto. Volver no es retroceder. | Descubrir, Aterrizar, Adaptar y Crecer te ayudan a ubicar qué necesitas trabajar. El recorrido es cíclico porque puedes volver a estas etapas cuando cambia tu proyecto o tu situación. Volver no es retroceder.<br><br>La ruta guiada te orienta en la práctica.<br><br>Propone una secuencia de actividades, recursos y acciones para trabajar las etapas. En este mapa puedes explorar ejemplos de cómo sería seguirla o trabajar sobre un reto propio. |
| Seguir la ruta | Seguir la ruta guiada |
| Trabajar mi reto actual | Trabajar sobre mi reto actual |
| Las actividades te orientan. Puedes entrar en la etapa que necesitas y regresar cuando haga falta.<br><br>Partes de un reto propio. Puedes apoyarte en la ruta para revisar una habilidad o retomar una práctica. | Puedes retomar solo la parte que necesitas; volver a una etapa no exige repetir toda la ruta.<br><br>Partes de un reto propio. Puedes apoyarte en la ruta guiada para revisar una habilidad o retomar una práctica. |
| Si sigues la ruta<br><br>Si trabajas tu reto | Si sigues la ruta guiada<br><br>Si trabajas sobre tu reto actual |
| El recorrido que eliges y el acompañamiento que recibes son dos decisiones distintas. Mira cómo se trabaja en cada contexto. | Puedes dejar de necesitar la ruta guiada y seguir encontrando valor en el acompañamiento: revisar decisiones, sostener acciones y construir conexiones. Mira cómo se trabaja en cada contexto. |

### src/app/como-lo-hacemos/page.tsx

| Antes | Después |
|---|---|
| Tu punto de partida<br><br>Puedes seguir la ruta, trabajar sobre lo que hoy necesitas o volver a una etapa. | El modelo de acompañamiento<br><br>El modelo de acompañamiento de uHüb conecta tu situación y tus objetivos con mentores, comunidad, acciones y seguimiento para ayudarte a iniciar, ajustar y sostener lo que emprendes. |
| El punto de partida cambia; la práctica y el acompañamiento le dan continuidad. | El ciclo describe cómo puedes volver a las etapas. La ruta guiada orienta qué hacer en ellas. |

### src/app/page.tsx

| Antes | Después |
|---|---|
| — (definición nueva antes del diagrama) | El modelo de acompañamiento de uHüb conecta tu situación y tus objetivos con mentores, comunidad, acciones y seguimiento para ayudarte a iniciar, ajustar y sostener lo que emprendes. |
| — (texto nuevo) | En este diagrama exploras una parte del modelo: tú, los apoyos que construyes y las instituciones que forman parte de tu entorno. |
| — (texto nuevo) | Las etapas te ayudan a ubicar qué necesitas trabajar ahora. La rueda muestra cómo puedes volver a ellas; la ruta guiada propone actividades y acciones para recorrerlas. |
| Explora una etapa, una acción posible y qué harías si te atoras. Puedes seguir la ruta o trabajar sobre tu reto actual. | Explora una etapa, una acción posible y qué harías si te atoras. Puedes seguir la ruta guiada o trabajar sobre tu reto actual. |

### src/app/model-language.ts

| Antes | Después |
|---|---|
| — (texto nuevo) | El modelo de acompañamiento de uHüb conecta tu situación y tus objetivos con mentores, comunidad, acciones y seguimiento para ayudarte a iniciar, ajustar y sostener lo que emprendes. |

## AGENTS.md — cambios internos

La fecha se actualiza del 3 al 4 de octubre. El encabezado registra la distinción aprobada. Se amplía la definición del modelo, se aclara la flexibilidad del ciclo y se sustituye la etiqueta interna «Temas (rutas)» por «Enfoques según el contexto», para no confundir perfiles y ruta guiada. Se añade una adenda con las cinco definiciones (modelo, etapas, ciclo, ruta guiada y cuadrante) y las reglas de presentación.

Diff exacto del rector:

```diff
diff --git a/AGENTS.md b/AGENTS.md
index 2bbd78d..da0866d 100644
--- a/AGENTS.md
+++ b/AGENTS.md
@@ -1,6 +1,6 @@
 # Documento rector — uhub.mx
 
-**Versión 1.1 · Actualizada el 3 de octubre de 2026** (incluye las diez correcciones y el recorrido interactivo aprobados por Rodrigo)
+**Versión 1.1 · Actualizada el 4 de octubre de 2026** (incluye las diez correcciones, el recorrido interactivo y la distinción entre modelo, ciclo y ruta aprobados por Rodrigo)
 **Responsable:** Rodrigo Campillo
 
 Este documento registra decisiones de uHüb. Las instrucciones explícitas y posteriores de Rodrigo prevalecen. Si falta un dato material, no se inventa; se documenta para revisarlo con él.
@@ -42,7 +42,9 @@ No vendemos contenido. Nos fijamos en cómo actúa la gente: qué sostiene, qué
 
 ## 3. El Modelo uHüb (cómo lo hacemos)
 
-El modelo articula persona, ecosistema y recorrido. Para la visualización de la raíz, las tres capas son **La persona**, **Tu ecosistema** y **Quienes necesitan que avances** (empresas, universidades, cámaras, A.C. y fundaciones). El ciclo de etapas se explica por separado: no es el tercer anillo institucional.
+El modelo es el conjunto del acompañamiento. **El modelo de acompañamiento de uHüb conecta tu situación y tus objetivos con mentores, comunidad, acciones y seguimiento para ayudarte a iniciar, ajustar y sostener lo que emprendes.**
+
+Para la visualización de la raíz, las tres capas son **La persona**, **Tu ecosistema** y **Quienes necesitan que avances** (empresas, universidades, cámaras, A.C. y fundaciones). El diagrama muestra la relación entre la persona, sus apoyos y el entorno institucional; no representa por sí solo todo el modelo. El ciclo de etapas se explica por separado: no es el tercer anillo institucional.
 
 ### 3.1 La persona: lo que crece en ti
 Los cuatro elementos son lo que la persona desarrolla con el tiempo:
@@ -61,7 +63,9 @@ Los cuatro elementos son lo que la persona desarrolla con el tiempo:
 - **Guías y método:** la ruta de etapas.
 
 ### 3.3 El camino: las etapas
-Cíclico, no lineal. Cada quien va a su ritmo. Cada proyecto nuevo o cambio de circunstancias te regresa a una etapa. **Volver no es retroceder.**
+Las etapas ayudan a ubicar qué se necesita trabajar. El recorrido es cíclico porque se puede volver a ellas cuando cambia el proyecto o la situación. Cada quien va a su ritmo. No hay obligación de volver a Descubrir al llegar a Crecer ni de repetir toda la ruta al retomar una etapa. **Volver no es retroceder.**
+
+La **ruta guiada** propone una secuencia de actividades, recursos y acciones para trabajar las etapas. También se puede trabajar directamente sobre un reto propio, con acompañamiento. Dejar de necesitar la ruta guiada no implica dejar de encontrar valor en mentoría, comunidad y seguimiento.
 
 | Etapa | Elemento | El problema que atiende (salió del campo) |
 |---|---|---|
@@ -83,7 +87,7 @@ El primer paso ocurre al inicio; los otros cuatro se repiten durante el acompañ
 
 ### 3.5 Mismo modelo, diferentes formas, temas y personas
 - **Formas:** membresía, programa, taller, nodo.
-- **Temas (rutas):** autoemprender, reemprender, intraemprender, interemprender, autosostenibilidad.
+- **Enfoques según el contexto:** autoemprender, reemprender, intraemprender, interemprender, autosostenibilidad. El perfil orienta el contexto; no equivale a una etapa ni a la ruta guiada.
 - **Personas:** emprendedores, equipos de empresa, socios de cámaras, estudiantes y docentes, asociaciones civiles, ganadores de premios.
 
 ---
@@ -310,3 +314,21 @@ Rodrigo aprobó desarrollar la propuesta de recorrido en `/como-lo-hacemos` y un
 - Dos vistas informativas, membresía y programa A.C., con nombres y destinos claramente identificados. Comparten estructura de acompañamiento, no condiciones comerciales, de acceso ni calendarios. Ritmo sigue con ingreso por confirmar; el programa remite a su convocatoria.
 - Ejemplos explorables por clic/toque y teclado; semántica de pestañas, grupos de elección etiquetados, un panel activo y movimiento reducido. No avance automático, bloqueo de etapas, captura nueva ni simulación presentada como seguimiento real.
 - Esta autorización no cambia el H1 ni los textos bloqueados de la raíz, las cifras, testimonios, fotografías, pagos, privacidad ni integraciones.
+
+## Distinción de modelo, ciclo y ruta (4 de octubre de 2026)
+
+Rodrigo aprobó aclarar la relación entre las partes, conservando el diseño y las interacciones.
+
+| Concepto | Función |
+|---|---|
+| Modelo de acompañamiento | El conjunto: persona, contexto, apoyos, práctica y seguimiento. Explica cómo ayuda uHüb. |
+| Etapas | Descubrir, Aterrizar, Adaptar y Crecer. Orientan qué se necesita trabajar ahora. |
+| Ciclo | La posibilidad de volver a las etapas según las necesidades; no una oferta independiente ni una secuencia obligatoria. |
+| Ruta guiada | Actividades, recursos y acciones sugeridas para recorrer las etapas. |
+| Cuadrante | Contexto de quien emprende (auto, re, intra, inter). No determina etapa, plan ni precio. |
+
+- Antes del diagrama en la raíz: definición explícita del conjunto. Junto a cada visual: explicar qué parte muestra.
+- La raíz conserva título, orden de ocho bloques, tres capas y rueda. El zigzag de profundidad permite explorar ejemplos de práctica; no es otro modelo.
+- Opciones visibles: **Seguir la ruta guiada** y **Trabajar sobre mi reto actual**. Ambas pueden tener acompañamiento. No cambiar valores internos ni integraciones por un ajuste de etiqueta.
+- Una persona puede dejar de necesitar la ruta guiada y seguir aprovechando mentoría, comunidad, conexiones y seguimiento.
+- No se autorizan en esta ronda cambios adicionales de hero, CTA principal, ofertas, cifras, pagos, test o condiciones de acceso.

```

## Verificación

Build y lint correctos. Revisión de las dos páginas en 360, 390 y 1440 px: sin desbordamiento ni palabras partidas en títulos. Opciones con sus nombres nuevos, contenido contextual de Aterrizar y respuesta «Me atoré» comprobados. Capturas de los bloques modificados revisadas en móvil y escritorio. Los cambios no afectan los valores internos de las opciones ni el comportamiento de la simulación.

Cero sustituciones de marca en textos existentes; nuevas menciones visibles con uHüb. Root hero, copy bloqueado, cifras, precios, fotos, SCORE y privacidad conservados. Rama ajustes-raiz-v11, PR hacia v2-modelo; main y producción sin cambios.
