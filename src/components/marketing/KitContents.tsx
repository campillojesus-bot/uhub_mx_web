// Lucide icons; license: public/licenses/lucide.txt.
const items = [
  { title: "El cuadrante", detail: "Qué tipo de emprendedor eres y qué necesitas primero.", icon: <><path d="M12 5v16" />
  <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" /></> },
  { title: "El reto de los siete días", detail: "Cinco conversaciones para poner tu idea a prueba.", icon: <><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" /></> },
  { title: "Tu Acción Mínima Efectiva", detail: "Una plantilla imprimible para decidir qué acción cabe en tu semana.", icon: <><rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="M12 11h4" />
  <path d="M12 16h4" />
  <path d="M8 11h.01" />
  <path d="M8 16h.01" /></> },
];

export function KitContents() {
  return <ul className="kit-contents">{items.map(({title, detail, icon}) => <li key={title}>
    <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
    <div><strong>{title}</strong><span>{detail}</span></div>
  </li>)}</ul>;
}
