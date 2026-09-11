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
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color:var(--paper)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="text-[13px] font-semibold tracking-[0.32em]">
          QIRALUM
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-[13px] tracking-[0.04em]">
          <Link href="/plp/">Shop</Link>
          <Link href="/how-to-connect/">Connect</Link>
          <Link href="/faq/">FAQ</Link>
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
