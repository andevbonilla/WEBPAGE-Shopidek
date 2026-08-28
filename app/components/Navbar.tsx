"use client";

import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import {
  NAVBAR_LOGO,
  NAVBAR_LOGO_DISPLAY_WIDTH,
  NAVBAR_LOGO_HEIGHT,
  NAVBAR_LOGO_WIDTH,
  SITE_LOGO_ALT,
} from "../config";

const dictionaries = { en, es };

export default function Navbar() {
  const params = useParams();
  const locale = (params?.locale as "en" | "es") || "en";
  const dict = dictionaries[locale].Navbar;

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border">
      <div className="layout-container h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={`${SITE_LOGO_ALT} home`}>
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

        <nav className="hidden md:flex items-center gap-8">
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
            <span className="bg-brand-accent/20 text-brand-main text-[9px] px-1.5 py-0.5 rounded-full font-bold">
              {dict.newBadge}
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/#features" 
            className="bg-brand-accent hover:bg-brand-accent-hover text-brand-main px-6 py-2.5 rounded-full font-bold transition-colors duration-200 border border-brand-main/10 text-sm"
          >
            {dict.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}

