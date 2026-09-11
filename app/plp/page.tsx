import { ProductCard } from "@/components/ProductCard";
import { PRODUCT_LIST } from "@/lib/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QIRALUM — Black Agate & Terracotta Bloom",
};

export default function PlpPage() {
  return (
    <div data-page-id="plp_launch" className="mx-auto max-w-5xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-[var(--muted)]">STUB · PLP</p>
      <h1 className="mt-2 font-serif text-4xl">QIRALUM — Black Agate & Terracotta Bloom</h1>
      <p className="mt-3 max-w-xl text-[var(--muted)]">
        Launch pair. Same price. Worn by all.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {PRODUCT_LIST.map((p) => (
          <ProductCard key={p.sku} product={p} />
        ))}
      </div>
    </div>
  );
}
