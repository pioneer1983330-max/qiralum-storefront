import Link from "next/link";
import { formatPrice, type Product } from "@/lib/catalog";
import { TempPhoto } from "./TempPhoto";

export function HomeLook({ product, reverse = false }: { product: Product; reverse?: boolean }) {
  return (
    <Link
      href={`/products/${product.slug}/`}
      className="grid md:grid-cols-2"
      data-sku={product.sku}
    >
      <TempPhoto
        src={product.cardImage}
        alt={`${product.colorway} TEMP`}
        className={`bg-[var(--paper-deep)] ${reverse ? "md:order-2" : ""}`}
      />
      <div className="flex flex-col justify-center px-6 py-14 md:px-14 lg:px-20">
        <p className="eyebrow">QIRALUM</p>
        <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-5xl">{product.colorway}</h2>
        <p className="mt-3 text-sm text-[var(--muted)]">{product.size}</p>
        <p className="mt-8 font-serif text-3xl tabular-nums">{formatPrice(product.price)}</p>
        <span className="btn-primary mt-10 w-fit">View piece</span>
      </div>
    </Link>
  );
}
