"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Todo } from "@/components/Todo";
import { testimonials } from "@/content/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const items = testimonials.items;
  const total = items.length;
  const go = (dir: number) => setIndex((v) => (v + dir + total) % total);

  return (
    <section id="referenties" className="relative w-full bg-ink py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-4xl font-light tracking-wide text-white sm:text-5xl">
          {testimonials.heading}
        </h2>

        {total === 0 ? (
          <div className="flex justify-center">
            <Todo label="Referenties toevoegen" />
          </div>
        ) : (
          <div className="text-center">
            <Quote className="mx-auto mb-6 h-9 w-9 text-shallow" aria-hidden="true" />
            <blockquote className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90 sm:text-xl">
              “{items[index].quote}”
            </blockquote>
            <p className="font-semibold text-white">{items[index].name}</p>
            <p className="text-sm text-shallow">
              {[items[index].role, items[index].org].filter(Boolean).join(", ")}
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Vorige referentie"
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-sea"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex gap-2">
                {items.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Referentie ${i + 1}`}
                    className={`h-2 w-2 rounded-full ${
                      i === index ? "bg-shallow" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Volgende referentie"
                className="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-sea"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
