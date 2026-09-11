export type Sku = "04_black_agate" | "07_terracotta_bloom";
export type PageId =
  | "home"
  | "plp_launch"
  | "pdp_04"
  | "pdp_07"
  | "wishlist"
  | "cart"
  | "checkout"
  | "checkout_success"
  | "nfc_preview";

export type SkuColor = "cold_black" | "warm_jacquard";

export type Product = {
  sku: Sku;
  slug: string;
  pageId: "pdp_04" | "pdp_07";
  colorway: string;
  title: string;
  short: string;
  skuColor: SkuColor;
  size: string;
  sizeNote: string;
  price: number;
  cardImage: string;
  gallery: string[];
  tone: "onyx" | "terracotta";
};

export const PRICE = 27.9;
export const HOME_HERO = "/temp/temp_home_hero.png";
export const NFC_NEAR = "/temp/temp_nfc_near_phone.png";

export const PRODUCTS: Record<Sku, Product> = {
  "04_black_agate": {
    sku: "04_black_agate",
    slug: "04-urban-onyx",
    pageId: "pdp_04",
    colorway: "Urban Onyx",
    title: "QIRALUM Faith Bracelet — Black Agate | Everyday Wear",
    short:
      "QIRALUM urban cold black. Everyday faith jewelry, worn by all. Gift wrap optional.",
    skuColor: "cold_black",
    size: "210 × 18 mm",
    sizeNote: "Inner length 210 mm · width 18 mm",
    price: PRICE,
    cardImage: "/temp/temp_04_hero.png",
    gallery: [
      "/temp/temp_04_hero.png",
      "/temp/temp_04_detail.png",
      "/temp/temp_04_lifestyle.png",
    ],
    tone: "onyx",
  },
  "07_terracotta_bloom": {
    sku: "07_terracotta_bloom",
    slug: "07-terracotta-bloom",
    pageId: "pdp_07",
    colorway: "Terracotta Bloom",
    title: "QIRALUM Faith Bracelet — Terracotta Bloom | Warm Jacquard",
    short:
      "QIRALUM warm terracotta jacquard. Soft presence for everyday and gifting.",
    skuColor: "warm_jacquard",
    size: "190 × 16 mm",
    sizeNote: "Inner length 190 mm · width 16 mm",
    price: PRICE,
    cardImage: "/temp/temp_07_hero.png",
    gallery: [
      "/temp/temp_07_hero.png",
      "/temp/temp_07_detail.png",
      "/temp/temp_07_lifestyle.png",
    ],
    tone: "terracotta",
  },
};

export const PRODUCT_LIST = Object.values(PRODUCTS);

export function formatPrice(n = PRICE) {
  return `$${n.toFixed(2)}`;
}

export function productBySlug(slug: string) {
  return PRODUCT_LIST.find((p) => p.slug === slug);
}

export function otherSku(sku: Sku): Sku {
  return sku === "04_black_agate" ? "07_terracotta_bloom" : "04_black_agate";
}
