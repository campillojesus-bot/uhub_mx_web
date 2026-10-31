/** Public, approved snapshots. No personal survey records belong in this file.
 * Update values AND the reporting date after an operational review, then deploy.
 * A mentor application is not an active mentor. Counts can increase or decrease.
 */
export const cifras = {
  desde: "2015",
  participaciones: { valor: 1300, prefijo: "+", etiqueta: "participaciones en actividades abiertas desde 2016" },
  mentorias: { valor: 953, etiqueta: "sesiones de mentoría uno a uno desde 2023" },
  territorio: { ciudad: "Chihuahua", complemento: "y Ciudad Juárez" },
  entidad: "uHüb A.C.",
  fuente: "Informe al Consejo Directivo, octubre de 2026",
  actualizado: "2026-10-31",
  corte: "octubre de 2026",
} as const;

export const redMentores = {
  base: 5,
  especializados: 8,
  entidad: cifras.entidad,
  fuente: cifras.fuente,
  actualizado: cifras.actualizado,
  corte: cifras.corte,
  get total() { return this.base + this.especializados; },
};

export type Historia = {
  id: string; nombre: string; proyecto: string; ciudad: string;
  foto: string; alt: string; width: number; height: number;
  destacada: boolean; autorizada: boolean;
  texto: string; cita: string | null; atribucion: string;
};

export const egresadas: Historia[] = [{
  id: "cynthia-pinon", nombre: "Cynthia Piñón", proyecto: "Ediciones Algoritmo 524", ciudad: "Chihuahua",
  foto: "/images/cynthia-pinon.webp", alt: "Cynthia Piñón, de Ediciones Algoritmo 524.",
  width: 1200, height: 1200, destacada: true, autorizada: true,
  texto: "Llegó en 2022 con el negocio en quiebra. Hoy lo dirige — y acompaña a otras emprendedoras como mentora de uHüb.",
  cita: null, atribucion: "Su recorrido comenzó en el programa AWE / uHüb A.C.",
}];

export const contacto = {
  whatsapp: "https://wa.me/526142346499",
  general: "https://wa.me/526142346499?text=Hola%2C%20llegu%C3%A9%20por%20uhub.mx%20y%20quiero%20saber%20m%C3%A1s.",
  mentores: "https://wa.me/526142346499?text=Hola%2C%20me%20interesa%20colaborar%20como%20mentor%20en%20la%20Red%20uHub",
};

export const membresia = {
  nombre: "Emprende Diario", precio: 399, moneda: "MXN", periodo: "mes",
  condiciones: "sin permanencia · cancelas cuando quieras",
  acceso: "Entramos por grupos pequeños, para que cada persona tenga acompañamiento real y no se pierda en una multitud. Por eso el ingreso es por solicitud.",
  elegibilidad: "No necesitas haber pasado por uHüb A.C. para entrar.",
  mensaje: "Hola, quiero solicitar mi ingreso a Emprende Diario.",
  // A future payment URL requires confirmed onboarding/terms and Rodrigo's approval.
  solicitudUrl: "https://wa.me/526142346499?text=Hola%2C%20quiero%20solicitar%20mi%20ingreso%20a%20Emprende%20Diario.",
  semanas: ["Mentoría grupal y planeación", "El tema del mes", "Mentoría grupal con mentor invitado", "Cierre y rendición de cuentas"],
} as const;
