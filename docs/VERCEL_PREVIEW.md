# Reparación de preview — 28 de septiembre de 2026

## Evidencia

- La preview del commit d3429c7 aparece Ready en Vercel, pero devuelve el 404 de la plataforma. La captura del panel también muestra ese error.
- El proyecto es Next.js y genera sus páginas en `.next`; no tenía `vercel.json`.
- No se pudo inspeccionar el panel de configuración: el navegador de esta sesión fue bloqueado por límite de uso. No se afirma haber confirmado el preset configurado en Vercel.

## Cambio acotado

Se fija en `vercel.json` el framework `nextjs`, el build `npm run build` y la salida `.next`. Así estos valores quedan versionados y no dependen de overrides distintos entre los dos proyectos de Vercel conectados al repositorio.

Referencia: https://vercel.com/docs/project-configuration/vercel-json

## Criterio de cierre

Ready no basta. Confirmar que la preview entrega la raíz con “Nadie emprende solo.” y que `/test` y `/emprende-diario` cargan. Si continúa el 404, revisar en el panel los logs, Resources y Root Directory (el package.json está en la raíz del repositorio). No cambiar producción ni main.
