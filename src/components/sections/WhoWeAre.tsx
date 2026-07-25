import { PhotoBlock } from "@/components/ui/PhotoBlock";

export function WhoWeAre() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <h2 className="text-balance text-center font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
          Alguien que ya recorrió el camino
        </h2>

        <div className="mt-12 grid items-center gap-10 sm:grid-cols-[220px_1fr]">
          <PhotoBlock label="[PENDIENTE: foto real de Rodrigo]" className="aspect-square" />
          <div>
            <p className="text-pretty leading-relaxed text-gray-dark">
              Soy <strong>Rodrigo Campillo.</strong> Crecí en un contexto
              emprendedor — para mí era natural. Un día entendí algo que me
              cambió todo: la diferencia entre yo y muchos emprendedores que
              acompañé no era el talento.{" "}
              <strong>
                Era el sistema en el que crecimos. Yo lo tuve sin saberlo.
                Ellos no.
              </strong>
            </p>
            <p className="mt-4 leading-relaxed text-gray-dark">
              Por eso llevo 11 años construyendo uHub: para que tener
              estructura, hábitos y acompañamiento deje de ser un accidente
              de nacimiento.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-[680px] border-t border-border-subtle pt-16">
          <h3 className="font-display text-xl font-extrabold text-gray-dark">
            Por qué se llama uHub
          </h3>
          <p className="mt-4 leading-relaxed text-gray-dark">
            Un hub es un punto de conexión: el centro desde el que una red se
            organiza y se mueve. Le pusimos la <strong>&ldquo;u&rdquo;</strong>{" "}
            porque el centro no es nuestro, es tuyo.
          </p>
          <p className="mt-4 leading-relaxed text-gray-dark">
            uHub no es una plataforma a la que te conectas. Es el trabajo de
            construir tu propio centro — saber qué te mueve, qué estás
            dispuesto a sostener, con quién te conectas — para que todo lo
            que inicies salga de ahí.
          </p>
          <p className="mt-4 leading-relaxed text-gray-dark">
            Por eso es un ciclo y no un curso: un centro no se termina de
            construir. Se vuelve a revisar cada vez que empiezas algo nuevo.
          </p>
        </div>
      </div>
    </section>
  );
}
