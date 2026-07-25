const items = [
  "+2,000 activados en comunidad",
  "+550 acompañados estructuralmente",
  "11 años",
];

export function CredibilityBand() {
  return (
    <div className="bg-gray-dark py-4">
      <p className="mx-auto max-w-[1200px] px-6 text-center font-body text-sm font-medium tracking-wide text-white sm:text-base">
        {items.map((item, i) => (
          <span key={item}>
            {item}
            {i < items.length - 1 && (
              <span className="mx-3 text-white/40" aria-hidden>
                ·
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
