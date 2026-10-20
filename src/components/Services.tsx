import { Activity, Database, Map, Plug, Truck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/site";

const icons = {
  map: Map,
  plug: Plug,
  truck: Truck,
  activity: Activity,
  database: Database,
} as const;

export function Services() {
  return (
    <section id="diensten" className="relative z-10 -mt-16 pb-20 pt-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-light text-ink sm:text-4xl">{services.kicker}</h2>
          <p className="mt-3 text-lg text-muted-fg">{services.lead}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.items.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 0.06} className="flex">
                <div className="flex w-full flex-col rounded-xl border border-line bg-white py-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <div className="flex flex-1 flex-col px-6 pt-6">
                    <div className="flex flex-1 flex-col items-center text-center">
                      <div className="mb-4 rounded-full border-2 border-sea/20 bg-muted p-4">
                        <Icon className="h-7 w-7 text-sea" aria-hidden="true" />
                      </div>
                      <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-ink">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-fg">{item.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
