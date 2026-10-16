"use client";

import { useState } from "react";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import { basePath, site } from "@/lib/site";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { href: `${basePath}/#home`, label: "Home" },
  { href: `${basePath}/#about`, label: "About" },
  { href: `${basePath}/#education`, label: "Education" },
  { href: `${basePath}/#skills`, label: "Skills" },
  { href: `${basePath}/#projects`, label: "Projects" },
  { href: `${basePath}/#contact`, label: "Contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#0c0f0e]/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href={`${basePath}/#home`} className="font-display text-lg tracking-tight">
          <span className="sm:hidden">MSK</span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/80 transition hover:text-pine dark:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 transition hover:border-pine hover:text-pine dark:border-white/15"
          >
            {theme === "dark" ? <LuSun aria-hidden /> : <LuMoon aria-hidden />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 md:hidden dark:border-white/15"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <LuX aria-hidden /> : <LuMenu aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-ink/10 px-6 py-4 md:hidden dark:border-white/10" aria-label="Mobile">
          <ul className="grid gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-sm hover:bg-pine/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
