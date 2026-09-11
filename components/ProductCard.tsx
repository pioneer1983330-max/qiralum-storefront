import Link from "next/link";
import { formatPrice, type Product } from "@/lib/catalog";
import { TempPhoto } from "./TempPhoto";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}/`}
      className="group block"
      data-sku={product.sku}
    >
      <TempPhoto
        src={product.cardImage}
        alt={`${product.colorway} TEMP`}
        fit="cover"
        className="aspect-[4/5] bg-[var(--paper-deep)]"
        position={product.tone === "terracotta" ? "70% center" : "center"}
      />
      <div className="flex items-end justify-between gap-4 pt-6">
        <div>
          <p className="eyebrow">QIRALUM</p>
          <h2 className="mt-2 font-serif text-3xl leading-none">{product.colorway}</h2>
          <p className="mt-2 text-sm text-[var(--muted)]">{product.size}</p>
        </div>
        <p className="pb-0.5 text-sm tabular-nums">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
