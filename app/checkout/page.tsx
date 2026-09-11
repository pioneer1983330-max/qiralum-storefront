"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { PRICE, PRODUCTS, formatPrice } from "@/lib/catalog";
import {
  clearCart,
  getCart,
  getGift,
  saveOrder,
  setGift,
  subscribe,
  type GiftState,
  type Line,
} from "@/lib/store";

export default function CheckoutPage() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([]);
  const [giftOpen, setGiftOpen] = useState(false);
  const [gift, setGiftState] = useState<GiftState>({ wrap: false, message: "" });
  const [addr, setAddr] = useState({ ship: "", bill: "" });

  useEffect(() => {
    const sync = () => {
      setLines(getCart());
      setGiftState(getGift());
    };
    sync();
    return subscribe(sync);
  }, []);

  const gmv = lines.reduce((n, l) => n + l.qty * PRODUCTS[l.sku].price, 0);

  function openGift() {
    setGiftOpen(true);
    track("gift_option_open", {
      page_id: "checkout",
      order_draft_id: "draft_local",
    });
  }

  function confirmGift() {
    setGift(gift);
    track("gift_confirm", {
      page_id: "checkout",
      gift_wrap: gift.wrap,
      gift_message: Boolean(gift.message),
      gift_message_len: gift.message.length,
    });
  }

  function pay() {
    const sku_list = lines.map((l) => l.sku);
    const order_id = `QL-${Date.now().toString(36).toUpperCase()}`;
    saveOrder({
      order_id,
      sku_list,
      gmv,
      is_gift: gift.wrap || Boolean(gift.message),
      qty: Object.fromEntries(lines.map((l) => [l.sku, l.qty])),
    });
    clearCart();
    router.push("/checkout/success/");
  }

  return (
    <div data-page-id="checkout" className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-[var(--muted)]">STUB · CHECKOUT</p>
      <h1 className="mt-2 font-serif text-4xl">Checkout</h1>
      {lines.length === 0 ? (
        <p className="mt-6">Cart is empty. Add a piece first.</p>
      ) : (
        <>
          <ul className="mt-6 space-y-2 text-sm">
            {lines.map((l) => (
              <li key={l.sku}>
                {PRODUCTS[l.sku].colorway} × {l.qty} — {formatPrice(PRICE * l.qty)}
              </li>
            ))}
          </ul>
          <p className="mt-3 tabular-nums">Due {formatPrice(gmv)}</p>

          <label className="mt-8 block text-sm">
            Ship to
            <textarea
              className="mt-1 w-full rounded border border-[var(--line)] bg-transparent p-2"
              rows={3}
              value={addr.ship}
              onChange={(e) => setAddr({ ...addr, ship: e.target.value })}
            />
          </label>
          <label className="mt-4 block text-sm">
            Bill to (optional, if different)
            <textarea
              className="mt-1 w-full rounded border border-[var(--line)] bg-transparent p-2"
              rows={2}
              value={addr.bill}
              onChange={(e) => setAddr({ ...addr, bill: e.target.value })}
            />
          </label>

          {!giftOpen ? (
            <button type="button" className="btn-ghost mt-6" onClick={openGift} data-action="gift_option_open">
              Gift wrap / note
            </button>
          ) : (
            <section className="mt-6 rounded-lg border border-[var(--line)] p-4" data-module="gift">
              <h2 className="font-serif text-xl">Gift option</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Worn by all. Suitable for Eid, Ramadan, or a quiet everyday gift.
              </p>
              <label className="mt-4 flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={gift.wrap}
                  onChange={(e) => setGiftState({ ...gift, wrap: e.target.checked })}
                />
                Gift wrap
              </label>
              <label className="mt-3 block text-sm">
                Note
                <textarea
                  className="mt-1 w-full rounded border border-[var(--line)] bg-transparent p-2"
                  rows={3}
                  value={gift.message}
                  onChange={(e) => setGiftState({ ...gift, message: e.target.value })}
                />
              </label>
              <button type="button" className="btn-ghost mt-4" onClick={confirmGift} data-action="gift_confirm">
                Save gift option
              </button>
            </section>
          )}

          <button type="button" className="btn-primary mt-8" onClick={pay} data-action="place_order">
            Place order (draft)
          </button>
          <p className="mt-2 text-xs text-[var(--muted)]">No real payment in this draft.</p>
        </>
      )}
    </div>
  );
}
