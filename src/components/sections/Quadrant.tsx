import Link from "next/link";

const profiles = [
  {
    num: "01",
    title: "Empiezas desde cero",
    body: "Tienes la idea y las ganas, pero no sabes por dónde ni con quién.",
  },
  {
    num: "02",
    title: "Ya lo intentaste",
    body: "Arrancaste, no se sostuvo, y quieres volver con más estructura esta vez.",
  },
  {
    num: "03",
    title: "Operas un modelo de alguien más",
    body: "Franquicia, distribución o red: emprendes con una empresa, no para ella.",
  },
  {
    num: "04",
    title: "Emprendes desde adentro",
    body: "Tienes empleo o diriges un proyecto, y quieres mover algo nuevo desde ahí.",
  },
];

export function Quadrant() {
  return (
    <section className="bg-gray-light py-20 sm:py-28">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <h2 className="text-balance font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
          Emprender no es solo abrir un negocio
        </h2>
        <p className="text-pretty mx-auto mt-4 max-w-[600px] text-lg leading-relaxed text-gray-dark">
          Es la capacidad de iniciar algo y sostenerlo — dentro o fuera de
          una empresa. Por eso trabajamos con cuatro perfiles distintos, con
          el mismo sistema.
        </p>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          {profiles.map((profile) => (
            <div
              key={profile.num}
              className="rounded-xl border border-border-subtle bg-white p-6 shadow-[0_1px_3px_rgba(71,72,85,0.12),0_1px_2px_rgba(71,72,85,0.08)]"
            >
              <div className="font-display text-2xl font-black text-red-uhub">
                {profile.num}
              </div>
              <h3 className="mt-2 font-display text-lg font-extrabold text-gray-dark">
                {profile.title}
              </h3>
              <p className="mt-2 leading-relaxed text-gray-dark">
                {profile.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-lg font-medium text-gray-dark">
          ¿En cuál te reconoces? Descúbrelo en 3 minutos —{" "}
          <Link
            href="/test"
            className="font-semibold text-red-uhub no-underline hover:underline"
          >
            haz el test
          </Link>
        </p>
      </div>
    </section>
  );
}
