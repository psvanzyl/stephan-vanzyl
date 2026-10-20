import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night py-14 text-white">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-[18px] font-medium tracking-tight">{site.name}</p>
            <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-white/55">
              {site.role} — {site.tagline}
            </p>
          </div>

          <nav aria-label="Voetnavigatie">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Menu</p>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[14px] text-white/70 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Contact</p>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {site.contact.email && (
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-white/70 hover:text-white"
                  >
                    {site.contact.email}
                  </a>
                </li>
              )}
              {site.contact.linkedin ? (
                <li>
                  <a
                    href={site.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              ) : (
                <li className="text-white/35">LinkedIn — nog aan te vullen</li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-[12.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>
            <a href={site.footer.photoCredits} className="hover:text-white/70">
              {site.footer.note}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
