"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { PRODUCTS, formatPrice, type Sku } from "@/lib/catalog";
import { getCart, setQty, subscribe, type Line } from "@/lib/store";

export default function CartPage() {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const sync = () => setLines(getCart());
    sync();
    return subscribe(sync);
  }, []);

  const gmv = lines.reduce((n, l) => n + l.qty * PRODUCTS[l.sku].price, 0);

  function change(sku: Sku, qty: number) {
    const next = setQty(sku, qty);
    const line = next.find((l) => l.sku === sku);
    track("atc", {
      page_id: "cart",
      sku,
      qty: line?.qty ?? 0,
    });
  }

  return (
    <div data-page-id="cart" className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-[var(--muted)]">STUB · CART</p>
      <h1 className="mt-2 font-serif text-4xl">Cart</h1>
      {lines.length === 0 ? (
        <p className="mt-6 text-[var(--muted)]">
          Empty. <Link href="/plp/" className="underline">Shop the launch pair</Link>.
        </p>
      ) : (
        <ul className="mt-8 divide-y divide-[var(--line)]">
          {lines.map((line) => {
            const p = PRODUCTS[line.sku];
            return (
              <li key={line.sku} className="flex items-center justify-between gap-4 py-4">
                <div>
                  <Link href={`/products/${p.slug}/`} className="font-medium">
                    {p.colorway}
                  </Link>
                  <p className="font-mono text-xs text-[var(--muted)]">{p.sku}</p>
                </div>
                <div className="flex items-center gap-3">
                  <label className="text-sm">
                    Qty{" "}
                    <input
                      type="number"
                      min={0}
                      value={line.qty}
                      className="w-16 rounded border border-[var(--line)] bg-transparent px-2 py-1"
                      onChange={(e) => change(line.sku, Number(e.target.value))}
                    />
                  </label>
                  <span className="tabular-nums">{formatPrice(p.price * line.qty)}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="mt-6 text-lg tabular-nums">Total {formatPrice(gmv || 0)}</p>
      <Link href="/checkout/" className="btn-primary mt-6 inline-block">
        Checkout
      </Link>
    </div>
  );
}
