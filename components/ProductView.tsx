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
    <article data-page-id={product.pageId} data-sku={product.sku} className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
      <p className="eyebrow">QIRALUM · {product.sku}</p>
      <div className="mt-6 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-14">
        <div>
          <TempPhoto
            src={active}
            alt={`${product.colorway} TEMP`}
            className="overflow-hidden bg-[var(--paper-deep)]"
          />
          <div className="mt-3 grid grid-cols-3 gap-2" role="tablist" aria-label="Product stills">
            {product.gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={labels[i] ?? `Still ${i + 1}`}
                aria-selected={src === active}
                onClick={() => setActive(src)}
                className={`overflow-hidden bg-[var(--paper-deep)] ring-1 transition ${
                  src === active ? "ring-[var(--ink)]" : "ring-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <TempPhoto
                  src={src}
                  alt={`${product.colorway} ${labels[i] ?? "still"} TEMP`}
                  fit="cover"
                  className="aspect-video"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <p className="temp-chip">TEMP · 非终稿</p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.12] md:text-5xl">{product.colorway}</h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">{product.title}</p>
          <p className="mt-6 font-serif text-3xl tabular-nums">{formatPrice(product.price)}</p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed">{product.short}</p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <dt className="eyebrow">Size</dt>
              <dd className="mt-1">{product.size}</dd>
            </div>
            <div>
              <dt className="eyebrow">Fit</dt>
              <dd className="mt-1">{product.sizeNote}</dd>
            </div>
            <div>
              <dt className="eyebrow">SKU</dt>
              <dd className="mt-1 font-mono text-xs">{product.sku}</dd>
            </div>
            <div>
              <dt className="eyebrow">Color</dt>
              <dd className="mt-1">{product.skuColor}</dd>
            </div>
          </dl>

          {enableColorSwitch ? (
            <div className="mt-8">
              <p className="eyebrow">Color</p>
              <div className="mt-3 flex flex-wrap gap-2" data-module="color_switch">
                <Link
                  href={`/products/${product.slug}/`}
                  className="rounded-full border border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-sm text-[var(--paper)]"
                  aria-current="true"
                >
                  {product.colorway}
                </Link>
                <Link
                  href={`/products/${pair.slug}/`}
                  className="rounded-full border border-[var(--line)] px-4 py-2 text-sm"
                  onClick={() => switchColor(pair.sku)}
                >
                  {pair.colorway}
                </Link>
              </div>
            </div>
          ) : (
            <p className="mt-8 text-sm text-[var(--muted)]">
              Also in{" "}
              <Link href={`/products/${pair.slug}/`} className="text-[var(--ink)] underline">
                {pair.colorway}
              </Link>
              .
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn-primary w-full sm:w-auto" onClick={atc} data-action="atc">
              Add to cart
            </button>
            <button type="button" className="btn-ghost w-full sm:w-auto" onClick={wish} data-action="wishlist">
              {wished ? "Wishlisted" : "Add to wishlist"}
            </button>
          </div>
          {note ? <p className="mt-3 text-sm text-[var(--terracotta)]">{note}</p> : null}

          <p className="mt-10 max-w-md text-xs leading-relaxed text-[var(--muted)]">
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
