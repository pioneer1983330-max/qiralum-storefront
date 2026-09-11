import Link from "next/link";
import { formatPrice, type Product } from "@/lib/catalog";
import { TempPhoto } from "./TempPhoto";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}/`}
      className="group block overflow-hidden rounded-lg border border-[var(--line)]"
      data-sku={product.sku}
    >
      <TempPhoto
        src={product.homeHero}
        alt={`${product.colorway} TEMP`}
        className="aspect-video"
      />
      <div className="space-y-1 p-4">
        <p className="text-xs tracking-[0.16em] text-[var(--muted)]">QIRALUM</p>
        <h2 className="font-serif text-xl">{product.colorway}</h2>
        <p className="text-sm">{product.size}</p>
        <p className="tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
