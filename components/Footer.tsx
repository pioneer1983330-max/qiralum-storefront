import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--line)]">
      <div className="mx-auto max-w-5xl space-y-4 px-4 py-8 text-sm text-[var(--muted)]">
        <p>
          QIRALUM — everyday faith jewelry, worn by all. Draft storefront.{" "}
          {`Not a fitness tracker or “smart” gadget.`} Prayer times, if ever
          shown, are approximate and do not replace your local mosque.
        </p>
        <p className="text-xs">
          Selling brand is QIRALUM only. Experience naming stays off the brand
          lockup and lives in the experience block.
        </p>
        <nav className="flex flex-wrap gap-4 text-[var(--ink)]">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/returns/">Returns</Link>
          <Link href="/shipping/">Shipping</Link>
          <Link href="/faq/">FAQ</Link>
        </nav>
      </div>
    </footer>
  );
}
