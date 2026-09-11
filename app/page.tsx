import { formatPrice, PRODUCT_LIST } from "@/lib/catalog";
import { TempPhoto } from "@/components/TempPhoto";
import Link from "next/link";

export default function HomePage() {
  return (
    <div data-page-id="home">
      <section className="mx-auto max-w-6xl px-4 pt-6" data-module="dual_sku_entry">
        <p className="text-xs tracking-[0.25em] text-[var(--muted)]">DRAFT · TEMP VISUALS · 非终稿</p>
        <h1 className="mt-3 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
          QIRALUM. Young faith. Everyday style. Worn by all.
        </h1>
        <p className="mt-4 max-w-lg text-[var(--muted)]">
          Two colorways. One price. {formatPrice()} each. Quiet jewelry for city days —
          not a gadget, not a gender split.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {PRODUCT_LIST.map((p) => (
            <Link
              key={p.sku}
              href={`/products/${p.slug}/`}
              className="group overflow-hidden rounded-lg border border-[var(--line)]"
              data-sku={p.sku}
            >
              <TempPhoto
                src={p.homeHero}
                alt={`${p.colorway} TEMP hero`}
                className="aspect-video"
              />
              <div className="flex items-baseline justify-between gap-3 p-4">
                <div>
                  <p className="text-xs tracking-[0.16em] text-[var(--muted)]">QIRALUM</p>
                  <h2 className="font-serif text-xl">{p.colorway}</h2>
                  <p className="text-sm">{p.size}</p>
                </div>
                <p className="tabular-nums">{formatPrice(p.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <p className="mx-auto max-w-6xl px-4 py-8 text-sm">
        <Link href="/how-to-connect/" className="underline">
          How to connect
        </Link>{" "}
        after it arrives.
      </p>
    </div>
  );
}
