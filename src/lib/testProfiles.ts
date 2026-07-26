/**
 * Cuadrante uHub — ejes originales:
 *   Eje Y (vertical):   Innovar (arriba) — Libertad (abajo)
 *   Eje X (horizontal): Seguridad (izq)  — Independencia (der)
 *
 * scoreI: hacia Independencia (+) / Seguridad (-)
 * scoreL: hacia Libertad (+) / Innovar (-)
 *
 *   Intraemprendedor — Seguridad     + Innovar     (sI<0, sL<0)
 *   Reemprendedor    — Independencia + Innovar     (sI>=0, sL<0)
 *   Interemprendedor — Seguridad     + Libertad    (sI<0, sL>=0)
 *   Autoemprendedor  — Independencia + Libertad    (sI>=0, sL>=0)
 */

export type ProfileKey =
  | "intraemprendedor"
  | "reemprendedor"
  | "interemprendedor"
  | "autoemprendedor";

export type QuestionOption = {
  text: string;
  i: number;
  l: number;
};

export type Question = {
  text: string;
  opts: QuestionOption[];
};

export type Profile = {
  key: ProfileKey;
  tag: string;
  name: string;
  color: string;
  bg: string;
  desc: string;
  miniDesc: string;
  badgeLabel: string;
  strengths: string[];
  challenges: string[];
  rec: string;
};

export const QUESTIONS: Question[] = [
  {
    text: "¿Cuál de estas frases describe mejor tu situación hoy?",
    opts: [
      { text: "Tengo empleo y emprender es algo que hago del lado, sin renunciar.", i: -3, l: -2 },
      { text: "Ya intenté emprender antes — aprendí, fallé o lo pausé.", i: 2, l: -2 },
      { text: "Trabajo dentro de un sistema ya armado (franquicia, MLM, seguros, distribución).", i: -2, l: 2 },
      { text: "Quiero lanzar un proyecto 100% mío, desde cero.", i: 3, l: 3 },
    ],
  },
  {
    text: "Si pudieras elegir, ¿qué relación quieres tener con el negocio donde inviertes tu tiempo?",
    opts: [
      { text: "Crear todo yo — nombre, producto, precio, visión. Que sea completamente mío.", i: 3, l: 2 },
      { text: "Mejorar algo que ya construí antes. No empezar de cero otra vez.", i: 2, l: -2 },
      { text: "Usar un sistema que ya funciona y hacerlo operar bien.", i: -2, l: 2 },
      { text: "Emprender proyectos nuevos dentro de la organización donde trabajo.", i: -3, l: -2 },
    ],
  },
  {
    text: "¿Qué tanto riesgo estás dispuesto a asumir hoy?",
    opts: [
      { text: "Máximo. Si no arriesgo todo, no se siente real.", i: 3, l: 3 },
      { text: "Alto, pero calculado — ya viví lo que pasa cuando se cae todo.", i: 2, l: -1 },
      { text: "Moderado. Quiero avanzar sin perder lo que tengo.", i: -1, l: 1 },
      { text: "Bajo. Prefiero un sistema probado que reducir al mínimo el riesgo.", i: -3, l: 1 },
    ],
  },
  {
    text: "¿Cuál es tu mayor motivación para emprender?",
    opts: [
      { text: "Independencia total — no rendirle cuentas a nadie.", i: 3, l: 3 },
      { text: "Construir algo nuevo o mejorar lo que ya construí.", i: 1, l: -2 },
      { text: "Generar ingresos propios sin dejar la estabilidad que tengo.", i: -1, l: 2 },
      { text: "Impactar desde adentro de una empresa u organización.", i: -3, l: -3 },
    ],
  },
  {
    text: "Cuando piensas en tu idea o proyecto emprendedor, ¿de dónde viene?",
    opts: [
      { text: "Es 100% mía — la creé yo, no existe igual en ningún lado.", i: 3, l: 2 },
      { text: "Es una versión mejorada o reinventada de algo que ya intenté.", i: 2, l: -2 },
      { text: "Usaré (o ya uso) un modelo o sistema que alguien más diseñó.", i: -3, l: 2 },
      { text: "Es un proyecto dentro de la empresa u organización donde trabajo.", i: -3, l: -3 },
    ],
  },
  {
    text: "¿Qué tan cómodo/a estás rindiendo cuentas a alguien más?",
    opts: [
      { text: "Nada cómodo. Prefiero decidir todo yo, aunque sea más difícil.", i: 3, l: 2 },
      { text: "Depende. Si tiene sentido, sí — pero la visión final es mía.", i: 1, l: 0 },
      { text: "Bastante cómodo. Si el sistema funciona, no hay problema en seguirlo.", i: -2, l: 1 },
      { text: "Muy cómodo. Trabajo bien dentro de estructuras y jerarquías.", i: -3, l: -2 },
    ],
  },
  {
    text: "¿Cuánta experiencia tienes realmente emprendiendo?",
    opts: [
      { text: "Ninguna. Esta es la primera vez que lo intento en serio.", i: 1, l: 3 },
      { text: "Ya intenté algo antes. No funcionó como quería, pero aprendí.", i: 2, l: -2 },
      { text: "Llevo tiempo operando algo, aunque no sea completamente mío.", i: -2, l: 1 },
      { text: "Tengo experiencia generando proyectos dentro de una organización.", i: -2, l: -3 },
    ],
  },
  {
    text: "¿Qué te detiene más para avanzar?",
    opts: [
      { text: "No sé por dónde empezar — la idea está, pero no arranca.", i: 1, l: 2 },
      { text: "Tengo el trauma del intento anterior. Me cuesta volver a intentar.", i: 2, l: -2 },
      { text: "El tiempo. Entre el empleo y la familia, no encuentro espacio.", i: -1, l: -1 },
      { text: "Crecer dentro del sistema donde estoy — no sé cómo escalar.", i: -2, l: 2 },
    ],
  },
  {
    text: "¿Qué frase se acerca más a lo que sientes hoy?",
    opts: [
      { text: '"Sé lo que tengo que hacer. Sé que puedo. Pero no lo hago."', i: 1, l: -1 },
      { text: '"Tengo la idea. Solo necesito empezar a moverme."', i: 2, l: 2 },
      { text: '"Quiero crecer, pero sin perder lo que ya tengo."', i: -1, l: 1 },
      { text: '"Me gusta lo que hago, pero quiero impactar más desde donde estoy."', i: -2, l: -2 },
    ],
  },
  {
    text: "Si pudieras cambiar UNA cosa de tu situación hoy, ¿qué sería?",
    opts: [
      { text: "Por fin lanzar — pasar de la idea a la acción con mi propio proyecto.", i: 2, l: 3 },
      { text: "Recuperar el ritmo y volver a intentar lo que pausé.", i: 2, l: -2 },
      { text: "Tener tiempo para avanzar en mi proyecto sin dejar el empleo.", i: -1, l: 0 },
      { text: "Multiplicar mi impacto dentro del sistema o empresa donde estoy.", i: -3, l: -2 },
    ],
  },
];

