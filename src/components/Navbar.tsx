"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import ThemeToggle from "@/components/ThemeToggle";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const iconButton =
  "inline-flex h-10 w-10 items-center justify-center rounded-md text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase().replace(" ", "")}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <ThemeToggle className={iconButton} />
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle className={iconButton} />
          <button
            type="button"
            className={iconButton}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <ul className="mx-auto max-w-content px-4 py-2 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-3 text-base text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
