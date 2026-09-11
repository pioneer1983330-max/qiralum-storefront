"use client";

import { useEffect } from "react";
import { TempPhoto } from "@/components/TempPhoto";
import { NFC_NEAR } from "@/lib/catalog";
import { track } from "@/lib/analytics";

export default function HowToConnectPage() {
  useEffect(() => {
    track("nfc_preview_open", {
      page_id: "nfc_preview",
      is_preview: true,
    });
  }, []);

  return (
    <article data-page-id="nfc_preview" className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="eyebrow">QIRALUM · PREVIEW</p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.12] md:text-5xl">How to connect</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--muted)]">
            Unlock your phone and hold it <em>near</em> your QIRALUM bracelet. Leave a little
            air — there is no need to press or jam the phone onto the piece.
          </p>
          <ol className="mt-10 space-y-6">
            {[
              "Wake the phone and keep the screen unlocked.",
              "Bring the back of the phone near the bracelet, not flush-forced onto it.",
              "Wait for the system prompt. If nothing appears, shift a few millimeters and try again.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4 text-[15px] leading-relaxed">
                <span className="font-serif text-xl text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <TempPhoto
          src={NFC_NEAR}
          alt="Hold the phone near the bracelet — TEMP"
          className="overflow-hidden bg-[var(--paper-deep)]"
        />
      </div>

      <section
        className="mt-16 max-w-2xl border-t border-[var(--line)] pt-10"
        data-module="experience"
      >
        <p className="eyebrow">Experience</p>
        <h2 className="mt-3 font-serif text-2xl md:text-3xl">Barakah Standard Experience</h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
          After you connect, QIRALUM opens a quiet keepsake layer named Barakah Standard
          Experience. It is an experience name only — not the selling brand, not a
          fitness tracker, not a claim of guaranteed blessing.
        </p>
      </section>
    </article>
  );
}
