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
};

export function Services() {
  return (
    <section id="diensten" className="border-b border-line bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            {site.services.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-[30px] leading-tight sm:text-[36px]">
            {site.services.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.items.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-7 transition-shadow hover:shadow-[0_10px_40px_-18px_rgba(25,20,20,0.35)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
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
                <h3 className="mt-6 text-[20px] leading-snug">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-fg">{service.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
