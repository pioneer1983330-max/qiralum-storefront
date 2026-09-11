import type { Metadata } from "next";

export const metadata: Metadata = { title: "Shipping" };

export default function ShippingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl">Shipping</h1>
      <p className="mt-4 text-[var(--muted)]">
        Stub. Independent-site shipping windows and duties will be published before the
        first paid order. This draft does not charge or ship.
      </p>
    </article>
  );
}
