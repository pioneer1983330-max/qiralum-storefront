import { formatPrice, HOME_HERO, PRODUCT_LIST } from "@/lib/catalog";
import { ProductCard } from "@/components/ProductCard";
import { TempPhoto } from "@/components/TempPhoto";
import Link from "next/link";

export default function HomePage() {
  return (
    <div data-page-id="home">
      <section className="relative bg-[var(--paper-deep)]">
        <TempPhoto
          src={HOME_HERO}
          alt="QIRALUM Urban Onyx and Terracotta Bloom TEMP hero"
          className="w-full"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="temp-chip">Draft · TEMP · 非终稿</p>
        <h1 className="mt-6 max-w-2xl font-serif text-[2.15rem] leading-[1.15] md:text-5xl">
          QIRALUM. Young faith. Everyday style. Worn by all.
        </h1>
        <p className="mt-5 max-w-lg text-[var(--muted)]">
          Two colorways. One price. {formatPrice()} each. Quiet jewelry for city
          days — not a gadget, not a gender split.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/plp/" className="btn-primary">
            Shop the pair
          </Link>
          <Link href="/how-to-connect/" className="btn-ghost">
            How to connect
          </Link>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 md:grid-cols-2 md:gap-10 md:px-8"
        data-module="dual_sku_entry"
      >
        {PRODUCT_LIST.map((p) => (
          <ProductCard key={p.sku} product={p} />
        ))}
      </section>
    </div>
  );
}
