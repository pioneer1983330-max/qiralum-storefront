import { formatPrice, HOME_HERO, PRODUCT_LIST } from "@/lib/catalog";
import { HomeLook } from "@/components/HomeLook";
import { TempPhoto } from "@/components/TempPhoto";
import Link from "next/link";

export default function HomePage() {
  const [onyx, bloom] = PRODUCT_LIST;

  return (
    <div data-page-id="home">
      <section className="bg-[var(--paper-deep)]">
        <TempPhoto
          src={HOME_HERO}
          alt="QIRALUM Urban Onyx and Terracotta Bloom TEMP hero"
          className="w-full"
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h1 className="font-serif text-[2.35rem] leading-[1.12] md:text-6xl">
          QIRALUM. Young faith. Everyday style. Worn by all.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[var(--muted)]">
          Two colorways. One price. {formatPrice()} each. Quiet jewelry for city
          days — not a gadget, not a gender split.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link href="/plp/" className="btn-primary">
            Shop the pair
          </Link>
          <Link href="/how-to-connect/" className="btn-ghost">
            How to connect
          </Link>
        </div>
      </section>

      <section data-module="dual_sku_entry" className="border-t border-[var(--line)]">
        {onyx ? <HomeLook product={onyx} /> : null}
        <div className="border-t border-[var(--line)]" />
        {bloom ? <HomeLook product={bloom} reverse /> : null}
      </section>
    </div>
  );
}