export const PROFILES: Record<ProfileKey, Profile> = {
  intraemprendedor: {
    key: "intraemprendedor",
    tag: "Tu perfil",
    name: "Intraemprendedor",
    color: "#474855",
    bg: "#E9E9EB",
    badgeLabel: "Seguridad + Innovar",
    miniDesc: "Innova dentro de una organización. Seguro, con impulso creador.",
    desc: "Trabajas dentro de una organización y tienes ideas para transformarla. No necesitas salirte para emprender — quieres impactar desde donde estás. Combinas seguridad con espíritu innovador.",
    strengths: [
      "Conoces de adentro la organización donde operas — ventaja que pocos tienen.",
      "Tienes acceso a recursos, equipo y credibilidad sin construirlos desde cero.",
      "Operas con disciplina — el entorno estructurado te entrenó para cumplir.",
      "Puedes innovar con red de seguridad, reduciendo el riesgo personal.",
    ],
    challenges: [
      "La burocracia interna puede frenar ideas buenas antes de que despeguen.",
      "Medir si el proyecto es tuyo o de la organización — y eso afecta la motivación.",
      "Que te \"consuma\" la operación y pierdas el foco creador.",
      "Construir visibilidad propia dentro de un entorno que le da crédito a la empresa.",
    ],
    rec: "Necesitas un sistema que proteja tu energía creadora dentro de la organización. Emprende Diario te da el ritmo diario para avanzar en tu proyecto interno sin que te trague la operación.",
  },
  reemprendedor: {
    key: "reemprendedor",
    tag: "Tu perfil",
    name: "Reemprendedor",
    color: "#B81632",
    bg: "#F6E3E6",
    badgeLabel: "Independencia + Innovar",
    miniDesc: "Vuelve a emprender con experiencia encima y ganas de independencia.",
    desc: "Ya intentaste emprender antes. Esa experiencia no terminó como esperabas — se estancó, se pausó o terminó. Hoy quieres volver a construir algo propio, pero con más criterio y sin empezar desde cero.",
    strengths: [
      "Tienes experiencia real — sabes lo que es vender, fallar y aprender.",
      "Conoces tus patrones: dónde te bloqueas, qué te activa, qué evitas.",
      "No te vendes humo. Has visto la versión cruda del emprendimiento.",
      "Tu próximo intento arranca con base, no con ilusión.",
    ],
    challenges: [
      "Cargar el peso del intento anterior en cada decisión nueva.",
      "Confundir el proyecto pasado con el actual — querer \"arreglarlo\" en vez de avanzar.",
      "Postergar el regreso esperando \"estar listo\" emocionalmente.",
      "Sentir vergüenza de volver a intentar y aislarte del proceso.",
    ],
    rec: "No necesitas más información. Necesitas un sistema que te haga volver al ritmo sin reabrir heridas, y comunidad de gente que también está reemprendiendo. Eso es exactamente Emprende Diario.",
  },
  interemprendedor: {
    key: "interemprendedor",
    tag: "Tu perfil",
    name: "Interemprendedor",
    color: "#6D1F30",
    bg: "#EDE4E6",
    badgeLabel: "Seguridad + Libertad",
    miniDesc: "Emprende dentro de un sistema probado. Libre pero con red de seguridad.",
    desc: "Trabajas dentro de un sistema o modelo que no es tuyo — franquicia, distribución, MLM, seguros, agencia. Aplicas prácticas emprendedoras con red de seguridad. La interdependencia inteligente es una estrategia, no una limitación.",
    strengths: [
      "Operas dentro de una estructura probada — no tienes que reinventar la rueda.",
      "Tienes acceso a producto, marca y procesos sin construirlos desde cero.",
      "Tu ingreso puede crecer sin depender solo de lo que produces tú.",
      "Conoces el sistema por dentro — ventaja real para liderarlo.",
    ],
    challenges: [
      "Quedarte solo ejecutando lo que te dicen, sin desarrollar criterio propio.",
      "Estancarte cuando el sistema deja de crecer y tú no controlas la estrategia.",
      "No saber qué de lo que haces es tuyo y qué pertenece al modelo.",
      "Sentir que no eres \"verdaderamente emprendedor\" — y eso es un mito.",
    ],
    rec: "Tu siguiente paso es profundizar un sistema propio para multiplicar lo que ya haces. Emprende Diario te da el sistema para volverte el referente dentro de tu red, no solo el operador.",
  },
  autoemprendedor: {
    key: "autoemprendedor",
    tag: "Tu perfil",
    name: "Autoemprendedor",
    color: "#F26D3D",
    bg: "#FDEDE8",
    badgeLabel: "Libertad + Independencia",
    miniDesc: "Inicia desde cero con idea propia. Acepta el riesgo porque ve posibilidad donde otros ven incertidumbre.",
    desc: "Iniciando un proyecto 100% propio. Tienes la idea y las ganas. Aceptas el riesgo porque ves posibilidad donde otros ven incertidumbre. Lo que falta es estructura para no paralizarte antes de validar nada.",
    strengths: [
      "Tienes la energía del inicio intacta — eso es combustible real.",
      "Nadie te hereda vicios ni formas de hacer las cosas: puedes diseñarlas desde cero.",
      "Tu motivación es alta y genuina — quieres construir algo tuyo de verdad.",
      "Eres el dueño de todo: la visión, el error y el aprendizaje.",
    ],
    challenges: [
      "Paralizarte por exceso de información antes de validar nada.",
      "Confundir planeación con avance — leer y diseñar sin ejecutar.",
      "Buscar la versión perfecta del producto antes de salir a vender.",
      "La soledad: no tener con quién contrastar decisiones reales.",
    ],
    rec: "Necesitas un sistema diario que te haga ejecutar antes de saberlo todo. Emprende Diario te da estructura para validar tu idea con clientes reales en las primeras semanas, no después de tres meses planeando.",
  },
};

export function resolveProfileKey(scoreI: number, scoreL: number): ProfileKey {
  if (scoreI >= 0 && scoreL >= 0) return "autoemprendedor";
  if (scoreI >= 0 && scoreL < 0) return "reemprendedor";
  if (scoreI < 0 && scoreL >= 0) return "interemprendedor";
  return "intraemprendedor";
}

export const QUADRANT_CELLS: { key: ProfileKey; q: 1 | 2 | 3 | 4 }[] = [
  { key: "intraemprendedor", q: 1 },
  { key: "reemprendedor", q: 2 },
  { key: "interemprendedor", q: 3 },
  { key: "autoemprendedor", q: 4 },
];
