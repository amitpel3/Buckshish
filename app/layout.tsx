import type { Metadata } from "next";
import { Berkshire_Swash, Heebo, Suez_One } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

// Swashy calligraphic Latin, closest match to the "Buckshish" lettering in the logo
const berkshire = Berkshire_Swash({
  variable: "--font-deco",
  weight: "400",
  subsets: ["latin"],
});

// Bold oriental-feeling Hebrew display serif for headings
const suezOne = Suez_One({
  variable: "--font-display",
  weight: "400",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.bandName} | ${siteConfig.bandNameEn} — הרכב אינסטרומנטלי`,
    template: `%s | ${siteConfig.bandNameEn}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "בקשיש",
    "Buckshish",
    "הרכב אינסטרומנטלי",
    "מוזיקה ישראלית",
    "רוק מתקדם",
    "מוזיקת עולם",
    "פסיכדלי",
    "World Music",
    "Progressive Rock",
    "Psychedelic",
    "Instrumental band",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteConfig.siteUrl,
    siteName: siteConfig.bandNameEn,
    title: `${siteConfig.bandName} | ${siteConfig.bandNameEn}`,
    description: siteConfig.tagline,
    images: ["/images/banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.bandName} | ${siteConfig.bandNameEn}`,
    description: siteConfig.tagline,
    images: ["/images/banner.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: siteConfig.bandNameEn,
  alternateName: siteConfig.bandName,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/images/logo.jpg`,
  description: siteConfig.tagline,
  genre: siteConfig.genres,
  email: siteConfig.email,
  inLanguage: "he",
  member: siteConfig.members.map((name) => ({
    "@type": "Person",
    name,
  })),
  sameAs: Object.values(siteConfig.social),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${suezOne.variable} ${berkshire.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
