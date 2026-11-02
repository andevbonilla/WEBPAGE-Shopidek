"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// Extra FAQ items stay in the server HTML (good for search engines) and are only hidden visually.
export function FaqMore({ moreLabel, lessLabel, children }: { moreLabel: string; lessLabel: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div id="faq-more" hidden={!open} className="mt-3 space-y-3">{children}</div>
      <div className="mt-6 flex justify-center">
        <button type="button" aria-expanded={open} aria-controls="faq-more" onClick={() => setOpen(!open)} className="product-secondary-button">
          {open ? lessLabel : moreLabel}
          <ChevronDown className={`h-4 w-4 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
