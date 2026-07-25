const items = [
  {
    title: "Alguien que te lleva por el camino.",
    body: "Un facilitador-mentor formado en el sistema uHub. Conoce las cuatro etapas, sabe dónde estás y qué toca ahora. Le da seguimiento a tu avance — y te regresa cuando te sales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="#B81632" strokeWidth="2" />
        <path
          d="M15 9l-2 6-6 2 2-6 6-2z"
          stroke="#B81632"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Alguien que ya pasó por donde tú estás.",
    body: "Mentores con experiencia emprendedora real y expertise en su campo. No teoría de manual: lo que aprendieron cobrando, fallando y volviendo a empezar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden>
        <path
          d="M8 12l2.5 2.5L16 9"
          stroke="#B81632"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9" stroke="#B81632" strokeWidth="2" />
      </svg>
    ),
  },
];

const pillars = [
  {
    num: "01",
    title: "Personas antes que proyectos",
    body: "El negocio cambia cuando cambia la persona capaz de sostenerlo.",
  },
  {
    num: "02",
    title: "Proceso antes que evento",
    body: "La transformación necesita práctica, seguimiento y decisiones repetidas.",
  },
  {
    num: "03",
    title: "Permanencia antes que arranque",
    body: "Empezar importa. Aprender a continuar cuando el contexto cambia importa más.",
  },
];

export function Accompaniment() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <h2 className="text-balance font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
            El ciclo no se recorre solo
          </h2>
          <p className="mt-4 text-lg text-gray-dark">
            Un curso te deja con la información. Nosotros te dejamos con{" "}
            <strong>gente</strong>.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border-subtle bg-white p-7 shadow-[0_1px_3px_rgba(71,72,85,0.12),0_1px_2px_rgba(71,72,85,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-soft">
                {item.icon}
              </div>
              <h3 className="mt-5 font-display text-lg font-extrabold text-gray-dark">
                {item.title}
              </h3>
              <p className="mt-2.5 leading-relaxed text-gray-dark">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-[600px] rounded-xl bg-gray-light px-8 py-8 text-center">
          <p className="text-balance font-display text-xl font-black leading-snug text-gray-dark">
            Primero la persona, luego el negocio.
          </p>
          <p className="mt-3 text-gray-dark">
            Un modelo de negocio se corrige en una tarde. Sostener a la
            persona que lo lleva toma más — y es lo que hace la diferencia.
          </p>
        </div>

        <p className="mt-10 text-center text-gray-dark/80">
          Muchas de las personas que acompañamos hoy se convierten en las
          mentoras de mañana.
        </p>

        <div className="mt-12 grid gap-8 border-t border-border-subtle pt-12 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.num}>
              <div className="font-display text-2xl font-black text-red-uhub">
                {pillar.num}
              </div>
              <h3 className="mt-2 font-display text-base font-extrabold text-gray-dark">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-dark">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
