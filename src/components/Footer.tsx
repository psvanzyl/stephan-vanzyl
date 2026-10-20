import { nav, site, footer } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 pt-16 text-white/75">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-xl font-semibold text-white">{site.name}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-shallow">
              {site.role}
            </p>
            <p className="mt-5 max-w-md leading-relaxed">{footer.blurb}</p>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-shallow">
              {footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-shallow">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              {site.email ? (
                <li>
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                    {site.email}
                  </a>
                </li>
              ) : (
                <li className="text-white/45">E-mail volgt</li>
              )}
              {site.phone ? (
                <li>
                  <a href={`tel:${site.phone}`} className="transition-colors hover:text-white">
                    {site.phone}
                  </a>
                </li>
              ) : (
                <li className="text-white/45">Telefoon volgt</li>
              )}
              {site.linkedin ? (
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              ) : (
                <li className="text-white/45">LinkedIn volgt</li>
              )}
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm sm:flex-row">
          <p>
            © {year} {site.name}. Alle rechten voorbehouden.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-white/40">
            {site.kvk ? `KvK ${site.kvk}` : "KvK volgt"} · {site.btw ? `BTW ${site.btw}` : "BTW volgt"}
          </p>
        </div>
      </div>
    </footer>
  );
}
