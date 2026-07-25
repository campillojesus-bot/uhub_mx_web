export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-display text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-red-uhub">
      <span className="inline-block h-[2px] w-[26px] bg-red-uhub" />
      {children}
      <span className="inline-block h-[2px] w-[26px] bg-red-uhub" />
    </div>
  );
}
