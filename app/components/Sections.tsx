"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BANNER_IMAGE, GALLERY_IMAGES, MEMBERS, SOCIALS } from "../data";
import { useLang } from "./LanguageProvider";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...fadeUp} className="mb-10 text-center">
      <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl">
        <span className="text-psy">{children}</span>
      </h2>
      <div
        className="mx-auto mt-4 flex max-w-[14rem] items-center gap-2 text-accent/80"
        aria-hidden
      >
        <span className="h-px flex-1 bg-gradient-to-l from-accent/50 to-transparent" />
        <span>✦</span>
        <span className="text-xl">۞</span>
        <span>✦</span>
        <span className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
      </div>
    </motion.div>
  );
}

export function About() {
  const { t } = useLang();
  const b = t.aboutBody;
  return (
    <section id="about" className="relative mx-auto max-w-4xl px-4 py-16">
      <div className="animate-float-slow absolute -top-20 right-0 -z-10 h-72 w-72 rounded-full bg-accent-2/15 blur-3xl" />
      <SectionTitle>{t.aboutTitle}</SectionTitle>
      <motion.p
        {...fadeUp}
        className="text-center text-xl leading-relaxed text-foreground/80"
      >
        {b.lead}{" "}
        <span className="text-accent">{b.tag1}</span>
        {b.mid1}{" "}
        <span className="text-accent-3">{b.tag2}</span> {b.mid2}{" "}
        <span className="text-accent-2">{b.tag3}</span>
        {b.tail}
      </motion.p>
      <motion.p
        {...fadeUp}
        className="mt-4 text-center text-base text-foreground/50"
      >
        {t.aboutLocation}
      </motion.p>
    </section>
  );
}

export function Banner() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-5xl px-4">
      <motion.div
        {...fadeUp}
        className="overflow-hidden rounded-3xl border-2 border-accent/40 shadow-[0_0_60px_rgba(200,155,60,0.2)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BANNER_IMAGE}
          alt={t.bannerAlt}
          className="w-full object-cover"
        />
      </motion.div>
    </section>
  );
}

export function Members() {
  const { t } = useLang();
  return (
    <section id="members" className="relative mx-auto max-w-5xl px-4 py-16">
      <div className="animate-float-slow absolute top-10 left-0 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <SectionTitle>{t.membersTitle}</SectionTitle>
      <div className="flex flex-wrap justify-center gap-5">
        {MEMBERS.map((m, i) => {
          const localizedName = t.memberNames[m.name] ?? m.name;
          const localizedRole = t.memberRoles[m.role] ?? m.role;
          return (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full max-w-xs rounded-t-[5rem] rounded-b-2xl border border-accent/25 bg-white/[0.04] p-6 pt-8 text-center backdrop-blur transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_10px_40px_rgba(245,166,35,0.2)] sm:w-[calc(33%-1rem)]"
            >
              <div className="mx-auto h-44 w-36 overflow-hidden rounded-t-full rounded-b-xl border-2 border-accent/50 p-1">
                <div className="h-full w-full overflow-hidden rounded-t-full rounded-b-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={localizedName}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl">
                {localizedName}
              </h3>
              <p className="mt-1 text-sm text-foreground/60">{localizedRole}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function Gallery() {
  const { t } = useLang();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-4 py-16">
      <SectionTitle>{t.galleryTitle}</SectionTitle>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
        {GALLERY_IMAGES.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 5) * 0.08 }}
            onClick={() => setSelected(src)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
            aria-label={t.galleryItemAria(i + 1)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={t.galleryAlt(i + 1)}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:saturate-150"
            />
            <span className="absolute inset-0 bg-accent-2/0 transition group-hover:bg-accent-2/15" />
          </motion.button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-label={t.lightboxAria}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected}
            alt={t.lightboxAlt}
            className="w-[min(85vw,480px)] max-h-[80vh] rounded-2xl object-contain shadow-[0_0_60px_rgba(245,166,35,0.3)]"
          />
          <button
            className="absolute top-6 left-6 text-3xl text-white/70 transition hover:text-white"
            aria-label={t.closeAria}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

const SOCIAL_KEYS = [
  "instagram",
  "facebook",
  "youtube",
  "spotify",
  "soundcloud",
  "email",
] as const;

export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-16">
      <SectionTitle>{t.contactTitle}</SectionTitle>
      <motion.div {...fadeUp} className="grid gap-4 sm:grid-cols-2">
        {SOCIALS.map((s, i) => (
          <a
            key={s.href}
            href={s.href}
            target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 transition hover:border-accent/60 hover:bg-accent/5"
          >
            <span className="text-lg font-bold">
              {t.socialLabels[SOCIAL_KEYS[i]]}
            </span>
            <span className="text-sm text-foreground/60" dir="ltr">
              {s.handle}
            </span>
          </a>
        ))}
      </motion.div>
      <p className="mt-16 text-center text-sm text-foreground/40">
        {t.copyright} © {new Date().getFullYear()}
      </p>
      <p className="mt-2 text-center text-xs text-foreground/30" dir="ltr">
        {t.madeBy}{" "}
        <a
          href="https://siteforyou.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent/60 transition hover:text-accent"
        >
          SiteForYou
        </a>
      </p>
    </section>
  );
}
