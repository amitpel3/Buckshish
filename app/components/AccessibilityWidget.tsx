"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  type A11yToggleId,
  useA11y,
} from "./AccessibilityProvider";
import { useLang } from "./LanguageProvider";

/** Categorized layout — drives both the section headings and the toggles inside. */
const CATEGORIES: {
  key: "vision" | "motor" | "cognitive" | "hearing";
  toggles: A11yToggleId[];
}[] = [
  {
    key: "vision",
    toggles: ["largeText", "highContrast", "underlineLinks", "hideImages"],
  },
  {
    key: "motor",
    toggles: ["largerTargets", "focusHighlight"],
  },
  {
    key: "cognitive",
    toggles: ["readableFont", "pauseAnimations"],
  },
  {
    key: "hearing",
    toggles: ["muteSound"],
  },
];

function ToggleRow({
  id,
  label,
  desc,
}: {
  id: A11yToggleId;
  label: string;
  desc: string;
}) {
  const { state, toggle } = useA11y();
  const on = state[id];
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => toggle(id)}
      className={`flex w-full items-start gap-3 rounded-lg border p-3 text-start transition ${
        on
          ? "border-accent bg-accent/15 text-foreground"
          : "border-white/15 bg-white/[0.03] text-foreground/85 hover:border-accent/50 hover:bg-white/[0.06]"
      }`}
    >
      <span
        aria-hidden
        dir="ltr"
        className={`relative mt-0.5 block h-5 w-9 shrink-0 rounded-full transition ${
          on ? "bg-accent" : "bg-white/25"
        }`}
      >
        <span
          className={`absolute top-0.5 block h-4 w-4 rounded-full bg-white shadow transition-all ${
            on ? "left-[18px]" : "left-0.5"
          }`}
        />
      </span>
      <span className="flex-1">
        <span className="block text-sm font-bold">{label}</span>
        <span className="block text-xs text-foreground/60">{desc}</span>
      </span>
    </button>
  );
}

export default function AccessibilityWidget() {
  const { t } = useLang();
  const { state, reset } = useA11y();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Esc to close + restore focus to opener
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Outside click closes the panel
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Number of active toggles, shown as a small badge on the launcher
  const activeCount = Object.values(state).filter(Boolean).length;

  return (
    <>
      {/* Floating launcher */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t.a11yOpenAria}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/60 bg-[#1a130a] text-accent shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition hover:scale-105 hover:border-accent hover:bg-accent/15"
      >
        {/* Universal accessibility icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <circle cx="12" cy="3.5" r="2" />
          <path d="M5 7.5l5 1v5l-1.5 6 2 .5 1.5-5.5 1.5 5.5 2-.5L14 13.5v-5l5-1V6l-7 1.5L5 6v1.5z" />
        </svg>
        {activeCount > 0 && (
          <span
            aria-hidden
            className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-background"
          >
            {activeCount}
          </span>
        )}
      </button>

      {/* Slide-in panel */}
      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          role="dialog"
          aria-modal="false"
          aria-label={t.a11yTitle}
          className="fixed bottom-20 right-4 z-50 flex max-h-[80vh] w-[min(360px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border-2 border-accent/50 bg-[#1a130a] shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-accent/30 p-4">
            <div>
              <h2 className="font-bold text-accent">{t.a11yTitle}</h2>
              <p className="mt-0.5 text-xs text-foreground/60">
                {t.a11ySubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
              }}
              aria-label={t.a11yCloseAria}
              className="text-foreground/60 transition hover:text-accent"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Categorized toggles */}
          <div className="flex-1 overflow-y-auto p-4">
            {CATEGORIES.map((cat) => (
              <section key={cat.key} className="mb-5 last:mb-0">
                <h3 className="mb-2 text-xs font-bold tracking-wider text-accent uppercase">
                  {t.a11yCategories[cat.key]}
                </h3>
                <div className="grid gap-2">
                  {cat.toggles.map((id) => (
                    <ToggleRow
                      key={id}
                      id={id}
                      label={
                        t.a11yToggles[
                          `${id}` as keyof typeof t.a11yToggles
                        ] as string
                      }
                      desc={
                        t.a11yToggles[
                          `${id}Desc` as keyof typeof t.a11yToggles
                        ] as string
                      }
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-2 border-t border-accent/30 p-3">
            <button
              type="button"
              onClick={reset}
              disabled={activeCount === 0}
              className="rounded-md border border-accent/40 px-3 py-1.5 text-xs text-foreground/80 transition hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t.a11yReset}
            </button>
            <Link
              href="/accessibility"
              onClick={() => setOpen(false)}
              className="text-xs text-accent/80 underline-offset-2 hover:text-accent hover:underline"
            >
              {t.a11yStatementLink}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
