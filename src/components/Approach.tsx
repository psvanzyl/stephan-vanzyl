import { Reveal } from "@/components/Reveal";
import { approach } from "@/content/site";

export function Approach() {
  return (
    <section id="aanpak" className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal className="mb-14 text-center">
          <h2 className="mb-8 text-4xl font-light text-ink md:text-5xl">{approach.heading}</h2>
          <p className="mx-auto max-w-3xl leading-relaxed text-muted-fg">{approach.lead}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {approach.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full border-t-2 border-sea pt-6">
                <h3 className="mb-3 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="leading-relaxed text-muted-fg">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={0.1}>
          <p className="mb-4 text-lg font-medium text-ink">{approach.ctaBody}</p>
          <a
            href={approach.cta.href}
            className="inline-flex items-center justify-center rounded-lg border-2 border-sea px-7 py-3 font-semibold text-sea transition-colors hover:bg-sea hover:text-white"
          >
            {approach.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
