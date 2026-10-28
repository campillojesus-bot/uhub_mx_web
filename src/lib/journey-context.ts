/** Public, non-identifying selections only. Never put answers or contact data in URLs. */
export const stageKeys = ["fuego", "tierra", "agua", "aire"] as const;
export type StageKey = typeof stageKeys[number];
export const stageNames: Record<StageKey, string> = { fuego: "Descubrir", tierra: "Aterrizar", agua: "Adaptar", aire: "Crecer" };

export const challenges = [
  { id: "probar", title: "Poner una idea a prueba", detail: "Tengo una idea y quiero probarla en pequeño.", stage: "tierra", reason: "Una prueba pequeña puede ayudarte a aprender antes de comprometer más recursos." },
  { id: "sostener", title: "Sostener mis acciones", detail: "Ya empecé, pero me cuesta dar continuidad.", stage: "agua", reason: "Revisar una acción y las condiciones para realizarla puede ayudarte a encontrar un ritmo viable." },
  { id: "retomar", title: "Retomar o cambiar de rumbo", detail: "Quiero revisar lo vivido y elegir qué sigue.", stage: "fuego", reason: "Volver a tus motivos y a tu situación actual puede ayudarte a elegir un siguiente paso." },
  { id: "colaborar", title: "Impulsar una iniciativa con otros", detail: "Quiero colaborar en mi proyecto o desde mi trabajo.", stage: "aire", reason: "Aclarar qué necesitas, qué aportas y con quién colaborar puede abrir un siguiente paso compartido." },
] as const;
export type ChallengeId = typeof challenges[number]["id"];

export const supports = [
  { id: "claridad", label: "Aclarar el siguiente paso", suggestion: "Escribe una decisión pendiente y una pregunta que te ayude a concretarla." },
  { id: "tiempo", label: "Hacer espacio en mi semana", suggestion: "Reduce el tamaño de la acción y elige un momento viable para intentarla." },
  { id: "habilidad", label: "Practicar una habilidad", suggestion: "Identifica la habilidad que requiere ese paso y una forma pequeña de practicarla." },
  { id: "apoyo", label: "Revisarlo con alguien", suggestion: "Prepara qué intentaste, qué ocurrió y qué pregunta llevarías a una conversación." },
] as const;
export type SupportId = typeof supports[number]["id"];
export type JourneyContext = { stage?: StageKey; challenge?: ChallengeId; support?: SupportId; situation?: "idea" | "ventas"; source?: "brujula" };

export function readJourneyContext(params: { get: (key: string) => string | null }): JourneyContext {
  const stage = stageKeys.find(value => value === params.get("etapa"));
  const challenge = challenges.find(value => value.id === params.get("reto"))?.id;
  const support = supports.find(value => value.id === params.get("apoyo"))?.id;
  const rawSituation = params.get("contexto");
  const situation = rawSituation === "idea" || rawSituation === "ventas" ? rawSituation : undefined;
  return { stage, challenge, support, situation, source: params.get("origen") === "brujula" ? "brujula" : undefined };
}

export function journeyHref(path: "/como-lo-hacemos" | "/emprende-diario", context: JourneyContext, anchor: string) {
  const params = new URLSearchParams();
  if (context.stage) params.set("etapa", context.stage);
  if (context.challenge) params.set("reto", context.challenge);
  if (context.support) params.set("apoyo", context.support);
  if (context.situation) params.set("contexto", context.situation);
  if (context.source) params.set("origen", context.source);
  return path + (params.size ? "?" + params.toString() : "") + "#" + anchor;
}

export function describeJourneyContext(context: JourneyContext): string[] {
  const lines: string[] = [];
  const challenge = challenges.find(value => value.id === context.challenge);
  const support = supports.find(value => value.id === context.support);
  if (challenge) lines.push("Reto que quiero explorar: " + challenge.title + ".");
  if (context.stage) lines.push("Etapa que estoy explorando: " + stageNames[context.stage] + ".");
  if (context.situation) lines.push(context.situation === "idea" ? "Estoy desarrollando una idea." : "Ya tengo clientes o ventas.");
  if (support) lines.push("Apoyo que me interesa: " + support.label + ".");
  return lines;
}
