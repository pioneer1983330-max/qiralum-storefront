import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl">Privacy</h1>
      <p className="mt-4 text-[var(--muted)]">
        Stub. This draft storefront stores cart and wishlist in your browser only. Analytics
        events are pushed to <code>window.dataLayer</code> and <code>console.debug</code> for
        QA. A full policy ships before paid traffic.
      </p>
    </article>
  );
}
