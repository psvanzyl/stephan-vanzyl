"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { software } from "@/content/site";

export function Software() {
  const [filter, setFilter] = useState("Alles");

  const items = useMemo(
    () =>
      filter === "Alles"
        ? software.items
        : software.items.filter((item) => item.tags.includes(filter)),
    [filter],
  );

  return (
    <section id="software" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal className="mb-10">
          <h2 className="mb-4 text-4xl font-light text-ink md:text-5xl">{software.heading}</h2>
          <p className="max-w-3xl text-muted-fg">{software.lead}</p>
        </Reveal>

        <Reveal className="mb-10">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter op categorie">
            {software.filters.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-sea bg-sea text-white"
                      : "border-line bg-white text-ink hover:border-sea hover:text-sea"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-fg">
          {items.length} van {software.items.length} toepassingen
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i, 6) * 0.05}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-sea">
                    {item.title}
                  </h3>
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-muted-fg transition-colors group-hover:text-sea"
                    aria-hidden="true"
                  />
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-fg">{item.body}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted-fg"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-sea">
                    <span className="h-1.5 w-1.5 rounded-full bg-shallow" aria-hidden="true" />
                    live
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
