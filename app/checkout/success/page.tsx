"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { formatPrice } from "@/lib/catalog";
import { getOrder, type LastOrder } from "@/lib/store";

export default function CheckoutSuccessPage() {
  const [order, setOrder] = useState<LastOrder | null>(null);

  useEffect(() => {
    const next = getOrder();
    setOrder(next);
    track("order_paid", {
      page_id: "checkout_success",
      is_gift: next?.is_gift ?? false,
      sku_list: next?.sku_list ?? [],
      gmv: next?.gmv ?? 0,
      order_id: next?.order_id ?? "QL-DRAFT",
    });
  }, []);

  return (
    <div data-page-id="checkout_success" className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-[var(--muted)]">STUB · SUCCESS</p>
      <h1 className="mt-2 font-serif text-4xl">Thank you</h1>
      <p className="mt-4 text-[var(--muted)]">
        Draft confirmation only.
        {order ? ` Order ${order.order_id} · ${formatPrice(order.gmv)}.` : ""}
      </p>
      <p className="mt-6">
        <Link href="/how-to-connect/" className="underline">
          How to connect
        </Link>{" "}
        when the piece arrives.
      </p>
    </div>
  );
}
