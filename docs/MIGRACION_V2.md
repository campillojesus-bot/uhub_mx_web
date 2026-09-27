# Migración v2 del sitio uhub.mx

## Base y comparación con `main` (27 de septiembre de 2026)

La base es `campillojesus-bot/uhub_mx_web`, aplicación Next.js 16. La versión de revisión de ChatGPT aportó las páginas, la fotografía y el sistema editorial, adaptados al repositorio de Vercel.

| Pieza que existía en `main` | Decisión en v2 |
|---|---|
| `/test`: diez preguntas, dos ejes y cuatro perfiles | Se conserva `src/components/test` y `src/lib/testProfiles.ts`. La captura sigue enviando a Google Forms. Se corrigieron los identificadores de campos según la revisión del formulario público del 26 de septiembre; falta una prueba de recepción en la hoja de Rodrigo. |
| `CycleWheel` en `src/components/marketing/CycleWheel.tsx` | Se conserva y se utiliza en `/como-lo-hacemos`. La raíz ofrece otra exploración por audiencia; ambas describen cuatro etapas comunes. |
| Formulario de MentorClass | Se conserva el iframe original de Google Forms. El texto ya no promete una fecha no confirmada. |
| Aviso de privacidad | No apareció ningún archivo o ruta de aviso en el árbol de `main` al iniciar la migración. No se fabricó texto legal. |
| Rutas `/emprende-diario`, `/organizaciones`, `/nosotros` | Se actualizan desde la propuesta de revisión, conservando el repositorio original como base. |

## Decisiones de contenido

- Modelo uHub en público: la persona, su ecosistema y el camino.
- Cuatro etapas compartidas: Descubrir, Aterrizar, Adaptar y Crecer. **Consolidar** es una etapa técnica complementaria cuando un programa o aliado la ofrece; no es un requisito general.
- Ritmo: $399 MXN/mes, ingreso por conversación hasta recibir el enlace Stripe y definir alta, cancelación y entrega. Momentum: por invitación y en preparación.
- Lunes 1-1-1 sale al formulario real de Kit.
- El sitio de uHub A.C. aparece con contexto explícito; no se mezclan sus resultados con resultados de la membresía.
- La foto con la marca de la A.C. se retiró de la sección de mentores de la raíz.

## Antes de fusionar y publicar

1. Revisar el diseño del PR en escritorio y móvil mediante el enlace de vista previa de Vercel.
2. Facilitar y probar el enlace Stripe de Ritmo, así como las condiciones de alta y cancelación, antes de abrir inscripción directa.
3. Verificar en la Google Sheet una captura de prueba del test; el navegador recibe respuesta opaca del Form y no puede confirmar el guardado por sí solo.
4. Revisar que el formulario original de MentorClass siga recibiendo registros y definir si representa interés o una convocatoria con fecha.
5. Proporcionar texto de aviso de privacidad autorizado y el tratamiento de los datos de test, Kit y formularios.
6. Confirmar permisos comerciales de las fotos e historias de Sarahi, Cynthia, Omar, Mary y demás protagonistas. Sustituir fotos que Rodrigo no quiera reutilizar de la A.C.
7. Revisar el PDF de cada landing con el área responsable antes de compartirlo externamente.
8. Confirmar conexión real del proyecto GitHub con Vercel y URL de preview; este documento no supone que el webhook funciona.

`main` y producción no se modifican hasta autorización expresa de Rodrigo.
