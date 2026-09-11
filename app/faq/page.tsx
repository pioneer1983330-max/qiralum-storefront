import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "What is QIRALUM?",
    a: "QIRALUM is everyday faith jewelry. Two colorways — Urban Onyx (black agate) and Terracotta Bloom — both $27.90, worn by all. No gender SKUs.",
  },
  {
    q: "What sizes are the two pieces?",
    a: "Urban Onyx is 210 × 18 mm. Terracotta Bloom is 190 × 16 mm.",
  },
  {
    q: "Is this a smart bracelet or NFC gadget?",
    a: "No. QIRALUM is jewelry first. Connecting with a phone is optional and explained on How to connect. We do not sell it as an NFC bracelet, fitness tracker, or smart band.",
  },
  {
    q: "What happens after I connect?",
    a: "You may open a quiet keepsake layer. That layer is named Barakah Standard Experience. Barakah is an experience name, not the store brand.",
  },
  {
    q: "Can I send it as a gift?",
    a: "Yes. Gift wrap and a short note are available at checkout. Suitable for Eid, Ramadan, or everyday gifting without a gender split.",
  },
  {
    q: "Do you promise exact prayer times or religious rulings?",
    a: "No. If prayer times ever appear in the experience, they are approximate and do not replace your local mosque. We do not issue official legal rulings.",
  },
  {
    q: "Shipping, returns, privacy?",
    a: "See the stub pages in the footer. This independent site is a draft; policies will be finalized before paid orders go live.",
  },
];

export default function FaqPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-4xl">FAQ</h1>
      <dl className="mt-8 space-y-8">
        {faqs.map((item) => (
          <div key={item.q}>
            <dt className="font-medium">{item.q}</dt>
            <dd className="mt-2 text-[var(--muted)]">{item.a}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
