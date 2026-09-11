"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cartCount, subscribe, wishCount } from "@/lib/store";

export function Header() {
  const [counts, setCounts] = useState({ cart: 0, wish: 0 });

  useEffect(() => {
    const sync = () => setCounts({ cart: cartCount(), wish: wishCount() });
    sync();
    return subscribe(sync);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color:var(--paper)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="tracking-[0.22em] text-sm font-semibold">
          QIRALUM
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <Link href="/plp/">Shop</Link>
          <Link href="/how-to-connect/">Connect</Link>
          <Link href="/faq/">FAQ</Link>
          <Link href="/wishlist/" className="tabular-nums">
            Wishlist{counts.wish ? ` (${counts.wish})` : ""}
          </Link>
          <Link href="/cart/" className="tabular-nums">
            Cart{counts.cart ? ` (${counts.cart})` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}
