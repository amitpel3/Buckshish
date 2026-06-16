'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. Define the interface for the dictionary structure
export interface TranslationKeys {
  dir: 'rtl' | 'ltr';
  heroEyebrow: string;
  bandName: string;
  bandNameRoman: string;
  heroDescription: string;
  scrollCue: string;
  scrollCueAria: string;
  logoAlt: string;
  bannerAlt: string;
  aboutTitle: string;
  langSwitcherAria: string;
  // If you have more keys, TypeScript will let you know here, 
  // or you can add a dynamic index signature like below to allow flexibility:
  [key: string]: any; 
}

// 2. Define the structure of the context state
interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: TranslationKeys;
}

// 3. Define your actual translations data
// (Make sure your exact Hebrew and English text matches what you had before)
const translations: Record<string, TranslationKeys> = {
  he: {
    dir: 'rtl',
    heroEyebrow: 'להקת בקשיש מציגה',
    bandName: 'עמית ובקשיש',
    bandNameRoman: 'Bakshish',
    heroDescription: 'מוזיקה חיה לאירועים, מופעים וסדנאות קצב קהילתיות.',
    scrollCue: 'גלול למטה',
    scrollCueAria: 'גלול לתוכן הנוסף',
    logoAlt: 'לוגו להקת בקשיש',
    bannerAlt: 'תמונת קאבר של הלהקה',
    aboutTitle: 'עלינו',
    langSwitcherAria: 'שנה שפה',
  },
  en: {
    dir: 'ltr',
    heroEyebrow: 'Bakshish Music Band Presents',
    bandName: 'Bakshish',
    bandNameRoman: 'Bakshish',
    heroDescription: 'Live music for events, shows, and community rhythm workshops.',
    scrollCue: 'Scroll down',
    scrollCueAria: 'Scroll to more content',
    logoAlt: 'Bakshish band logo',
    bannerAlt: 'Band cover image',
    aboutTitle: 'About Us',
    langSwitcherAria: 'Change language',
  },
};

// 4. Initialize the context with an explicit type to prevent type inference lock
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Default to Hebrew ('he') or English ('en') depending on your target primary audience
  const [lang, setLang] = useState<string>('he'); 

  // Safely fallback to Hebrew if the selected language key doesn't exist
  const currentTranslation = translations[lang] || translations['he'];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: currentTranslation }}>
      <div dir={currentTranslation.dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

// 5. Custom hook for easy consumption across components
export function useLang() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}