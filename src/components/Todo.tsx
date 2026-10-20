/**
 * Markeert content die nog aangeleverd moet worden. Bewust zichtbaar (niet
 * weggelaten) zodat er geen lege secties ontstaan en duidelijk is wat er nog
 * ontbreekt. Vervang door echte tekst zodra die er is.
 */
export function Todo({ label = "Nog aan te vullen" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line bg-white/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-fg">
      <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
      {label}
    </span>
  );
}

/** Grijze placeholder-regel voor lijsten (opleidingen, ervaring, etc.). */
export function TodoLine({ label }: { label: string }) {
  return (
    <li className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-ink">{label}</span>
      <Todo />
    </li>
  );
}
