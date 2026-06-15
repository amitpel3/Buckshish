export type Lang = "he" | "en";

export const translations = {
  he: {
    dir: "rtl" as const,
    // Hero
    heroEyebrow: "Instrumental · Psychedelic · World",
    bandName: "בקשיש",
    bandNameRoman: "Buckshish",
    heroDescription:
      "הרכב אינסטרומנטלי המבצע מוזיקה מקורית המשלבת רוק מתקדם, מוזיקת עולם והשפעות אלקטרוניות פסיכדליות.",
    scrollCue: "גלו עוד",
    scrollCueAria: "גלילה למטה",
    logoAlt: "הלוגו של בקשיש",
    bannerAlt: "חברי בקשיש",
    // About
    aboutTitle: "על ההרכב",
    aboutBody: {
      lead: "בקשיש הם הרכב אינסטרומנטלי המבצע מוזיקה מקורית המשלבת",
      tag1: "רוק מתקדם",
      mid1: ",",
      tag2: "מוזיקת עולם",
      mid2: "והשפעות",
      tag3: "אלקטרוניות פסיכדליות",
      tail: ". המסע המוזיקלי של ההרכב נע בין מזרח למערב, בין החשמלי לאתני — חוויה חיה שכולה צליל, ללא מילים.",
    },
    aboutLocation: "הרכב מוזיקה אינסטרומנטלי מנהריה, פעיל בהופעות חיות ברחבי הארץ.",
    // Members
    membersTitle: "חברי ההרכב",
    memberNames: {
      "עמית פלד": "עמית פלד",
      "אפי טליאס": "אפי טליאס",
      "אודי שדות": "אודי שדות",
      "יובל חן": "יובל חן",
      "אלמוג אלקיים": "אלמוג אלקיים",
    } as Record<string, string>,
    memberRoles: {
      "גיטרה חשמלית": "גיטרה חשמלית",
      "גיטרה בס": "גיטרה בס",
      "קלידים וסינתיסייזרים": "קלידים וסינתיסייזרים",
      "תופים": "תופים",
      "כלי נגינה אתניים וגיטרה חשמלית": "כלי נגינה אתניים וגיטרה חשמלית",
    } as Record<string, string>,
    // Gallery
    galleryTitle: "גלריה",
    galleryItemAria: (i: number) => `הגדלת תמונה ${i}`,
    galleryAlt: (i: number) => `בקשיש — תמונה ${i}`,
    lightboxAria: "תצוגת תמונה מוגדלת",
    lightboxAlt: "בקשיש — תצוגה מוגדלת",
    closeAria: "סגירה",
    // Contact
    contactTitle: "בואו נישאר בקשר",
    socialLabels: {
      instagram: "אינסטגרם",
      facebook: "פייסבוק",
      youtube: "יוטיוב",
      spotify: "ספוטיפיי",
      soundcloud: "סאונדקלאוד",
      email: "אימייל",
    },
    copyright: "בקשיש · BUCKSHISH",
    madeBy: "Made by",
    // Language switcher
    langSwitcherAria: "בחירת שפה",
  },
  en: {
    dir: "ltr" as const,
    heroEyebrow: "Instrumental · Psychedelic · World",
    bandName: "Buckshish",
    bandNameRoman: "בקשיש",
    heroDescription:
      "An instrumental band performing original music that blends progressive rock, world music, and psychedelic electronic influences.",
    scrollCue: "Discover more",
    scrollCueAria: "Scroll down",
    logoAlt: "Buckshish logo",
    bannerAlt: "Buckshish band members",
    aboutTitle: "About the Band",
    aboutBody: {
      lead: "Buckshish is an instrumental band performing original music that blends",
      tag1: "progressive rock",
      mid1: ",",
      tag2: "world music",
      mid2: "and",
      tag3: "psychedelic electronic influences",
      tail: ". Their musical journey moves between East and West, electric and ethnic — a live experience that is pure sound, without words.",
    },
    aboutLocation: "An instrumental music ensemble from Nahariya, active in live performances across Israel.",
    membersTitle: "Band Members",
    memberNames: {
      "עמית פלד": "Amit Peled",
      "אפי טליאס": "Effi Talias",
      "אודי שדות": "Udi Sadot",
      "יובל חן": "Yuval Chen",
      "אלמוג אלקיים": "Almog Elkayam",
    } as Record<string, string>,
    memberRoles: {
      "גיטרה חשמלית": "Electric Guitar",
      "גיטרה בס": "Bass Guitar",
      "קלידים וסינתיסייזרים": "Keys & Synthesizers",
      "תופים": "Drums",
      "כלי נגינה אתניים וגיטרה חשמלית": "Ethnic Instruments & Electric Guitar",
    } as Record<string, string>,
    galleryTitle: "Gallery",
    galleryItemAria: (i: number) => `Enlarge image ${i}`,
    galleryAlt: (i: number) => `Buckshish — image ${i}`,
    lightboxAria: "Enlarged image view",
    lightboxAlt: "Buckshish — enlarged view",
    closeAria: "Close",
    contactTitle: "Let's Stay in Touch",
    socialLabels: {
      instagram: "Instagram",
      facebook: "Facebook",
      youtube: "YouTube",
      spotify: "Spotify",
      soundcloud: "SoundCloud",
      email: "Email",
    },
    copyright: "Buckshish · בקשיש",
    madeBy: "Made by",
    langSwitcherAria: "Select language",
  },
} satisfies Record<Lang, unknown>;

export type Dict = typeof translations.he;
