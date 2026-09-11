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
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color:var(--paper)]/90 backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 px-4 py-3.5 md:px-8">
        <Link href="/" className="shrink-0 text-[12px] font-medium tracking-[0.4em]">
          QIRALUM
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-[11px] tracking-[0.14em] uppercase md:gap-x-7 md:text-[12px]">
          <Link href="/plp/">Shop</Link>
          <Link href="/how-to-connect/" className="hidden sm:inline">
            Connect
          </Link>
          <Link href="/faq/" className="hidden sm:inline">
            FAQ
          </Link>
          <Link href="/wishlist/" className="tabular-nums text-[var(--muted)]">
            Wish{counts.wish ? ` ${counts.wish}` : ""}
          </Link>
          <Link href="/cart/" className="tabular-nums">
            Cart{counts.cart ? ` ${counts.cart}` : ""}
          </Link>
        </nav>
      </div>
    </header>
  );
}
