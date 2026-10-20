"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Todo, TodoLine } from "@/components/Todo";
import { about, site } from "@/content/site";

/** Slides met dezelfde opbouw als het voorbeeld: donker portretpaneel links,
 *  inhoudspaneel rechts. Portretfoto ontbreekt nog → monogram als fallback. */
function Portrait({ label }: { label: string }) {
  return (
    <div className="relative h-full w-full bg-ink-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-6xl font-medium tracking-tight text-white/15">
          {site.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 3)
            .join("")}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink-900/40" />
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-shallow">{label}</p>
        <p className="mt-1 text-xl font-medium text-white">{site.name}</p>
        <div className="mt-3">
          <Todo label="Foto" />
        </div>
      </div>
    </div>
  );
}

export function About() {
  const [index, setIndex] = useState(0);
  const slides = [about.intro, about.expertise, about.vision];
  const total = slides.length;
  const go = (dir: number) => setIndex((v) => (v + dir + total) % total);

  const slide = slides[index];

  return (
    <section id="over" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-light text-ink sm:text-4xl">{about.heading}</h2>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <div className="grid min-h-[550px] grid-cols-1 overflow-hidden rounded-2xl bg-ink-900 lg:grid-cols-12 md:min-h-[450px]">
            <div className="relative lg:col-span-4">
              <Portrait label={slide.eyebrow} />
            </div>

            <div className="flex flex-col justify-center bg-muted p-6 md:p-8 lg:col-span-8 lg:p-10">
              {index === 0 && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold text-ink md:text-3xl">
                      {about.intro.title}
                    </h3>
                    <p className="leading-relaxed text-muted-fg">{about.intro.body}</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sea">
                        Opleidingen
                      </h4>
                      <ul className="space-y-3">
                        {about.intro.education.map((e, i) =>
                          e.value ? (
                            <li key={i} className="text-sm text-ink">
                              {e.value}
                            </li>
                          ) : (
                            <TodoLine key={i} label={e.label} />
                          ),
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sea">
                        Ervaring
                      </h4>
                      <ul className="space-y-3">
                        {about.intro.experience.map((e, i) =>
                          e.value ? (
                            <li key={i} className="text-sm text-ink">
                              {e.value}
                            </li>
                          ) : (
                            <TodoLine key={i} label={e.label} />
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold text-ink md:text-3xl">
                      {about.expertise.title}
                    </h3>
                    <p className="leading-relaxed text-muted-fg">{about.expertise.body}</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sea">
                        Specialisaties
                      </h4>
                      <ul className="space-y-2">
                        {about.expertise.specialisations.map((s) => (
                          <li key={s} className="text-sm text-ink">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sea">
                        Sectoren
                      </h4>
                      <ul className="space-y-2">
                        {about.expertise.sectors.map((s) => (
                          <li key={s} className="text-sm text-ink">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold text-ink md:text-3xl">
                      {about.vision.title}
                    </h3>
                    <p className="leading-relaxed text-muted-fg">{about.vision.body}</p>
                  </div>
                  <div>
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sea">
                      Uitgangspunten
                    </h4>
                    <ul className="space-y-2">
                      {about.vision.points.map((p) => (
                        <li key={p} className="text-sm text-ink">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Vorige"
            className="rounded-full border border-line bg-white p-3 text-ink transition-colors hover:bg-sea hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ga naar ${s.title}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-sea" : "w-2 bg-line hover:bg-sea/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Volgende"
            className="rounded-full border border-line bg-white p-3 text-ink transition-colors hover:bg-sea hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
