import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl space-y-5 px-5 py-12 text-sm text-[var(--muted)] md:px-8">
        <p className="text-[13px] font-semibold tracking-[0.32em] text-[var(--ink)]">QIRALUM</p>
        <p className="max-w-2xl leading-relaxed">
          Everyday faith jewelry, worn by all. Draft storefront.{" "}
          {`Not a fitness tracker or “smart” gadget.`} Prayer times, if ever
          shown, are approximate and do not replace your local mosque.
        </p>
        <p className="max-w-2xl text-xs leading-relaxed">
          Selling brand is QIRALUM only. Experience naming stays off the brand
          lockup and lives in the experience block.
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[var(--ink)]">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/returns/">Returns</Link>
          <Link href="/shipping/">Shipping</Link>
          <Link href="/faq/">FAQ</Link>
        </nav>
      </div>
    </footer>
  );
}
