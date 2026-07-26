import { QUESTIONS } from "@/lib/testProfiles";

export function QuizScreen({
  step,
  answers,
  onAnswer,
  onBack,
}: {
  step: number;
  answers: (number | undefined)[];
  onAnswer: (optionIndex: number) => void;
  onBack: () => void;
}) {
  const question = QUESTIONS[step];
  const n = step + 1;
  const pct = Math.round((n / QUESTIONS.length) * 100);

  return (
    <div>
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-sm font-medium text-gray-dark">
          <span>
            Pregunta <b>{n}</b> de {QUESTIONS.length}
          </span>
          <span>{pct}%</span>
        </div>
        <div className="h-[5px] overflow-hidden rounded-full bg-gray-light">
          <div
            className="h-full rounded-full bg-red-uhub transition-[width] duration-[400ms] ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-border-subtle bg-white p-7 sm:p-9">
        <h2 className="mb-6 font-display text-xl font-extrabold leading-snug tracking-tight text-gray-dark sm:text-2xl">
          {question.text}
        </h2>
        <div className="flex flex-col gap-2.5">
          {question.opts.map((opt, i) => {
            const selected = answers[step] === i;
            return (
              <button
                key={opt.text}
                type="button"
                onClick={() => onAnswer(i)}
                className={`block w-full rounded-xl border-[1.5px] px-4 py-4 text-left text-sm leading-relaxed transition-colors duration-150 ${
                  selected
                    ? "border-red-uhub bg-pink-soft font-medium text-gray-dark"
                    : "border-border-subtle bg-white text-gray-dark hover:border-gray-dark hover:bg-gray-light"
                }`}
              >
                {opt.text}
              </button>
            );
          })}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            disabled={step === 0}
            className="px-0.5 py-1.5 text-sm font-medium text-gray-dark/80 disabled:opacity-0"
          >
            ← Anterior
          </button>
        </div>
      </div>
    </div>
  );
}
