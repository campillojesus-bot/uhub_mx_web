type Stat = {
  value: string;
  label: string;
  color?: "red" | "orange";
};

export function StatCallout({ stats, caption }: { stats: Stat[]; caption?: string }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <div
              className={`font-display text-[clamp(2.5rem,4vw,3.75rem)] font-black leading-none ${
                stat.color === "orange" ? "text-orange-accent" : "text-red-uhub"
              }`}
            >
              {stat.value}
            </div>
            <p className="mt-2 text-sm font-medium text-gray-dark">{stat.label}</p>
          </div>
        ))}
      </div>
      {caption && (
        <p className="mt-6 text-center text-xs uppercase tracking-[0.08em] text-gray-dark/80 sm:text-left">
          {caption}
        </p>
      )}
    </div>
  );
}
