import { ProductView } from "@/components/ProductView";
import { PRODUCTS } from "@/lib/catalog";
import type { Metadata } from "next";

const product = PRODUCTS["04_black_agate"];

export const metadata: Metadata = {
  title: product.title,
  description: product.short,
};

export default function UrbanOnyxPage() {
  return <ProductView product={product} enableColorSwitch={false} />;
}
