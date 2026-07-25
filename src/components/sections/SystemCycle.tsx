import { Kicker } from "@/components/ui/Kicker";
import { CycleWheel } from "@/components/marketing/CycleWheel";

export function SystemCycle() {
  return (
    <section id="sistema" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[760px] px-6 text-center">
        <Kicker>La metodología</Kicker>
        <h2 className="text-balance mt-4 font-display text-[clamp(1.75rem,1.25rem+1.5vw,2.25rem)] font-black leading-tight tracking-tight text-gray-dark">
          El Ciclo de Transformación Constante
        </h2>
        <p className="text-pretty mx-auto mt-4 max-w-[600px] text-lg leading-relaxed text-gray-dark">
          No te vamos a dar más información. Te vamos a meter en un ciclo que
          se repite hasta que moverte se vuelve hábito.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-[1200px] px-6">
        <CycleWheel />
      </div>

      <div className="mx-auto mt-14 max-w-[820px] px-6">
        <div className="rounded-xl bg-red-uhub px-8 py-7 text-center">
          <div className="font-display text-[0.82rem] font-black uppercase tracking-[0.16em] text-white/85">
            Metodología uHub
          </div>
          <p className="text-balance mx-auto mt-2 max-w-[640px] font-display text-xl font-extrabold leading-snug text-white">
            El ciclo no termina. Cada vez que inicias algo nuevo, vuelves a
            entrar — con más experiencia y con el mismo sistema.
          </p>
        </div>
      </div>
    </section>
  );
}
