"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { PRODUCTS, formatPrice, type Sku } from "@/lib/catalog";
import { addToCart, getWish, subscribe, toggleWish } from "@/lib/store";

export default function WishlistPage() {
  const [skus, setSkus] = useState<Sku[]>([]);

  useEffect(() => {
    const sync = () => setSkus(getWish());
    sync();
    return subscribe(sync);
  }, []);

  return (
    <div data-page-id="wishlist" className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-[var(--muted)]">STUB · WISHLIST</p>
      <h1 className="mt-2 font-serif text-4xl">Wishlist</h1>
      {skus.length === 0 ? (
        <p className="mt-6 text-[var(--muted)]">Nothing saved yet.</p>
      ) : (
        <ul className="mt-8 space-y-4">
          {skus.map((sku) => {
            const p = PRODUCTS[sku];
            return (
              <li key={sku} className="flex items-center justify-between gap-3 border-b border-[var(--line)] py-3">
                <Link href={`/products/${p.slug}/`}>
                  {p.colorway} · {formatPrice(p.price)}
                </Link>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => {
                      const line = addToCart(sku, 1);
                      track("atc", { page_id: "wishlist", sku, qty: line.qty, price: p.price });
                    }}
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn-ghost"
                    onClick={() => {
                      toggleWish(sku);
                      track("wishlist", { page_id: "wishlist", sku, on: false });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
