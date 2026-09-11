import type { PageId, Sku } from "./catalog";

export type P0Event =
  | "product_view"
  | "color_switch"
  | "atc"
  | "wishlist"
  | "gift_option_open"
  | "gift_confirm"
  | "order_paid"
  | "nfc_preview_open";

export type TrackProps = {
  page_id: PageId;
  sku?: Sku | Sku[] | string;
  [key: string]: unknown;
};

function sid(key: string) {
  if (typeof window === "undefined") return "";
  const existing = window.sessionStorage.getItem(key);
  if (existing) return existing;
  const next = `${key.slice(0, 3)}_${Math.random().toString(36).slice(2, 10)}`;
  window.sessionStorage.setItem(key, next);
  return next;
}

export function track(event: P0Event, props: TrackProps) {
  if (typeof window === "undefined") return;
  const payload = {
    event,
    platform: "web_store",
    locale: "en",
    anonymous_id: sid("qiralum_anonymous_id"),
    session_id: sid("qiralum_session_id"),
    ts: new Date().toISOString(),
    ...props,
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  console.debug("[qiralum:p0]", payload);
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
