import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Todo } from "@/components/Todo";
import { contact, site } from "@/content/site";

/** Merklogo's zitten niet meer in lucide-react v1 — LinkedIn dus inline. */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.05c.53-.96 1.83-1.97 3.77-1.97 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.19 1.45-2.19 2.96V21h-4V9Z" />
    </svg>
  );
}

export function Contact() {
  const rows = [
    { icon: Mail, label: "E-mail", value: site.email, href: site.email ? `mailto:${site.email}` : null },
    { icon: Phone, label: "Telefoon", value: site.phone, href: site.phone ? `tel:${site.phone}` : null },
    { icon: LinkedInIcon, label: "LinkedIn", value: site.linkedin, href: site.linkedin },
    { icon: MapPin, label: "Locatie", value: site.location, href: null },
  ];

  return (
    <section id="contact" className="bg-muted py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-light text-ink md:text-5xl">{contact.heading}</h2>
          <p className="mx-auto max-w-2xl text-muted-fg">{contact.lead}</p>
        </Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold text-ink">{contact.messageTitle}</h3>
              {contact.messageBody ? (
                <p className="leading-relaxed text-muted-fg">{contact.messageBody}</p>
              ) : (
                <Todo label="Contactmogelijkheden" />
              )}
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-sea px-6 py-3 font-semibold text-white transition-colors hover:bg-sea-light"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Mail mij
                </a>
              ) : (
                <div className="mt-6">
                  <Todo label="E-mailadres toevoegen" />
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-line bg-white p-8 shadow-sm">
              <h3 className="mb-5 text-xl font-semibold text-ink">{contact.detailsTitle}</h3>
              <ul className="space-y-5">
                {rows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <li key={row.label} className="flex items-start gap-4">
                      <span className="mt-0.5 rounded-lg bg-muted p-2.5">
                        <Icon className="h-4 w-4 text-sea" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-fg">
                          {row.label}
                        </span>
                        {row.value ? (
                          row.href ? (
                            <a
                              href={row.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="break-words font-medium text-ink hover:text-sea"
                            >
                              {row.value}
                            </a>
                          ) : (
                            <span className="font-medium text-ink">{row.value}</span>
                          )
                        ) : (
                          <span className="mt-1 block">
                            <Todo />
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
