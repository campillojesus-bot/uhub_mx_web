# Recorrido interactivo — 3 de octubre de 2026

Autorizado por Rodrigo: «va me agrada, hazlo y sorprendeme». Implementa la propuesta de ruta en zigzag, recorrido sugerido o reto propio, ejemplo de seguimiento y vistas diferenciadas de membresía/A.C.

Rama: ajustes-raiz-v11. Base del PR: v2-modelo. No se modifica main ni producción.

## Qué cambia

- /como-lo-hacemos pasa de rueda y lista a explorador de cuatro etapas en zigzag. La rueda de la raíz y ambos archivos CycleWheel se conservan.
- La persona puede explorar libremente las cuatro etapas y alternar ruta/reto actual. Cada combinación muestra situación, trabajo, acción, evidencia, mentoría y conexiones.
- La simulación «La probé / Me atoré» muestra dos formas de revisar una acción. Está identificada como ejemplo y no captura ni registra avances reales.
- Las vistas de membresía y programa A.C. comparten estructura, pero mantienen nombres, destinos y condiciones separados. Rodrigo aparece como mentor base actual de la membresía.
- Consolidar permanece complementaria fuera del mapa de cuatro etapas. SCORE se conserva en profundidad con atribución original.
- La raíz incorpora una muestra textual y acceso al explorador. No se aplican los demás cambios propuestos en el análisis anterior (jerarquía CTA, hero, newsletter o puertas).

## Antes y después de textos existentes

| Archivo / lugar | Antes | Después |
|---|---|---|
| page.tsx raíz / enlace | Ver cómo lo hacemos | Explora cómo sería tu recorrido |
| page.tsx raíz / apoyo nuevo | — | Explora una etapa, una acción posible y qué harías si te atoras. Puedes seguir la ruta o trabajar sobre tu reto actual. |
| Enlace raíz / destino | /como-lo-hacemos | /como-lo-hacemos#etapas |
| Profundidad / metadata | La persona, su ecosistema y un recorrido cíclico: descubre cómo funcionan las cuatro etapas y el seguimiento semanal de uHub. | Explora el modelo de acompañamiento de uHub: cuatro etapas, una ruta o tu reto actual, mentores y acciones. Conoce cómo se vive en la membresía y en el programa A.C. |
| Profundidad / antetítulo hero | El Modelo uHüb | El Modelo uHüb / Un recorrido que puedes explorar |
| Profundidad / aside | Tres capas · Persona · ecosistema · camino | Tu punto de partida. Puedes seguir la ruta, trabajar sobre lo que hoy necesitas o volver a una etapa. Tu situación → Tu siguiente acción → Lo que aprendes ↺. El punto de partida cambia; la práctica y el acompañamiento le dan continuidad. |
| Profundidad / antetítulo etapas | Un recorrido cíclico | 01 / Elige tu recorrido |
| Profundidad / antetítulo práctica | Lo que ocurre entre sesiones | La práctica se repite |
| Profundidad / acceso al contenido existente | Cinco pasos mostrados completos | Ver la dinámica de seguimiento + (desplegable con los cinco textos originales) |

H1, introducción, título y explicación del ciclo, los cinco pasos de práctica, SCORE, Consolidar y cierre: textos preservados. Los textos de la antigua rueda dejan de mostrarse en esta página; el componente y sus textos permanecen intactos en el repositorio. Su sustitución es el nuevo contenido por etapa inventariado abajo.

## Textos de la rueda que dejan de mostrarse aquí

- Mentalidad y propósito
- Encuentras el porqué que sostiene todo lo demás. Sin propósito claro, el negocio no aguanta.
- Habilidades y modelo de negocio
- Conviertes la idea en un modelo que funciona. Aprendes lo que hay que aprender, sin adornos.
- Disciplina y hábitos
- Sostienes el movimiento cuando la motivación baja. Emprender no es un evento: es un hábito.
- Liderazgo y crecimiento
- Escalas lo que ya funciona y empiezas a guiar a otros. Creces sin perder el propósito.
- Rueda del Ciclo de Cambio Emprendedor uHüb
- uHüb
- propósito · motor
- Haz clic en cada etapa de la rueda.

