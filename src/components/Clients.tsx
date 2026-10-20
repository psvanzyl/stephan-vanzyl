import { Reveal } from "@/components/Reveal";
import { Todo } from "@/components/Todo";
import { clients } from "@/content/site";

export function Clients() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal>
          <h3 className="mb-10 text-center text-3xl font-light text-ink">{clients.heading}</h3>
        </Reveal>
        {clients.logos.length === 0 ? (
          <div className="flex justify-center">
            <Todo label="Opdrachtgevers toevoegen" />
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-10">
            {clients.logos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-12 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
