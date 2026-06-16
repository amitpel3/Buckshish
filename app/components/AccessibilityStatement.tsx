"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { siteConfig } from "@/lib/config";

export default function AccessibilityStatement() {
  const { t } = useLang();
  const s = t.statementBody;

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-16">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-accent hover:underline"
      >
        ← {t.statementBackHome}
      </Link>

      <h1 className="font-[family-name:var(--font-display)] text-4xl text-accent sm:text-5xl">
        {t.statementTitle}
      </h1>

      <p className="mt-6 text-base leading-relaxed text-foreground/85">
        {s.intro}
      </p>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-bold text-accent">
          {s.featuresTitle}
        </h2>
        <ul className="list-disc space-y-1.5 ps-6 text-foreground/85 marker:text-accent/70">
          {s.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-bold text-accent">
          {s.shortcutsTitle}
        </h2>
        <ul className="space-y-1.5 text-foreground/85">
          {s.shortcuts.map((k) => (
            <li key={k}>
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm">
                {k}
              </code>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-bold text-accent">
          {s.contactTitle}
        </h2>
        <p className="text-foreground/85">{s.contactBody}</p>
        <p className="mt-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-accent underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </section>

      <p className="mt-12 text-sm text-foreground/60">
        {s.lastUpdatedLabel} {s.lastUpdated}
      </p>
    </main>
  );
}
