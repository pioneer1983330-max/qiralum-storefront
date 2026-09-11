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
  homeHero: string;
  pdpMain: string;
  tone: "onyx" | "terracotta";
};

export const PRICE = 27.9;

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
    homeHero: "/temp/QIRALUM_04_onyx_temp_hero_01.png",
    pdpMain: "/temp/QIRALUM_04_onyx_temp_pdp_01.png",
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
    homeHero: "/temp/QIRALUM_07_terracotta_temp_hero_01.png",
    pdpMain: "/temp/QIRALUM_07_terracotta_temp_pdp_01.png",
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
