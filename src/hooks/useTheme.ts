import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "../config/siteConfig";
import type { ThemeMode } from "../types/site";

export type ResolvedTheme = "dark" | "light";

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getStoredTheme(): ResolvedTheme | null {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return null;
}

export function resolveTheme(defaultTheme: ThemeMode = siteConfig.defaultTheme): ResolvedTheme {
  const stored = getStoredTheme();
  if (stored) return stored;
  if (defaultTheme === "system") return getSystemTheme();
  return defaultTheme === "light" ? "light" : "dark";
}

export function applyTheme(theme: ResolvedTheme) {
  document.body.classList.toggle("light", theme === "light");
}

export function useTheme() {
  const [theme, setTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(siteConfig.defaultTheme),
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
