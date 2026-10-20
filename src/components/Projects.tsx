import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Todo } from "@/components/Todo";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <section id="projecten" className="bg-muted py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal className="mb-12">
          <h2 className="mb-4 text-4xl font-light text-ink md:text-5xl">{projects.heading}</h2>
          <p className="text-muted-fg">{projects.lead}</p>
        </Reveal>

        <div className="space-y-8">
          {projects.items.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <article className="rounded-2xl border border-line bg-white p-6 shadow-sm md:p-9">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  {project.period ? (
                    <span className="rounded-full bg-ink px-3 py-1 font-mono text-xs text-white">
                      {project.period}
                    </span>
                  ) : (
                    <Todo label="Periode" />
                  )}
                  {project.scope ? (
                    <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-ink">
                      {project.scope}
                    </span>
                  ) : (
                    <Todo label="Omvang" />
                  )}
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-ink md:text-3xl">
                  {project.title}
                </h3>
                <p className="mb-6 max-w-3xl leading-relaxed text-muted-fg">{project.body}</p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sea">
                      Activiteiten
                    </h4>
                    <ul className="space-y-2">
                      {project.activities.map((a) => (
                        <li key={a} className="flex gap-3 text-sm text-ink">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-shallow" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sea">
                        Opdrachtgever
                      </h4>
                      {project.client ? (
                        <p className="text-sm text-ink">{project.client}</p>
                      ) : (
                        <Todo />
                      )}
                    </div>
                    <div>
                      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sea">
                        Live
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {project.links.map((l) => (
                          <li key={l.href}>
                            <a
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-medium text-ink transition-colors hover:border-sea hover:text-sea"
                            >
                              {l.label}
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
