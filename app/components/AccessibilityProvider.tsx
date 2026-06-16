"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/** Identifies a single toggleable accessibility adaptation. */
export type A11yToggleId =
  | "largeText"
  | "highContrast"
  | "underlineLinks"
  | "readableFont"
  | "pauseAnimations"
  | "largerTargets"
  | "focusHighlight"
  | "hideImages"
  | "muteSound";

export type A11yState = Record<A11yToggleId, boolean>;

const DEFAULTS: A11yState = {
  largeText: false,
  highContrast: false,
  underlineLinks: false,
  readableFont: false,
  pauseAnimations: false,
  largerTargets: false,
  focusHighlight: false,
  hideImages: false,
  muteSound: false,
};

const STORAGE_KEY = "buckshish.a11y";

// Each toggle id maps to a class added on <html> when enabled.
// The matching CSS rules live in globals.css under `.a11y-*`.
const CLASS_PREFIX = "a11y-";

type Ctx = {
  state: A11yState;
  toggle: (id: A11yToggleId) => void;
  reset: () => void;
};

const AccessibilityContext = createContext<Ctx | null>(null);

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<A11yState>(DEFAULTS);

  // Restore saved preferences on first client paint
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Partial<A11yState>;
      setState({ ...DEFAULTS, ...parsed });
    } catch {
      // Malformed value — fall back to defaults
    }
  }, []);

  // Mirror state into <html> classes so all CSS rules are global
  useEffect(() => {
    const html = document.documentElement;
    (Object.keys(state) as A11yToggleId[]).forEach((id) => {
      html.classList.toggle(`${CLASS_PREFIX}${id}`, state[id]);
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const toggle = useCallback((id: A11yToggleId) => {
    setState((s) => ({ ...s, [id]: !s[id] }));
  }, []);

  const reset = useCallback(() => setState(DEFAULTS), []);

  const value = useMemo(() => ({ state, toggle, reset }), [state, toggle, reset]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useA11y() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx)
    throw new Error("useA11y must be used inside <AccessibilityProvider>");
  return ctx;
}
