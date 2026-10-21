"use client";

import { useMemo, useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

/**
 * Software & prototypes: de live tools van Stephan. Kaarten met echte
 * schermafbeeldingen en werkende links — dit is het bewijs, niet een claim.
 */
export function Software() {
  const { filters, items } = site.software;
  const [active, setActive] = useState<string>(filters[0]);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    map.set(filters[0], items.length);
    for (const filter of filters.slice(1)) {
      map.set(filter, items.filter((i) => (i.tags as readonly string[]).includes(filter)).length);
    }
    return map;
  }, [filters, items]);

  const visible = useMemo(
    () =>
      active === filters[0]
        ? items
        : items.filter((i) => (i.tags as readonly string[]).includes(active)),
    [active, filters, items],
  );

  return (
    <section id="software" className="bg-surface py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent-ink">
            {site.software.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] leading-tight sm:text-[36px]">{site.software.title}</h2>
          <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-ink-soft">
            {site.software.intro}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-line pb-6">
            {filters.map((filter) => {
              const isActive = filter === active;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[14px] transition-colors ${
                    isActive
                      ? "border-accent-ink bg-accent-ink text-white"
                      : "border-line text-ink-soft hover:border-accent-ink hover:text-accent-ink"
                  }`}
                >
                  {filter}
                  <span
                    className={`font-mono text-[11px] ${isActive ? "text-white/70" : "text-muted-fg"}`}
                  >
                    {counts.get(filter) ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 90}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-24px_rgba(25,20,20,0.45)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-alt">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.shot}
                    alt={`Schermafbeelding van ${item.name}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-ink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-[19px] leading-snug">{item.name}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-fg">{item.desc}</p>
                  <span className="mt-auto pt-6 text-[14px] font-medium text-accent-ink">
                    Bekijk de app
                    <span className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/*
          Open bronnen: waar de data vandaan komt. Dit maakt de tools
          navolgbaar en legt de link naar de standaarden en registers.
        */}
        <Reveal delay={60}>
          <div className="mt-16 rounded-xl border border-line bg-surface-alt p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-fg">
              Open bronnen &amp; standaarden
            </p>
            <h3 className="mt-4 text-[21px] leading-snug">
              De data achter deze tools is openbaar — en na te lopen
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {site.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="text-[15px] font-medium text-ink group-hover:text-accent-ink">
                      {source.name}
                      <span className="ml-1 inline-block text-accent-ink opacity-0 transition-opacity group-hover:opacity-100">
                        ↗
                      </span>
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-relaxed text-muted-fg">
                      {source.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
