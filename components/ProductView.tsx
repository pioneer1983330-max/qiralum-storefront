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
import { Placeholder } from "./Placeholder";

export function ProductView({ product, enableColorSwitch }: { product: Product; enableColorSwitch: boolean }) {
  const pair = PRODUCTS[otherSku(product.sku)];
  const [wished, setWished] = useState(false);
  const [note, setNote] = useState("");
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

  return (
    <article data-page-id={product.pageId} data-sku={product.sku} className="mx-auto max-w-5xl px-4 py-8">
      <p className="text-xs tracking-[0.2em] text-[var(--muted)]">QIRALUM · {product.sku}</p>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          {product.placeholders.map((id) => (
            <Placeholder key={id} id={id} className="overflow-hidden rounded-lg border border-[var(--line)]" />
          ))}
        </div>
        <div>
          <h1 className="font-serif text-3xl leading-tight">{product.title}</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">{product.colorway}</p>
          <p className="mt-4 text-2xl tabular-nums">{formatPrice(product.price)}</p>
          <p className="mt-4 text-[15px] leading-relaxed">{product.short}</p>
          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-[var(--muted)]">Size</dt>
              <dd>{product.size}</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Fit</dt>
              <dd>{product.sizeNote}</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">SKU</dt>
              <dd className="font-mono text-xs">{product.sku}</dd>
            </div>
            <div>
              <dt className="text-[var(--muted)]">Color</dt>
              <dd>{product.skuColor}</dd>
            </div>
          </dl>

          {enableColorSwitch ? (
            <div className="mt-6">
              <p className="text-sm text-[var(--muted)]">Color</p>
              <div className="mt-2 flex gap-2" data-module="color_switch">
                <Link
                  href={`/products/${product.slug}/`}
                  className="rounded-full border border-[var(--ink)] px-3 py-1 text-sm"
                  aria-current="true"
                >
                  {product.colorway}
                </Link>
                <Link
                  href={`/products/${pair.slug}/`}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-sm"
                  onClick={() => switchColor(pair.sku)}
                >
                  {pair.colorway}
                </Link>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-sm">
              Also in{" "}
              <Link href={`/products/${pair.slug}/`} className="underline">
                {pair.colorway}
              </Link>
              .
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" className="btn-primary" onClick={atc} data-action="atc">
              Add to cart
            </button>
            <button type="button" className="btn-ghost" onClick={wish} data-action="wishlist">
              {wished ? "Wishlisted" : "Add to wishlist"}
            </button>
          </div>
          {note ? <p className="mt-3 text-sm text-[var(--terracotta)]">{note}</p> : null}

          <p className="mt-8 text-xs text-[var(--muted)]">
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
