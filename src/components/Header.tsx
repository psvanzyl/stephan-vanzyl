"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        solid ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="#page-top"
            className="flex flex-col leading-none"
            aria-label={`${site.name} — naar boven`}
          >
            <span
              className={`text-lg font-semibold tracking-tight transition-colors md:text-xl ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              {site.name}
            </span>
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                solid ? "text-sea" : "text-shallow"
              }`}
            >
              {site.role}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? "text-ink/80 hover:bg-muted hover:text-sea"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors md:hidden ${
              solid ? "text-ink hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 pb-4 md:hidden">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink/85 hover:bg-muted hover:text-sea"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
