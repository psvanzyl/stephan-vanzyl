import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Focus() {
  return (
    <section id="focusgebieden" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-ink">
            {site.focus.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] leading-tight sm:text-[36px]">{site.focus.title}</h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-ink-soft">
            {site.focus.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {site.focus.areas.map((area, i) => (
            <Reveal key={area.title} delay={i * 110}>
              <div className="h-full border-t-2 border-accent pt-7">
                <h3 className="text-[20px] leading-snug">{area.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-fg">{area.body}</p>
                <ul className="mt-6 space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
