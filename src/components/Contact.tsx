import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { Todo } from "./Todo";

export function Contact() {
  const { email, linkedin, location, kvk } = site.contact;

  const rows: { label: string; value: string | null; href?: string }[] = [
    { label: "E-mail", value: email, href: email ? `mailto:${email}` : undefined },
    { label: "LinkedIn", value: linkedin, href: linkedin ?? undefined },
    { label: "Locatie", value: location },
    { label: "KvK / BTW", value: kvk },
  ];

  return (
    <section id="contact" className="border-t border-line bg-surface-alt py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">Contact</p>
            <h2 className="mt-4 text-[30px] leading-tight sm:text-[36px]">
              Laten we kennismaken
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">
              Heb je een vraagstuk op het gebied van transport, logistiek, mobiliteit of data? Stuur
              een bericht — dan denk ik graag mee over de aanpak.
            </p>

            {email && (
              <a
                href={`mailto:${email}`}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-[15px] font-medium text-white transition-colors hover:bg-accent-dark"
              >
                Mail mij
                <span aria-hidden="true">→</span>
              </a>
            )}
          </Reveal>

          <Reveal delay={120}>
            <dl className="divide-y divide-line border-y border-line">
              {rows.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-6 py-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-fg">
                    {row.label}
                  </dt>
                  <dd className="text-right text-[15px] text-ink">
                    {row.value ? (
                      row.href ? (
                        <a
                          href={row.href}
                          className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                          {...(row.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )
                    ) : (
                      <Todo label="Nog aan te vullen" />
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
