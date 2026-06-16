"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { type Lang, translations, type Dict } from "../i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "buckshish.lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("he");

  // Restore saved choice on first client paint
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "he" || saved === "en") setLangState(saved);
  }, []);

  // Keep <html lang> and dir in sync so RTL/LTR switches with the language
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = translations[lang].dir;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  return (
    // The fix: "as Dict" forces TypeScript to accept the dynamic translation object
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as Dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}