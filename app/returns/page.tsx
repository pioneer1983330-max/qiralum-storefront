import type { Metadata } from "next";

export const metadata: Metadata = { title: "Returns" };

export default function ReturnsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl">Returns</h1>
      <p className="mt-4 text-[var(--muted)]">
        Stub. Unworn QIRALUM pieces may be returned once the live policy is published.
        This draft does not process real returns.
      </p>
    </article>
  );
}
