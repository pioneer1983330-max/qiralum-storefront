import { ProductCard } from "@/components/ProductCard";
import { PRODUCT_LIST } from "@/lib/catalog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QIRALUM — Black Agate & Terracotta Bloom",
};

export default function PlpPage() {
  return (
    <div data-page-id="plp_launch" className="px-5 py-14 md:px-8 md:py-20">
      <p className="eyebrow">Launch list</p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] md:text-6xl">
        QIRALUM — Black Agate & Terracotta Bloom
      </h1>
      <p className="mt-5 max-w-xl text-[var(--muted)]">
        Launch pair. Same price. Worn by all.
      </p>
      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-8">
        {PRODUCT_LIST.map((p) => (
          <ProductCard key={p.sku} product={p} />
        ))}
      </div>
    </div>
  );
}
