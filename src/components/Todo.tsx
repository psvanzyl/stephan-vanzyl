/**
 * Markeert content die nog aangeleverd moet worden. Bewust als nette,
 * herkenbare chip — geen kapotte of halfgevulde sectie.
 */
export function Todo({ label = "Nog aan te vullen", dark = false }: { label?: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${
        dark
          ? "border-white/25 bg-white/5 text-white/60"
          : "border-line bg-surface-alt text-muted-fg"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/50" : "bg-accent"}`} />
      {label}
    </span>
  );
}

/** Neutrale balk als tijdelijke aanduiding voor ontbrekende tekst. */
export function PlaceholderLines({
  lines = 3,
  dark = false,
}: {
  lines?: number;
  dark?: boolean;
}) {
  return (
    <div className="space-y-3" aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded-full ${dark ? "bg-white/10" : "bg-line"}`}
          style={{ width: `${[100, 92, 78, 64][i % 4]}%` }}
        />
      ))}
    </div>
  );
}
