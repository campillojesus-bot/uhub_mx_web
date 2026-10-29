# Portada paraguas — inventario y decisiones

Fecha: 29 de octubre de 2026. Instrucción: `brief_astra_home_uhub_mx_v2.md`, autorizada por Rodrigo con permiso para adaptar lo que no aplique. Base: `mejora-retos-continuidad`, commit `b1ded26216850dc6a2a1b01ddba0efe8e2212149`. Este PR se apila sobre el #3, todavía abierto; no toca producción ni `main`.

## Inventario previo a la implementación

| Bloque anterior | Destino | Tratamiento del contenido |
|---|---|---|
| Hero con retrato de Sarahi y dos anclas | Se resume en la portada | Conserva H1; cuatro entradas directas sustituyen las dos decisiones internas. Retira el retrato de este uso, conserva el archivo. |
| Banda de cifras | Se conserva y actualiza | Desde 2015; 600 personas con mentoría uno a uno; +2,000 alcanzadas. Definiciones del brief de Rodrigo, sin sumar poblaciones. |
| Por qué existe: cuatro párrafos, cita y retrato de Rodrigo | Se resume; profundidad en `/nosotros` | La historia y fotos ya existen allí. Versión previa íntegra en `docs/archive/home-2026-10-28.tsx.txt`. |
| Modelo: definición, tres capas interactivas | Se resume; interacción pasa a `/como-lo-hacemos#ecosistema` | El mecanismo se explica en portada. Se conserva `ModelExplorer`, su teclado, pestañas y movimiento reducido. |
| Nota de mentores y enlace a Red | Se resume; enlace en pie | Conserva distinción mentor base, especialista y comunidad en la página del recorrido. |
| Ciclo con selector de contexto y descripciones | Vista reducida en portada; profundidad en `/como-lo-hacemos` | Reutiliza `src/components/marketing/CycleWheel.tsx`; el zigzag, sus ejemplos y continuidad permanecen. La antigua rueda de `home-interactions.tsx` se conserva como componente, sin duplicar exploradores. |
| Práctica de cuatro pasos + fotografía opcional | Se integra en el mecanismo | Acciones, prueba y revisión explícitas; detalle de seguimiento ya existe en `/como-lo-hacemos`. |
| Invitación a la Brújula | Pasa a `/emprende-diario` | Mantiene resultado abierto y conexión Brújula → etapa → solicitud. |
| Para quién: persona + instituciones | Se integra en cuatro entradas | Las landings existentes conservan sus contextos y ofertas. |
| Resultado, tres historias y video | Se retira de la portada | No se destruyen componentes ni archivos. No se republican historias en una ruta nueva sin autorización. La única historia futura de portada es Cynthia, cuando exista permiso escrito. |
| Cuatro puertas al final | Se trasladan al hero | Mismos cuatro destinos reales; sin página intermedia. |
| Puente al programa A.C. | Se traslada al pie, identificado | Enlace externo a uhub.org.mx; sin donar ni mezclar condiciones comerciales. |
| Lunes 1-1-1 | Se mantiene y simplifica | Usa el formulario real de Kit; test como invitación personal secundaria. |
| Footer extenso | Se resume en el componente compartido | Siete enlaces principales; contactos, mentoría y A.C. aparte. No inventa `/historias` ni aviso de privacidad. |

## Adaptaciones al brief

1. **Paraguas y entidades:** uhub.mx presenta el conjunto; ofertas, operadores y condiciones se distinguen. La frase antigua «uhub.mx = exclusivamente comercial» queda superada como arquitectura, no como permiso para confundir entidades.
2. **Acompañamiento frente a capacitación:** se explica qué hace cada oferta. Se sustituye «No es un curso que termina…» por práctica entre sesiones; no se atribuyen carencias a cursos ajenos.
3. **Sin causalidad universal:** no afirmar que siempre cambia primero la persona y luego el negocio, ni que acceso explica por sí solo éxito o fracaso. Se conserva el enfoque humano con contexto, práctica y apoyo.
4. **Perfiles y etapas:** «una iniciativa» incluye al intraemprendedor; volver al ciclo no exige «subir de nivel». El test no enruta ofertas ni evalúa empleados.
5. **Cifras:** 600 y +2,000 proceden del nuevo brief, no de una auditoría independiente. Desde 2015 sustituye el contador 11 años para no caducar. No se añade la cifra personal de 13 años a la portada.
6. **Kit:** ya existe https://uhub.kit.com/b3786d63e8. Se mantiene ese destino y la promesa real «una historia, un reto y una pregunta»; no se dibuja un campo sin integración ni se crea captura nueva sin aviso autorizado.
7. **Privacidad:** el nombre legal del brief contradice el historial y el aviso sigue pendiente. No se publica «Rodrigo Campillo Durán», actividad fiscal ni un aviso inventado. Se conserva el canal de consulta legal.
8. **Historia:** Cynthia no se muestra sin permiso; tampoco se abre una página de historias vacía. Los archivos y textos anteriores quedan conservados en Git y en el archivo de esta revisión.
9. **Consolidar:** se retira de las páginas .mx conforme a la decisión nueva; solo corresponde a los programas de 12 meses A.C. El resto de `/nosotros` se conserva.
10. **Fuentes:** Avenir Next se usa solo si está instalada; se mantienen las fuentes web Montserrat/Inter como fallback, sin descargar ni inventar una licencia de Avenir.

## Validación y pendientes

Se completará con resultados de build, lint, navegación y vistas a 360, 390 y escritorio. Las pruebas técnicas no sustituyen la prueba de comprensión con tres personas externas del brief.

Pendientes de contenido: foto real de mentoría y autorización de Cynthia. Pendientes de negocio: Stripe/condiciones de ingreso y aviso autorizado. Dominio y proyectos de Vercel no se modifican; la entrega será una vista previa.
