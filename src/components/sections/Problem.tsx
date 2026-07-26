import { Kicker } from "@/components/ui/Kicker";
import { DiferenciadorCard } from "@/components/marketing/DiferenciadorCard";

export function Problem() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[760px] px-6 text-center">
        <Kicker>¿Te suena?</Kicker>
        <h2 className="text-balance mt-4 font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
          El problema no es arrancar. Es volver.
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-dark">
          Empiezas la semana con energía… y a media semana lo dejas. Ves otro
          video, tomas otro curso, guardas otro reel de &ldquo;5 pasos&rdquo;…
          y sigues en el mismo lugar. Tienes las ideas, pero no la estructura
          para sostenerlas. Y cuando llega el primer tropiezo, se te olvida
          por qué empezaste.
        </p>
        <p className="mt-6 font-display text-xl font-extrabold text-gray-dark">
          Eso no es flojera. Es lo que le pasa a casi cualquiera que lo
          intenta solo.
        </p>

        <div className="mx-auto mt-8 max-w-[520px] rounded-xl bg-gray-light px-6 py-5 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gray-dark/80">
            Costo de no cambiarlo
          </p>
          <p className="mt-2 text-gray-dark">
            Otro año igual. La misma idea guardada. La sensación de que el
            talento está, pero el proyecto no arranca.
          </p>
        </div>

        <blockquote className="mx-auto mt-10 max-w-[480px] border-l-4 border-red-uhub pl-5 text-left font-display text-xl font-bold italic leading-snug text-gray-dark">
          Emprender sola pesa. Avanzar acompañada cambia el camino.
        </blockquote>
      </div>

      <div className="mx-auto mt-14 max-w-[820px] px-6">
        <DiferenciadorCard />
      </div>
    </section>
  );
}
