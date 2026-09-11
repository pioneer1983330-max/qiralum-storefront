"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { track } from "@/lib/analytics";
import {
  formatPrice,
  otherSku,
  PRODUCTS,
  type Product,
  type Sku,
} from "@/lib/catalog";
import { addToCart, getWish, toggleWish, subscribe } from "@/lib/store";
import { TempPhoto } from "./TempPhoto";

export function ProductView({ product, enableColorSwitch }: { product: Product; enableColorSwitch: boolean }) {
  const pair = PRODUCTS[otherSku(product.sku)];
  const [wished, setWished] = useState(false);
  const [note, setNote] = useState("");
  const [active, setActive] = useState(product.gallery[0]);
  const viewProps = useMemo(
    () => ({
      page_id: product.pageId,
      sku: product.sku,
      sku_color: product.skuColor,
      price: product.price,
    }),
    [product],
  );

  useEffect(() => {
    track("product_view", viewProps);
  }, [viewProps]);

  useEffect(() => {
    setActive(product.gallery[0]);
  }, [product]);

  useEffect(() => {
    const sync = () => setWished(getWish().includes(product.sku));
    sync();
    return subscribe(sync);
  }, [product.sku]);

  function atc() {
    const line = addToCart(product.sku, 1);
    track("atc", {
      page_id: product.pageId,
      sku: product.sku,
      qty: line.qty,
      price: product.price,
    });
    setNote("Added to cart");
  }

  function wish() {
    const on = toggleWish(product.sku);
    track("wishlist", { page_id: product.pageId, sku: product.sku, on });
    setNote(on ? "Saved to wishlist" : "Removed from wishlist");
  }

  function switchColor(to: Sku) {
    if (to === product.sku) return;
    track("color_switch", {
      page_id: product.pageId,
      sku: product.sku,
      from_sku: product.sku,
      to_sku: to,
    });
  }

  const labels = ["Hero", "Detail", "Lifestyle"];

  return (
    <article data-page-id={product.pageId} data-sku={product.sku}>
      <div className="lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(22rem,0.65fr)] lg:items-start">
        <div className="bg-[var(--paper-deep)]">
          <TempPhoto
            src={active}
            alt={`${product.colorway} TEMP`}
            className="w-full"
          />
          <div className="grid grid-cols-3 gap-px bg-[var(--line)]" role="tablist" aria-label="Product stills">
            {product.gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-label={labels[i] ?? `Still ${i + 1}`}
                aria-selected={src === active}
                onClick={() => setActive(src)}
                className={`bg-[var(--paper-deep)] transition ${
                  src === active ? "opacity-100" : "opacity-55 hover:opacity-100"
                }`}
              >
                <TempPhoto
                  src={src}
                  alt={`${product.colorway} ${labels[i] ?? "still"} TEMP`}
                  fit="cover"
                  className="aspect-[16/10]"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="px-5 py-10 md:px-10 md:py-14 lg:sticky lg:top-14 lg:px-12 lg:py-16">
          <p className="eyebrow">QIRALUM</p>
          <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] md:text-6xl">{product.colorway}</h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">{product.title}</p>
          <p className="mt-8 font-serif text-4xl tabular-nums">{formatPrice(product.price)}</p>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed">{product.short}</p>

          <dl className="mt-10 space-y-4 text-sm">
            <div className="flex justify-between gap-6 border-b border-[var(--line)] pb-3">
              <dt className="eyebrow">Size</dt>
              <dd>{product.size}</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-[var(--line)] pb-3">
              <dt className="eyebrow">Fit</dt>
              <dd className="text-right">{product.sizeNote}</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-[var(--line)] pb-3">
              <dt className="eyebrow">SKU</dt>
              <dd className="font-mono text-xs">{product.sku}</dd>
            </div>
            <div className="flex justify-between gap-6 pb-1">
              <dt className="eyebrow">Color</dt>
              <dd>{product.skuColor}</dd>
            </div>
          </dl>

          {enableColorSwitch ? (
            <div className="mt-10">
              <p className="eyebrow">Color</p>
              <div className="mt-4 flex flex-wrap gap-2" data-module="color_switch">
                <Link
                  href={`/products/${product.slug}/`}
                  className="border border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-xs tracking-[0.14em] uppercase text-[var(--paper)]"
                  aria-current="true"
                >
                  {product.colorway}
                </Link>
                <Link
                  href={`/products/${pair.slug}/`}
                  className="border border-[var(--line)] px-4 py-2 text-xs tracking-[0.14em] uppercase"
                  onClick={() => switchColor(pair.sku)}
                >
                  {pair.colorway}
                </Link>
              </div>
            </div>
          ) : (
            <p className="mt-10 text-sm text-[var(--muted)]">
              Also in{" "}
              <Link href={`/products/${pair.slug}/`} className="text-[var(--ink)] underline">
                {pair.colorway}
              </Link>
              .
            </p>
          )}

          <div className="mt-10 flex flex-col gap-3">
            <button type="button" className="btn-primary w-full" onClick={atc} data-action="atc">
              Add to cart
            </button>
            <button type="button" className="btn-ghost w-full" onClick={wish} data-action="wishlist">
              {wished ? "Wishlisted" : "Add to wishlist"}
            </button>
          </div>
          {note ? <p className="mt-3 text-sm text-[var(--terracotta)]">{note}</p> : null}

          <p className="mt-12 max-w-sm text-xs leading-relaxed text-[var(--muted)]">
            Jewelry first. Includes a quiet in-piece experience after you connect — see{" "}
            <Link href="/how-to-connect/" className="underline">
              How to connect
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