## Textos nuevos del explorador (antes: no existían)

Los textos dinámicos se registran como partes; el nombre de etapa completa las etiquetas «Explorar la etapa [nombre]», «Mi acción / [nombre]» y los antetítulos. No se cambiaron nombres de perfiles, marcas legales ni valores de integración.

### src/app/como-lo-hacemos/journey-data.ts

| Antes | Después (texto nuevo) |
|---|---|
| — | Descubrir |
| — | Fuego |
| — | Mentalidad y propósito |
| — | ¿Qué quieres poner en movimiento? |
| — | Tienes ganas de empezar o de volver, pero todavía necesitas elegir por dónde. |
| — | Exploras tus motivos, tus recursos y una necesidad que te interesa atender. |
| — | Revisas qué cambió en tu contexto y qué reto merece tu atención ahora. |
| — | Hablar con una persona que vive el problema que quiero atender. |
| — | Conversar con alguien de mi entorno para contrastar el reto que elegí. |
| — | Una necesidad concreta que escuchaste y una pregunta que todavía tienes. |
| — | Tu mentor base te ayuda a convertir una inquietud amplia en algo que puedas explorar. |
| — | Una persona que vive esa necesidad o alguien que ya empezó un camino parecido. |
| — | ¿Qué escuchaste que cambió tu idea inicial? Anótalo antes de elegir la siguiente acción. |
| — | Reduce el primer paso: identifica a esa persona y prepara una sola pregunta. Revisa con tu mentor qué te impide iniciar la conversación. |
| — | Aterrizar |
| — | Tierra |
| — | Habilidades |
| — | ¿Cómo lo pruebas en pequeño? |
| — | Tienes una idea, pero aún necesitas ponerla frente a alguien que podría necesitarla. |
| — | Preparas una primera versión sencilla y eliges qué quieres aprender al probarla. |
| — | Tomas una mejora de tu proyecto actual y defines una prueba que puedas realizar. |
| — | Mostrar una primera versión de mi propuesta a una persona y escuchar su respuesta. |
| — | Probar una mejora concreta de mi proyecto con una persona usuaria o de mi equipo. |
| — | Qué mostraste, qué respuesta recibiste y qué necesitas ajustar. |
| — | Tu mentor base te ayuda a acotar la prueba. Una sesión con un especialista puede aportar una mirada sobre el tema que necesitas trabajar. |
| — | Una posible persona usuaria, cliente o colega con quien probar la propuesta. |
| — | ¿Qué ocurrió al mostrarlo? Separa lo que observaste de lo que suponías y elige un ajuste. |
| — | Revisa el tamaño de la prueba. ¿Puedes mostrar un boceto o explicar la propuesta en una conversación antes de construirla completa? |
| — | Adaptar |
| — | Agua |
| — | Disciplina y hábitos |
| — | ¿Qué puedes sostener en tu semana? |
| — | Ya empezaste. Ahora necesitas hacer espacio para actuar entre el trabajo y tus demás responsabilidades. |
| — | Organizas acciones que caben en tu semana y revisas lo que ayuda o dificulta realizarlas. |
| — | Observas dónde se está atorando tu avance y ajustas una práctica de tu proyecto. |
| — | Reservar un espacio concreto de mi semana para realizar una acción del proyecto. |
| — | Ajustar una actividad que estoy posponiendo y probar una forma más pequeña de hacerla. |
| — | Qué realizaste, qué quedó pendiente y qué cambió al ajustar tu organización. |
| — | Tu mentor base revisa contigo lo que pasó, los obstáculos y el siguiente ajuste. La comunidad aporta otras formas de organizarse. |
| — | Alguien con responsabilidades parecidas con quien intercambiar prácticas que sí le funcionan. |
| — | ¿Qué hizo posible que actuaras esta vez? Registra esa condición para intentar sostenerla. |
| — | Mira qué faltó: tiempo, claridad, una habilidad o apoyo. Ajusta una de esas condiciones y acuerda un paso que sí quepa en tu semana. |
| — | Crecer |
| — | Aire |
| — | Liderazgo |
| — | ¿Con quién puedes dar el siguiente paso? |
| — | Ya tienes aprendizajes y avances. Necesitas decidir qué fortalecer y con quién hacerlo. |
| — | Exploras cómo colaborar, compartir responsabilidades y abrir nuevas posibilidades para tu proyecto. |
| — | Trabajas una decisión de crecimiento, colaboración o reinvención que hoy necesita tu proyecto. |
| — | Preparar una conversación con alguien con quien podría colaborar. |
| — | Definir qué apoyo necesito para una mejora y conversar con una posible persona colaboradora. |
| — | Qué puedes aportar, qué apoyo necesitas y qué siguiente paso acordaron. |
| — | Tu mentor base te ayuda a revisar la decisión. Mentores invitados y comunidad aportan perspectivas y oportunidades de conexión. |
| — | Una posible persona colaboradora, un aliado o alguien con experiencia en tu siguiente reto. |
| — | ¿Qué siguiente paso quedó acordado? Dale seguimiento; una conexión se construye después de la presentación. |
| — | Antes de buscar más contactos, aclara qué necesitas y qué puedes aportar. Prepara la conversación con tu mentor o con la comunidad. |

