import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Todo } from "./Todo";

export function References() {
  const quotes = site.references.quotes;

  return (
    <section id="referenties" className="bg-night py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#7ec8cf]">
            {site.references.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] leading-tight sm:text-[36px]">
            {site.references.title}
          </h2>
        </Reveal>

        {quotes.length === 0 ? (
          <Reveal delay={100}>
            <figure className="mt-12 rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-10 lg:p-14">
              <span className="block font-serif text-[54px] leading-none text-white/25" aria-hidden="true">
                &ldquo;
              </span>
              <p className="mt-2 max-w-3xl text-[19px] leading-relaxed font-light text-white/60">
                Hier komen aanbevelingen en referenties van opdrachtgevers en samenwerkingspartners.
              </p>
              <figcaption className="mt-8 flex flex-wrap items-center gap-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/40">
                  Naam · Organisatie
                </span>
                <Todo dark label="Referentie volgt" />
              </figcaption>
            </figure>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {quotes.map((q) => (
              <figure key={q.name} className="rounded-xl border border-white/15 p-8">
                <blockquote className="text-[16px] leading-relaxed text-white/80">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-mono text-[12px] tracking-wide text-white/45">
                  {q.name} · {q.role}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
