# QIRALUM independent-site DRAFT storefront

**Public preview (no login):** https://enchanting-tulumba-af5887.netlify.app/

Selling brand: **QIRALUM**. Barakah is experience-only (How to connect experience block). No gender SKUs. Jewelry-first — not a counter/gadget main narrative. Launch price **$27.90**.

Stack: Next.js App Router, static export.

```bash
npm install
npm run dev    # local
npm run build  # writes /out
```

## Routes

| Route | Page | Notes |
|---|---|---|
| `/` | Home | dual TEMP heroes (04∥07), $27.90 |
| `/products/04-urban-onyx` | PDP 04 | sku `04_black_agate`, 210×18, TEMP PDP still, ATC + wishlist |
| `/products/07-terracotta-bloom` | PDP 07 | sku `07_terracotta_bloom`, 190×16, TEMP PDP still, ATC + wishlist + color_switch |
| `/how-to-connect` | NFC preview | `temp_nfc_near_phone`; phone *near* (not jammed); no big 触碰激活 H1; Barakah only in experience block |
| `/faq` | FAQ | |
| `/plp` | Launch list stub | |
| `/cart` | Cart stub | |
| `/checkout` | Checkout stub | gift_option_open / gift_confirm |
| `/checkout/success` | Success stub | order_paid |
| `/wishlist` | Wishlist stub | |
| `/privacy` `/returns` `/shipping` | Policy stubs | Footer short compliance |

## page_id map

| page_id | Route |
|---|---|
| `home` | `/` |
| `plp_launch` | `/plp` |
| `pdp_04` | `/products/04-urban-onyx` |
| `pdp_07` | `/products/07-terracotta-bloom` |
| `wishlist` | `/wishlist` |
| `cart` | `/cart` |
| `checkout` | `/checkout` |
| `checkout_success` | `/checkout/success` |
| `nfc_preview` | `/how-to-connect` |

## SKU enums

- `04_black_agate` — Urban Onyx / Black Agate / `cold_black` / 210×18 mm
- `07_terracotta_bloom` — Terracotta Bloom / `warm_jacquard` / 190×16 mm

## P0 analytics

Pushed to `window.dataLayer` and `console.debug('[qiralum:p0]', payload)`.

| Event | Where |
|---|---|
| `product_view` | PDP 04 / 07 mount |
| `color_switch` | PDP 07 color control (04↔07) |
| `atc` | PDP / cart qty / wishlist |
| `wishlist` | PDP / wishlist |
| `gift_option_open` | Checkout gift module open |
| `gift_confirm` | Checkout gift save |
| `order_paid` | `/checkout/success` |
| `nfc_preview_open` | `/how-to-connect` |

Common fields: `page_id`, `platform=web_store`, `sku` (when relevant), `anonymous_id`, `session_id`, `ts`.

TEMP stills (非终稿) live in `public/temp/` and are wired on Home + both PDPs. NFC how-to still uses `public/placeholders/temp_nfc_near_phone.svg`. Replace stills after real sample photos. Do not crop to fully expose an NFC sensing arc.
