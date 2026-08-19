"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

interface CopyLinkButtonProps {
  locale: "en" | "es";
}

export default function CopyLinkButton({ locale }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL", err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
        {locale === "en" ? "Page Link" : "Enlace de la Página"}
      </p>
      <button
        onClick={handleCopy}
        className="w-full p-2.5 rounded-xl border border-brand-border bg-brand-bg hover:bg-zinc-100 text-brand-secondary transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer text-xs font-bold"
        title={locale === "en" ? "Copy page link" : "Copiar enlace de la página"}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-600">{locale === "en" ? "Link Copied!" : "¡Enlace Copiado!"}</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5 text-brand-muted" />
            <span>{locale === "en" ? "Copy URL" : "Copiar URL"}</span>
          </>
        )}
      </button>
    </div>
  );
}
