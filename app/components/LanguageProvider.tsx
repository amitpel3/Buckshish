'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

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
  aboutBody: {
    lead: string;
    tag1: string;
    mid1: string;
    tag2: string;
    mid2: string;
    tag3: string;
    tail: string;
  };
  aboutLocation: string;
  membersTitle: string;
  memberNames: Record<string, string>;
  memberRoles: Record<string, string>;
  galleryTitle: string;
  galleryItemAria: (index: number) => string;
  galleryAlt: (index: number) => string;
  lightboxAria: string;
  lightboxAlt: string;
  closeAria: string;
  contactTitle: string;
  socialLabels: Record<string, string>;
  copyright: string;
  madeBy: string;
  [key: string]: any; 
}

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: TranslationKeys;
}

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
    aboutBody: {
      lead: 'מוזיקה שמחברת',
      tag1: 'אנשים',
      mid1: 'דרך',
      tag2: 'קצב',
      mid2: 'עם המון',
      tag3: 'נשמה',
      tail: '.',
    },
    aboutLocation: 'נהריה, ישראל',
    membersTitle: 'חברי הלהקה',
    memberNames: {}, 
    memberRoles: {}, 
    galleryTitle: 'גלריה',
    galleryItemAria: (i) => `תמונה ${i} בגלריה`,
    galleryAlt: (i) => `תמונה ${i}`,
    lightboxAria: 'תצוגת תמונה מוגדלת',
    lightboxAlt: 'תמונה מוגדלת',
    closeAria: 'סגור',
    contactTitle: 'צור קשר',
    socialLabels: {
      instagram: 'אינסטגרם',
      facebook: 'פייסבוק',
      youtube: 'יוטיוב',
      spotify: 'ספוטיפיי',
      soundcloud: 'סאונדקלאוד',
      email: 'אימייל',
    },
    copyright: 'כל הזכויות שמורות',
    madeBy: 'נבנה ע״י',
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
    aboutBody: {
      lead: 'Music that connects',
      tag1: 'people',
      mid1: 'through',
      tag2: 'rhythm',
      mid2: 'with lots of',
      tag3: 'soul',
      tail: '.',
    },
    aboutLocation: 'Nahariya, Israel',
    membersTitle: 'Band Members',
    memberNames: {},
    memberRoles: {},
    galleryTitle: 'Gallery',
    galleryItemAria: (i) => `Gallery item ${i}`,
    galleryAlt: (i) => `Image ${i}`,
    lightboxAria: 'Expanded image view',
    lightboxAlt: 'Expanded image',
    closeAria: 'Close',
    contactTitle: 'Contact Us',
    socialLabels: {
      instagram: 'Instagram',
      facebook: 'Facebook',
      youtube: 'YouTube',
      spotify: 'Spotify',
      soundcloud: 'SoundCloud',
      email: 'Email',
    },
    copyright: 'All rights reserved',
    madeBy: 'Made by',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [lang, setLang] = useState<string>('he'); 
  const currentTranslation = translations[lang] || translations['he'];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: currentTranslation }}>
      <div dir={currentTranslation.dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
}