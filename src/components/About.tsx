"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Todo, PlaceholderLines } from "./Todo";

/**
 * "Over" — hier komt de persoon (portret + tekst). De inhoud is nog niet
 * aangeleverd, dus de tekstvlakken zijn zichtbaar gereserveerd.
 */
export function About() {
  const slides = site.about.slides;
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section id="over" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-accent to-accent-dark">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[76px] leading-none font-light text-white/90">SvZ</span>
                <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-white/60">
                  Portret volgt
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              {site.about.eyebrow}
            </p>
            <h2 className="mt-4 text-[30px] leading-tight sm:text-[36px]">{site.about.title}</h2>

            <div className="mt-8 border-l-2 border-accent pl-6">
              <h3 className="text-[20px]">{slide.heading}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-fg">{slide.body}</p>
              <div className="mt-6 max-w-md">
                <PlaceholderLines lines={3} />
              </div>
              <div className="mt-6">
                <Todo label="Tekst nog aan te vullen" />
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                aria-label="Vorige"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % slides.length)}
                aria-label="Volgende"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="ml-1 flex items-center">
                {slides.map((s, i) => (
                  <button
                    key={s.heading}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Toon ${s.heading}`}
                    aria-current={i === index}
                    className="flex h-11 w-8 items-center justify-center"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all ${
                        i === index ? "w-6 bg-accent" : "w-2 bg-line"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {site.contact.email && (
              <p className="mt-8 text-[15px] text-ink-soft">
                Liever direct schakelen?{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                >
                  {site.contact.email}
                </a>
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
