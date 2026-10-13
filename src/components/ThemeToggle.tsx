"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

/**
 * Light/dark toggle. The current theme is expressed purely through the
 * `dark` class on <html> (set before paint by the script in layout.tsx),
 * so this component holds no state and never mismatches on hydration.
 */
export default function ThemeToggle({ className }: { className?: string }) {
  // Follow the OS while the user hasn't picked a theme explicitly.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still applies for this page */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={className}
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </button>
  );
}
