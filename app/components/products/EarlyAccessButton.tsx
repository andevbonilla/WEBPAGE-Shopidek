"use client";

import Script from "next/script";
import { ArrowRight } from "lucide-react";

const EARLY_ACCESS_FORM_ID = "9qe6yp";

type EarlyAccessButtonProps = {
  label: string;
  className?: string;
};

export function EarlyAccessButton({ label, className = "" }: EarlyAccessButtonProps) {
  return (
    <>
      {/* Next.js deduplicates this widget when multiple CTAs are rendered. */}
      <Script
        id="tally-widget"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      {/* A real form URL keeps the CTA usable before hydration or if the widget fails. */}
      <a
        href={`https://tally.so/r/${EARLY_ACCESS_FORM_ID}`}
        data-tally-open={EARLY_ACCESS_FORM_ID}
        data-tally-layout="modal"
        data-tally-emoji-animation="wave"
        data-tally-auto-close="0"
        data-tally-form-events-forwarding="1"
        className={`product-primary-button ${className}`.trim()}
      >
        {label}
        <ArrowRight className="cta-arrow h-4 w-4" aria-hidden="true" />
      </a>
    </>
  );
}
