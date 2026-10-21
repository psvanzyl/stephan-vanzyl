import { site } from "@/content/site";
import { Reveal } from "./Reveal";

const ICONS: Record<string, React.ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  trending: (
    <>
      <path d="M3 17l5.5-5.5 3.5 3.5L21 6" />
      <path d="M15 6h6v6" />
    </>
  ),
  code: (
    <>
      <path d="M9 18l-6-6 6-6" />
      <path d="M15 6l6 6-6 6" />
    </>
  ),
  kanban: (
    <>
      <rect x="3" y="3" width="7" height="18" rx="1.5" />
      <rect x="14" y="3" width="7" height="11" rx="1.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  share: (
    <>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
    </>
  ),
};

/**
 * Diensten — net als in het voorbeeld een kaartenrij die over de onderkant van
 * de hero heen valt (-mt-16). De eerste kaart is de inleiding (in de
 * accentkleur), daarna de diensten zelf. Zes kaarten in een 3-koloms raster.
 */
export function Services() {
  return (
    <section id="diensten" className="relative z-10 -mt-16 pb-20 pt-0">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <article className="flex h-full flex-col justify-between rounded-xl bg-accent-ink p-7 text-white shadow-[0_18px_50px_-30px_rgba(25,20,20,0.5)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/90">
                {site.services.eyebrow}
              </p>
              <h2 className="mt-8 text-[26px] leading-tight font-light">{site.services.title}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/90">{site.services.intro}</p>
            </article>
          </Reveal>

          {site.services.items.map((service, i) => (
            <Reveal key={service.title} delay={(i + 1) * 70}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-7 shadow-[0_18px_50px_-34px_rgba(25,20,20,0.45)] transition-shadow hover:shadow-[0_22px_60px_-30px_rgba(25,20,20,0.5)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[service.icon]}
                  </svg>
                </span>
                <h3 className="mt-6 text-[19px] leading-snug">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-fg">{service.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
