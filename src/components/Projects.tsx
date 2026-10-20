import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Todo } from "./Todo";

/**
 * Projecten & opdrachten. Nog geen projectinformatie aangeleverd, dus de
 * sectie toont een bewust gereserveerd skelet in plaats van verzonnen werk.
 */
export function Projects() {
  const items = site.projects.items;
  const slots = [1, 2, 3];

  return (
    <section id="projecten" className="border-y border-line bg-surface-alt py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            {site.projects.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] leading-tight sm:text-[36px]">{site.projects.title}</h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-ink-soft">
            {site.projects.intro}
          </p>
        </Reveal>

        {items.length === 0 ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {slots.map((slot, i) => (
              <Reveal key={slot} delay={i * 90}>
                <article className="flex h-full flex-col rounded-xl border border-dashed border-line bg-surface p-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-fg">
                    Project {String(slot).padStart(2, "0")}
                  </span>
                  <div className="mt-6 space-y-3" aria-hidden="true">
                    <div className="h-4 w-2/3 rounded-full bg-line" />
                    <div className="h-3 w-1/3 rounded-full bg-line/70" />
                    <div className="mt-5 h-3 w-full rounded-full bg-line/70" />
                    <div className="h-3 w-11/12 rounded-full bg-line/70" />
                    <div className="h-3 w-3/4 rounded-full bg-line/70" />
                  </div>
                  <div className="mt-auto pt-7">
                    <Todo label="Project volgt" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {items.map((project, i) => (
              <Reveal key={project.title} delay={i * 90}>
                <article className="h-full rounded-xl border border-line bg-surface p-7">
                  <h3 className="text-[20px]">{project.title}</h3>
                  <p className="mt-2 font-mono text-[12px] tracking-wide text-muted-fg">
                    {[project.client, project.period].filter(Boolean).join(" · ")}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{project.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
