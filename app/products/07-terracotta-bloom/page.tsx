import { ProductView } from "@/components/ProductView";
import { PRODUCTS } from "@/lib/catalog";
import type { Metadata } from "next";

const product = PRODUCTS["07_terracotta_bloom"];

export const metadata: Metadata = {
  title: product.title,
  description: product.short,
};

export default function TerracottaBloomPage() {
  return <ProductView product={product} enableColorSwitch />;
}
