import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="aanpak" className="bg-surface py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-ink">
              {site.approach.eyebrow}
            </p>
            <h2 className="mt-4 text-[30px] leading-tight sm:text-[36px]">{site.approach.title}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{site.approach.intro}</p>
          </Reveal>

          <Reveal delay={120}>
            <ol className="divide-y divide-line border-y border-line">
              {site.approach.steps.map((step) => (
                <li key={step.step} className="flex gap-6 py-7">
                  <span className="font-mono text-[12px] tracking-[0.18em] text-accent-ink">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-[19px] leading-snug">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-fg">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