### src/app/como-lo-hacemos/journey-explorer.tsx

| Antes | Después (texto nuevo) |
|---|---|
| — | m3 9 9-5 9 5-9 5-9-5Zm0 6 9 5 9-5M12 14v6 |
| — | 01 / Elige tu recorrido |
| — | Cuatro etapas a las que puedes volver. |
| — | Descubrir, Aterrizar, Adaptar y Crecer describen el momento del proyecto. Volver no es retroceder. |
| — | ¿Cómo quieres recorrerlo? |
| — | Seguir la ruta |
| — | Quiero una guía para empezar o retomar. |
| — | Trabajar mi reto actual |
| — | Ya tengo algo en marcha y sé qué quiero revisar. |
| — | Las actividades te orientan. Puedes entrar en la etapa que necesitas y regresar cuando haga falta. |
| — | Partes de un reto propio. Puedes apoyarte en la ruta para revisar una habilidad o retomar una práctica. |
| — | A tu ritmo también puede ser con acompañamiento. |
| — | Tu recorrido / uHüb |
| — | Explora libremente |
| — | Etapas del recorrido |
| — | Explorar → |
| — | Puedes volver con otra idea, otro reto o más experiencia. |
| — | Si sigues la ruta |
| — | Si trabajas tu reto |
| — | Una acción posible |
| — | Qué registrarías |
| — | Con acompañamiento |
| — | ¿Qué conexión podrías buscar? |
| — | Prepara qué quieres preguntar, qué puedes aportar y cómo darás seguimiento. |
| — | Volver a Descubrir |
| — | 02 / Después de intentarlo |
| — | Aquí empieza el seguimiento. |
| — | Una acción puede salir, cambiar o atorarse. Lo que ocurre te ayuda a decidir el siguiente paso. |
| — | Ejemplo interactivo. Explora las respuestas; no se registra como un avance tuyo. |
| — | Mi acción / |
| — | Ejemplo |
| — | Explora qué pasaría con esta acción |
| — | La probé |
| — | Me atoré |
| — | Ahora revisas lo que aprendiste |
| — | Ahora ajustas el paso |
| — | Ese aprendizaje vuelve a tu registro de acciones y a la siguiente revisión. |
| — | Elige una respuesta para ver cómo continuarías con el acompañamiento. |
| — | Volver a explorar el ejemplo ↺ |
| — | Membresía Emprende Diario |
| — | Programa uHüb A.C. |
| — | 03 / Quién camina contigo |
| — | Una estructura compartida. |
| — | Distintas formas de vivirla. |
| — | El recorrido que eliges y el acompañamiento que recibes son dos decisiones distintas. Mira cómo se trabaja en cada contexto. |
| — | Contexto del acompañamiento |
| — | El hilo de tu proceso |
| — | Tu mentor base |
| — | Rodrigo Campillo, mentor base de Emprende Diario. |
| — | Rodrigo Campillo |
| — | Actualmente, mentor base de la membresía. |
| — | Te ayuda a revisar decisiones, acciones y obstáculos, y a dar continuidad a lo que estás trabajando. |
| — | Un mentor base da continuidad a tu proceso dentro del programa. |
| — | Revisa contigo el reto, los accionables y lo que ocurrió al ponerlos en práctica. |
| — | Una conversación se conecta con la siguiente a través de lo que haces entre sesiones. |
| — | 01 / Experiencia específica |
| — | Mentores invitados |
| — | Mentores especializados |
| — | Aportan conocimientos y perspectivas sobre temas concretos en las sesiones de la membresía. El acceso y el formato corresponden a tu modalidad. |
| — | Aportan experiencia para retos concretos, de acuerdo con las actividades y los apoyos del programa. |
| — | 02 / Relaciones que se construyen |
| — | Comunidad y conexiones |
| — | Compartes experiencias con otros miembros, contrastas decisiones y amplías tu red mediante conversaciones y vínculos con seguimiento. |
| — | Compartes tu proceso con otras personas del programa. La comunidad y quienes ya lo recorrieron pueden aportar experiencias y conexiones. |
| — | 03 / De la intención a la práctica |
| — | Tu herramienta Emprende Diario |
| — | Tu carpeta de accionables |
| — | Registras qué vas a hacer, lo que ocurrió y lo que aprendiste. Ese registro te ayuda a preparar la siguiente revisión. |
| — | Ritmo trabaja con sesiones grupales. El ingreso, la ruta y las condiciones se confirman contigo antes de inscribirte. |
| — | El acceso, la modalidad y el calendario corresponden a la convocatoria del programa de uHüb A.C. |
| — | Conocer Emprende Diario |
| — | Ver el programa de uHüb A.C. |

