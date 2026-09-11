import type { Sku } from "./catalog";

export type Line = { sku: Sku; qty: number };

const CART = "qiralum_cart";
const WISH = "qiralum_wish";
const GIFT = "qiralum_gift";
const ORDER = "qiralum_last_order";

export type GiftState = {
  wrap: boolean;
  message: string;
};

export type LastOrder = {
  order_id: string;
  sku_list: Sku[];
  gmv: number;
  is_gift: boolean;
  qty: Record<string, number>;
};

type StoreSnap = { cart: Line[]; wish: Sku[] };

const listeners = new Set<() => void>();

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));
  listeners.forEach((fn) => fn());
}

export function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function getCart(): Line[] {
  return readJson<Line[]>(CART, []);
}

export function getWish(): Sku[] {
  return readJson<Sku[]>(WISH, []);
}

export function snapshot(): StoreSnap {
  return { cart: getCart(), wish: getWish() };
}

export function addToCart(sku: Sku, qty = 1) {
  const cart = getCart();
  const hit = cart.find((l) => l.sku === sku);
  if (hit) hit.qty += qty;
  else cart.push({ sku, qty });
  write(CART, cart);
  return cart.find((l) => l.sku === sku)!;
}

export function setQty(sku: Sku, qty: number) {
  let cart = getCart();
  if (qty <= 0) cart = cart.filter((l) => l.sku !== sku);
  else {
    const hit = cart.find((l) => l.sku === sku);
    if (hit) hit.qty = qty;
    else cart.push({ sku, qty });
  }
  write(CART, cart);
  return cart;
}

export function toggleWish(sku: Sku) {
  const wish = getWish();
  const next = wish.includes(sku) ? wish.filter((s) => s !== sku) : [...wish, sku];
  write(WISH, next);
  return next.includes(sku);
}

export function getGift(): GiftState {
  return readJson<GiftState>(GIFT, { wrap: false, message: "" });
}

export function setGift(gift: GiftState) {
  write(GIFT, gift);
}

export function clearCart() {
  write(CART, []);
}

export function saveOrder(order: LastOrder) {
  write(ORDER, order);
}

export function getOrder(): LastOrder | null {
  return readJson<LastOrder | null>(ORDER, null);
}

export function cartCount() {
  return getCart().reduce((n, l) => n + l.qty, 0);
}

export function wishCount() {
  return getWish().length;
}
