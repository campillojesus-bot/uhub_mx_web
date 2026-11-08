// Field IDs and choice labels checked against the public Google Form on 2026-09-26.
// Its first profile option still uses the legacy label “Emprendedor”.
// Only this transport adapter uses that label; the quiz keeps Autoemprendedor.
const profileValues: Record<string, string> = {
  autoemprendedor: "Emprendedor",
  reemprendedor: "Reemprendedor",
  intraemprendedor: "Intraemprendedor",
  interemprendedor: "Interemprendedor",
};
export function buildGoogleFormData(name: string, email: string, profileKey: string) {
  const profile = profileValues[profileKey];
  if (!profile) throw new Error("Perfil desconocido");
  const data = new FormData();
  data.append("entry.991877918", name);
  data.append("entry.858340136", email);
  data.append("entry.1896278279", profile);
  return data;
}
