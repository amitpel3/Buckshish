import type { Metadata } from "next";
import AccessibilityStatement from "../components/AccessibilityStatement";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Buckshish website accessibility statement — WCAG 2.1 AA conformance, features, and how to report accessibility issues.",
  alternates: { canonical: "/accessibility" },
};

export default function Page() {
  return <AccessibilityStatement />;
}
