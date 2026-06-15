"use client";

import { SOCIALS } from "../data";
import { useLang } from "./LanguageProvider";

/** Muted looping video background for the hero. */
function BackgroundVideo() {
  return (
    <div
      className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_99%)]"
      aria-hidden
    >
      <video
        className="h-full w-full object-cover"
        src="/video/buckshish-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-accent-2/15 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(20,14,6,0.75)_100%)]" />
    </div>
  );
}

function LogoMedallion({ alt }: { alt: string }) {
  return (
    <div className="relative mx-auto mb-5 h-32 w-32 sm:h-36 sm:w-36">
      <svg
        className="animate-spin-slow absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#c89b3c"
          strokeOpacity="0.7"
          strokeWidth="1"
          strokeDasharray="1 4"
        />
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i * Math.PI * 2) / 16;
          return (
            <circle
              key={i}
              cx={50 + Math.cos(a) * 44}
              cy={50 + Math.sin(a) * 44}
              r="1.4"
              fill="#c89b3c"
              fillOpacity="0.8"
            />
          );
        })}
      </svg>
      <svg
        className="animate-spin-slower absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)]"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="#e8c87a"
          strokeOpacity="0.5"
          strokeWidth="0.8"
          strokeDasharray="6 3"
        />
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.jpg"
        alt={alt}
        className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-full border-2 border-accent/70 object-cover shadow-[0_0_50px_rgba(200,155,60,0.45)]"
      />
    </div>
  );
}

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`pointer-events-none absolute text-xl text-accent/80 ${className}`}
      aria-hidden
    >
      ✦
    </span>
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

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-12 pb-24">
      <BackgroundVideo />

      <div className="relative z-10 w-full max-w-3xl rounded-[2.5rem] border-2 border-accent/50 bg-[#1a130a]/40 p-2 shadow-[0_0_80px_rgba(200,155,60,0.25)] backdrop-blur-[3px]">
        <div className="relative rounded-[2rem] border border-accent/30 p-6 text-center sm:p-10">
          <Corner className="top-3 right-4" />
          <Corner className="top-3 left-4" />
          <Corner className="bottom-3 right-4" />
          <Corner className="bottom-3 left-4" />

          <LogoMedallion alt={t.logoAlt} />

          <p className="mb-3 text-sm tracking-[0.5em] text-accent-3/80 uppercase">
            {t.heroEyebrow}
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl">
            <span className="text-psy">{t.bandName}</span>
          </h1>
          {lang === "he" && (
            <p className="mt-3 font-[family-name:var(--font-deco)] text-3xl text-accent sm:text-4xl">
              {t.bandNameRoman}
            </p>
          )}
          <div
            className="mx-auto mt-5 flex max-w-xs items-center gap-3 text-accent"
            aria-hidden
          >
            <span className="h-px flex-1 bg-gradient-to-l from-accent/60 to-transparent" />
            <span className="text-lg">✦</span>
            <span className="text-2xl">۞</span>
            <span className="text-lg">✦</span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent/60 to-transparent" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/85">
            {t.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {SOCIALS.map((s, i) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="rounded-full border border-accent/30 px-4 py-1.5 text-sm text-foreground/80 transition hover:border-accent hover:text-accent"
              >
                {t.socialLabels[SOCIAL_KEYS[i]]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 z-10 hidden flex-col items-center gap-1 text-foreground/50 transition hover:text-accent min-[480px]:flex"
        aria-label={t.scrollCueAria}
      >
        <span className="text-xs tracking-widest">{t.scrollCue}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="animate-bounce"
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {/* Hidden but read by screen readers and crawlers — keeps both names indexable */}
      <span className="sr-only" aria-hidden={false}>
        {lang === "he" ? "Buckshish" : "בקשיש"}
      </span>
    </header>
  );
}
