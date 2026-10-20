import { Reveal } from "@/components/Reveal";
import { focus } from "@/content/site";

export function Focus() {
  return (
    <section id="focusgebieden" className="bg-muted py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal className="mb-12">
          <h2 className="text-center text-4xl font-light text-ink md:text-5xl">
            {focus.heading}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {focus.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="h-full rounded-xl border border-line bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="font-mono text-sm leading-relaxed text-muted-fg">{item.keywords}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
