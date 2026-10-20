"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % hero.backgrounds.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {hero.backgrounds.map((src, i) => (
          <div
            key={src}
            className="hero-fade absolute inset-0"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-shallow sm:text-sm">
          {hero.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-light text-white sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/85 sm:text-xl">
          {hero.subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="inline-flex w-full items-center justify-center rounded-lg bg-sea px-8 py-4 font-semibold text-white transition-colors hover:bg-sea-light sm:w-auto"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/70 px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-ink sm:w-auto"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <a
        href="#diensten"
        aria-label="Naar beneden"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
