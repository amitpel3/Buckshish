export const BAND_IMAGES = Array.from(
  { length: 8 },
  (_, i) => `/images/band-${i + 1}.jpg`
);

export const BANNER_IMAGE = "/images/banner.jpg";

export const MEMBERS = [
  {
    name: "עמית פלד",
    role: "גיטרה חשמלית",
    image: "/images/members/amit-peled.jpg",
  },
  {
    name: "אפי טליאס",
    role: "גיטרה בס",
    image: "/images/members/efi-talias.jpg",
  },
  {
    name: "אודי שדות",
    role: "קלידים וסינתיסייזרים",
    image: "/images/members/udi-sadot.jpg",
  },
  {
    name: "יובל חן",
    role: "תופים",
    image: "/images/members/yuval-chen.jpg",
  },
  {
    name: "אלמוג אלקיים",
    role: "כלי נגינה אתניים וגיטרה חשמלית",
    image: "/images/members/almog-elkayam.jpg",
  },
];

// Every photo in the collection: live shots plus the member portraits
export const GALLERY_IMAGES = [
  ...BAND_IMAGES,
  ...MEMBERS.map((m) => m.image),
];

export const SOCIALS = [
  {
    label: "אינסטגרם",
    href: "https://www.instagram.com/buckshishmusic/",
    handle: "@buckshishmusic",
  },
  {
    label: "פייסבוק",
    href: "https://www.facebook.com/buckshish/",
    handle: "buckshish",
  },
  {
    label: "יוטיוב",
    href: "https://www.youtube.com/@buckshish",
    handle: "@buckshish",
  },
  {
    label: "ספוטיפיי",
    href: "https://open.spotify.com/artist/0apns7nyL1I0WH7eVPkcuk",
    handle: "Buckshish",
  },
  {
    label: "סאונדקלאוד",
    href: "https://soundcloud.com/buckshish",
    handle: "buckshish",
  },
  {
    label: "אימייל",
    href: "mailto:buckshishmusic@gmail.com",
    handle: "buckshishmusic@gmail.com",
  },
];
