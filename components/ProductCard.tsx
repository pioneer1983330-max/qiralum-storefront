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
        className="overflow-hidden bg-[var(--paper-deep)]"
      />
      <div className="flex items-end justify-between gap-4 px-1 pt-5">
        <div className="space-y-1">
          <p className="eyebrow">QIRALUM</p>
          <h2 className="font-serif text-2xl md:text-[1.75rem]">{product.colorway}</h2>
          <p className="text-sm text-[var(--muted)]">{product.size}</p>
        </div>
        <p className="pb-1 text-sm tabular-nums tracking-wide">{formatPrice(product.price)}</p>
      </div>
      <p className="mt-3 px-1 text-xs tracking-[0.16em] text-[var(--muted)] uppercase transition group-hover:text-[var(--ink)]">
        View piece →
      </p>
    </Link>
  );
}
