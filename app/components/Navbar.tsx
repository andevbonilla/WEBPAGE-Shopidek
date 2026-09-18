"use client";

import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getMessages, resolveLocale } from "@/i18n/messages";
import {
  NAVBAR_LOGO,
  NAVBAR_LOGO_DISPLAY_WIDTH,
  NAVBAR_LOGO_HEIGHT,
  NAVBAR_LOGO_WIDTH,
  SITE_LOGO_ALT,
} from "../config";

export default function Navbar() {
  const params = useParams();
  const locale = resolveLocale(params?.locale);
  const dict = getMessages(locale, "Navbar");

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border">
      <div className="layout-container h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={dict.homeLabel}>
          <Image
            src={NAVBAR_LOGO}
            alt={SITE_LOGO_ALT}
            width={NAVBAR_LOGO_WIDTH}
            height={NAVBAR_LOGO_HEIGHT}
            sizes={`${NAVBAR_LOGO_DISPLAY_WIDTH}px`}
            priority
            style={{ width: NAVBAR_LOGO_DISPLAY_WIDTH, height: "auto", maxWidth: "100%" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm xl:gap-8 xl:text-base">
          <Link href="/#features" className="font-medium text-brand-secondary hover:text-brand-main transition-colors duration-200">
            {dict.apps}
          </Link>
          <Link href="/#why-us" className="font-medium text-brand-secondary hover:text-brand-main transition-colors duration-200">
            {dict.whyUs}
          </Link>
          <Link href="/help" className="font-medium text-brand-secondary hover:text-brand-main transition-colors duration-200">
            {dict.faq}
          </Link>
          <Link href="/blog" className="font-medium text-brand-secondary hover:text-brand-main transition-colors duration-200 flex items-center gap-1.5">
            {dict.blog}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/#features" 
            className="shrink-0 whitespace-nowrap bg-brand-accent hover:bg-brand-accent-hover text-brand-main px-4 py-2.5 rounded-full font-bold transition-colors duration-200 border border-brand-main/10 text-xs sm:px-6 sm:text-sm"
          >
            {dict.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}

