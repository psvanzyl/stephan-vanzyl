"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = !solid && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        light ? "bg-transparent" : "border-b border-line bg-surface/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <a
          href="#page-top"
          className={`flex items-baseline gap-2.5 transition-colors ${
            light ? "text-white" : "text-ink"
          }`}
        >
          <span className="text-[17px] font-medium tracking-tight">{site.name}</span>
          <span
            className={`hidden font-mono text-[10px] uppercase tracking-[0.22em] sm:inline ${
              light ? "text-white/60" : "text-muted-fg"
            }`}
          >
            Transport &amp; Mobiliteit
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav
            .filter((item) => item.href !== "#projecten" || site.projects.items.length > 0)
            .map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`py-1.5 text-[14px] transition-colors ${
                light ? "text-white/85 hover:text-white" : "text-ink-soft hover:text-accent-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors ${
              light
                ? "bg-white text-ink hover:bg-white/90"
                : "bg-accent-ink text-white hover:bg-accent-dark"
            }`}
          >
            Neem contact op
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          className={`flex h-11 w-11 items-center justify-center rounded-md lg:hidden ${
            light ? "text-white" : "text-ink"
          }`}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-surface lg:hidden">
          <nav className="mx-auto max-w-[1280px] px-6 py-4">
            {site.nav
              .filter((item) => item.href !== "#projecten" || site.projects.items.length > 0)
              .map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-4 text-[16px] text-ink last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 mb-2 block rounded-full bg-accent-ink px-6 py-3.5 text-center text-[15px] font-medium text-white"
            >
              Neem contact op
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
