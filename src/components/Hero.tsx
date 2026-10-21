"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const INTERVAL = 6000;

/**
 * Hero met roterende activiteitenfoto's — geen portret. De persoon komt later
 * op de pagina (sectie "Over"), net als in het voorbeeld.
 *
 * Opbouw volgt het voorbeeld: min-h-[80vh], volledig beeldvullende foto's via
 * next/image (met srcset, dus ook een kleine variant op mobiel) en een lichte
 * h1 van 72px.
 */
export function Hero() {
  const slides = site.hero.slides;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearInterval(t);
  }, [paused, slides.length]);

  return (
    <section
      id="page-top"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-night text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-slide absolute inset-0 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            quality={75}
            priority={i === 0}
            className={`object-cover ${i === index ? "hero-zoom" : ""}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pt-32 pb-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/75 [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
          {site.hero.kicker}
        </p>

        <h1 className="mt-6 max-w-4xl text-[38px] leading-[1.08] font-light tracking-tight [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] sm:text-[54px] lg:text-[72px]">
          {site.hero.title}
          <br />
          <span className="text-[#8fc7e0]">{site.hero.titleAccent}</span>
        </h1>

        <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-white/80 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)]">
          {site.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={site.hero.primary.href}
            className="rounded-full bg-accent-ink px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-dark"
          >
            {site.hero.primary.label}
          </a>
          <a
            href={site.hero.secondary.href}
            className="rounded-full border border-white/35 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/70 hover:bg-white/10"
          >
            {site.hero.secondary.label}
          </a>
        </div>
      </div>

      {/* Roterende beelden: bedienbaar, en het label vertelt wat je ziet. */}
      <div className="absolute inset-x-0 bottom-16 z-10 border-t border-white/15 bg-black/35 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
            <span className="text-white">
              {String(index + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
            </span>
            <span className="mx-2 text-white/30">—</span>
            {slides[index].caption}
          </p>

          <div className="flex items-center gap-1">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Toon beeld ${i + 1}: ${slide.caption}`}
                aria-current={i === index}
                className="group flex h-11 w-11 items-center justify-center"
              >
                <span
                  className={`block h-2.5 rounded-full transition-all ${
                    i === index ? "w-7 bg-white" : "w-2.5 bg-white/45 group-hover:bg-white/75"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
