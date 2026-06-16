"use client";

import { useLang } from "./LanguageProvider";

/** Keyboard-only skip-to-content link. Visible when focused via Tab. */
export default function SkipLink() {
  const { lang } = useLang();
  const label = lang === "he" ? "דלגו לתוכן" : "Skip to content";
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-background focus:shadow-lg"
    >
      {label}
    </a>
  );
}
