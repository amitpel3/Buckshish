import type { Metadata } from "next";
import { Berkshire_Swash, Heebo, Suez_One } from "next/font/google";
import "./globals.css";

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
  title: "בקשיש | BUCKSHISH — הרכב אינסטרומנטלי",
  description:
    "בקשיש — הרכב אינסטרומנטלי המבצע מוזיקה מקורית המשלבת רוק מתקדם, מוזיקת עולם והשפעות אלקטרוניות פסיכדליות.",
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "בקשיש | BUCKSHISH",
    description:
      "הרכב אינסטרומנטלי המבצע מוזיקה מקורית המשלבת רוק מתקדם, מוזיקת עולם והשפעות אלקטרוניות פסיכדליות.",
    images: ["/images/band-1.jpg"],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
