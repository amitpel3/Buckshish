"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageProvider";
import { type Lang } from "../i18n";

const OPTIONS: { code: Lang; label: string; flag: string }[] = [
  { code: "he", label: "עברית", flag: "🇮🇱" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const current = OPTIONS.find((o) => o.code === lang)!;

  return (
    <div
      ref={ref}
      className="fixed top-4 left-4 z-50"
      dir="ltr"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t.langSwitcherAria}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-accent/40 bg-black/45 px-3 py-1.5 text-sm text-foreground/90 backdrop-blur-md transition hover:border-accent hover:bg-accent/10"
      >
        <span className="text-lg leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className={`transition ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="mt-2 w-40 overflow-hidden rounded-xl border border-accent/40 bg-[#1a130a]/95 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          {OPTIONS.map((o) => (
            <li key={o.code}>
              <button
                type="button"
                role="option"
                aria-selected={o.code === lang}
                onClick={() => {
                  setLang(o.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-3 py-2 text-sm transition hover:bg-accent/15 ${
                  o.code === lang
                    ? "bg-accent/10 text-accent"
                    : "text-foreground/85"
                }`}
              >
                <span className="text-lg leading-none">{o.flag}</span>
                <span>{o.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
