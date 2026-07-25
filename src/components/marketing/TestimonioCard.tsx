export function TestimonioCard({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border-subtle bg-white p-6 shadow-[0_1px_3px_rgba(71,72,85,0.12),0_1px_2px_rgba(71,72,85,0.08)]">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-light font-display text-sm font-extrabold text-gray-dark"
        aria-hidden
      >
        uH
      </div>
      <blockquote className="mt-4 flex-1 font-body text-[1.05rem] italic leading-snug text-gray-dark">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-gray-dark/80">
        {attribution}
      </figcaption>
    </figure>
  );
}
