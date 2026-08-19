"use client";

import { useState } from "react";
import { Share2, Link as LinkIcon, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  locale: "en" | "es";
}

export default function ShareButtons({ title, locale }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const supportsNativeShare = typeof navigator !== "undefined" && typeof navigator.share === "function";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL", err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: title,
          url: shareUrl || window.location.href,
        });
      } catch (err) {
        console.error("Error sharing", err);
      }
    } else {
      handleCopy();
    }
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
        {locale === "en" ? "Share News" : "Compartir Noticia"}
      </p>
      <div className="flex items-center gap-2">
        {/* Copy Link Button */}
        <button
          onClick={handleCopy}
          className="p-2 rounded-xl border border-brand-border bg-brand-bg hover:bg-zinc-100 text-brand-secondary transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
          title={locale === "en" ? "Copy link" : "Copiar enlace"}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-600">{locale === "en" ? "Copied!" : "¡Copiado!"}</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold">{locale === "en" ? "Copy" : "Copiar"}</span>
            </>
          )}
        </button>

        {/* Twitter/X Share with Custom SVG */}
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl border border-brand-border bg-brand-bg hover:bg-zinc-100 text-brand-secondary transition-colors duration-200 flex items-center justify-center cursor-pointer"
          title="Share on Twitter / X"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Facebook Share with Custom SVG */}
        <a
          href={facebookShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl border border-brand-border bg-brand-bg hover:bg-zinc-100 text-brand-secondary transition-colors duration-200 flex items-center justify-center cursor-pointer"
          title="Share on Facebook"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>

        {/* Native Share button */}
        {supportsNativeShare && (
          <button
            onClick={handleNativeShare}
            className="p-2 rounded-xl border border-brand-border bg-brand-bg hover:bg-zinc-100 text-brand-secondary transition-colors duration-200 flex items-center justify-center cursor-pointer"
            title="More share options"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
