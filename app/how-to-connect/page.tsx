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
    <article data-page-id="nfc_preview">
      <div className="grid lg:grid-cols-2 lg:items-center">
        <div className="order-first bg-[var(--paper-deep)] lg:order-last lg:flex lg:min-h-[70vh] lg:items-center">
          <TempPhoto
            src={NFC_NEAR}
            alt="Hold the phone near the bracelet — TEMP"
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 md:px-12 md:py-20 lg:px-16">
          <p className="eyebrow">QIRALUM</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.08] md:text-6xl">How to connect</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--muted)]">
            Unlock your phone and hold it <em>near</em> your QIRALUM bracelet. Leave a little
            air — there is no need to press or jam the phone onto the piece.
          </p>
          <ol className="mt-12 max-w-md space-y-8">
            {[
              "Wake the phone and keep the screen unlocked.",
              "Bring the back of the phone near the bracelet, not flush-forced onto it.",
              "Wait for the system prompt. If nothing appears, shift a few millimeters and try again.",
            ].map((step, i) => (
              <li key={step} className="flex gap-5 text-[15px] leading-relaxed">
                <span className="font-serif text-2xl text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section
        className="mx-auto max-w-xl px-6 py-16 md:py-20"
        data-module="experience"
      >
        <p className="eyebrow">Experience</p>
        <h2 className="mt-4 font-serif text-3xl md:text-4xl">Barakah Standard Experience</h2>
        <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
          After you connect, QIRALUM opens a quiet keepsake layer named Barakah Standard
          Experience. It is an experience name only — not the selling brand, not a
          fitness tracker, not a claim of guaranteed blessing.
        </p>
      </section>
    </article>
  );
}
