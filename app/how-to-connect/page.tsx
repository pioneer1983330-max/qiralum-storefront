"use client";

import { useEffect } from "react";
import { Placeholder } from "@/components/Placeholder";
import { track } from "@/lib/analytics";

export default function HowToConnectPage() {
  useEffect(() => {
    track("nfc_preview_open", {
      page_id: "nfc_preview",
      is_preview: true,
    });
  }, []);

  return (
    <article data-page-id="nfc_preview" className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs tracking-[0.2em] text-[var(--muted)]">QIRALUM · PREVIEW</p>
      <h1 className="mt-3 font-serif text-4xl">How to connect</h1>
      <p className="mt-4 text-lg leading-relaxed">
        Unlock your phone and hold it <em>near</em> your QIRALUM bracelet. Leave a little
        air — there is no need to press or jam the phone onto the piece.
      </p>
      <Placeholder
        id="temp_nfc_near_phone"
        className="mt-8 overflow-hidden rounded-lg border border-[var(--line)]"
      />
      <ol className="mt-8 list-decimal space-y-3 pl-5 text-[15px] leading-relaxed">
        <li>Wake the phone and keep the screen unlocked.</li>
        <li>Bring the back of the phone near the bracelet, not flush-forced onto it.</li>
        <li>Wait for the system prompt. If nothing appears, shift a few millimeters and try again.</li>
      </ol>
      <section
        className="mt-12 rounded-lg border border-[var(--line)] bg-white/40 p-5"
        data-module="experience"
      >
        <p className="text-xs tracking-[0.18em] text-[var(--muted)]">EXPERIENCE</p>
        <h2 className="mt-2 font-serif text-2xl">Barakah Standard Experience</h2>
        <p className="mt-3 text-sm leading-relaxed">
          After you connect, QIRALUM opens a quiet keepsake layer named Barakah Standard
          Experience. It is an experience name only — not the selling brand, not a
          fitness tracker, not a claim of guaranteed blessing.
        </p>
      </section>
    </article>
  );
}
