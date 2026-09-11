import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="space-y-6 px-5 py-14 text-sm text-[var(--muted)] md:px-8">
        <p className="text-[12px] font-medium tracking-[0.4em] text-[var(--ink)]">QIRALUM</p>
        <p className="max-w-xl leading-relaxed">
          Everyday faith jewelry, worn by all. Draft storefront.{" "}
          {`Not a fitness tracker or “smart” gadget.`} Prayer times, if ever
          shown, are approximate and do not replace your local mosque.
        </p>
        <p className="max-w-xl text-xs leading-relaxed">
          Selling brand is QIRALUM only. Experience naming stays off the brand
          lockup and lives in the experience block.
        </p>
        <p className="temp-quiet">Draft · TEMP · 非终稿</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] tracking-[0.12em] uppercase text-[var(--ink)]">
          <Link href="/how-to-connect/">Connect</Link>
          <Link href="/faq/">FAQ</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/returns/">Returns</Link>
          <Link href="/shipping/">Shipping</Link>
        </nav>
      </div>
    </footer>
  );
}
