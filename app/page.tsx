import { formatPrice, PRODUCT_LIST } from "@/lib/catalog";
import { Placeholder } from "@/components/Placeholder";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <div data-page-id="home">
      <section className="border-b border-[var(--line)]">
        <Placeholder id="temp_home_hero" className="mx-auto max-w-5xl" />
        <div className="mx-auto max-w-5xl px-4 py-10">
          <p className="text-xs tracking-[0.25em] text-[var(--muted)]">DRAFT · INDEPENDENT SITE</p>
          <h1 className="mt-3 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
            QIRALUM. Young faith. Everyday style. Worn by all.
          </h1>
          <p className="mt-4 max-w-lg text-[var(--muted)]">
            Two colorways. One price. {formatPrice()} each. Quiet jewelry for city days —
            not a gadget, not a gender split.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-10 md:grid-cols-2" data-module="dual_sku_entry">
        {PRODUCT_LIST.map((p) => (
          <ProductCard key={p.sku} product={p} />
        ))}
      </section>
      <p className="mx-auto max-w-5xl px-4 pb-8 text-sm">
        <Link href="/how-to-connect/" className="underline">
          How to connect
        </Link>{" "}
        after it arrives.
      </p>
    </div>
  );
}