## AGENTS.md

- Encabezado: «Actualizada el 29 de septiembre de 2026 (incluye las diez correcciones aprobadas por Rodrigo)» → «Actualizada el 3 de octubre de 2026 (incluye las diez correcciones y el recorrido interactivo aprobados por Rodrigo)».
- Se añade la adenda «Recorrido interactivo autorizado»: autonomía con acompañamiento, mentor base actual, especialistas, vinculación, registro de acciones, contextos separados y límites de la simulación.
- Cero reemplazos de marca en textos existentes en esta entrega. Todo texto nuevo usa uHüb; metadata mantiene uHub.

## Verificación

- Build de producción y lint correctos.
- 31 comprobaciones de disposición a 360, 390, 768, 1024 y 1440 px: sin desbordamiento, imágenes rotas, palabras partidas en títulos ni errores de ejecución.
- Ocho combinaciones de etapa/modo; ambas respuestas de seguimiento, reinicio y regreso Crecer → Descubrir.
- Pestañas por clic y teclado (flechas, Home y End), selección única y panel asociado; movimiento reducido sin animación.
- Vistas membresía/A.C. y destinos verificados; condiciones diferenciadas.
- Capturas desktop/móvil revisadas: hero, mapa, seguimiento y acompañamiento.
- Enlace desde la raíz llega al explorador. H1 de raíz conservado.
- Sin cambios en test, formularios, integraciones, precios, textos legales, imágenes originales ni rutas restantes.

## Pendientes que siguen vigentes

Los ejemplos no establecen los hitos reales de egreso. Calendarios, acceso a nuevas modalidades, plataforma de seguimiento, Stripe y demás pendientes de publicación continúan sujetos a las decisiones ya registradas. No se crean nuevas promesas al explorar una etapa.
