"use client";

import { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { ChevronDown, Check, Globe } from "lucide-react";
import Image from "next/image";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

const dictionaries = { en, es };

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = (params?.locale as "es" | "en") || "en";
  const dict = dictionaries[currentLocale].Footer;

  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ] as const;

  const activeLanguage = languages.find((l) => l.code === currentLocale) || languages[0];

  const handleLanguageChange = (code: "es" | "en") => {
    router.replace(pathname, { locale: code });
    setIsOpen(false);
  };

  return (
    <footer className="bg-brand-main text-brand-bg pt-16 pb-8 border-t border-brand-main/20 font-light relative">
      <div className="layout-container">
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">

          {/* Col 1: Brand details */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/android-chrome-512x512.png"
                alt="ShopiDeck Logo"
                width={32}
                height={32}
                className="rounded-lg shadow-soft"
              />
              <span className="font-display font-black text-xl text-brand-bg tracking-tight">
                ShopiDeck
              </span>
            </Link>
            <p className="text-xs text-brand-bg/60 leading-relaxed max-w-xs">
              {dict.desc}
            </p>
          </div>

          {/* Col 2: Company links */}
          <div className="md:col-span-3">
            <h5 className="font-display font-bold text-brand-bg/90 mb-4 text-sm tracking-wider uppercase">
              {dict.company}
            </h5>
            <ul className="space-y-3 text-xs text-brand-bg/70 font-normal">
              <li>
                <Link href="/#features" className="hover:text-brand-accent transition-colors">
                  {dict.pricing}
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-brand-accent transition-colors">
                  {dict.help}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-accent transition-colors flex items-center gap-1.5">
                  {dict.blogLink}
                  <span className="bg-brand-accent/20 text-brand-accent text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                    New
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="md:col-span-2">
            <h5 className="font-display font-bold text-brand-bg/90 mb-4 text-sm tracking-wider uppercase">
              {dict.legal}
            </h5>
            <ul className="space-y-3 text-xs text-brand-bg/70 font-normal">
              <li>
                <Link href="/privacy" className="hover:text-brand-accent transition-colors">
                  {dict.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-accent transition-colors">
                  {dict.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Language switch */}
          <div className="md:col-span-3 flex flex-col gap-4 relative">
            <h5 className="font-display font-bold text-brand-bg/90 text-sm tracking-wider uppercase">
              {dict.language}
            </h5>
            <p className="text-xs text-brand-bg/60 leading-relaxed max-w-xs">
              {dict.langDesc}
            </p>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-brand-bg/10 hover:bg-brand-bg/15 text-brand-bg hover:text-brand-accent px-4 py-3 rounded-2xl border border-brand-bg/15 font-bold text-xs flex items-center justify-between gap-2 transition-all w-full md:w-48 text-left"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-brand-bg/60" />
                  <span>{activeLanguage.flag}</span>
                  <span>{activeLanguage.name}</span>
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-brand-bg/60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-full md:w-48 bg-brand-card text-brand-main rounded-2xl border border-brand-border shadow-premium overflow-hidden z-30 animate-fadeIn">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full px-4 py-2.5 text-xs text-left hover:bg-brand-cream/80 flex items-center justify-between transition-colors ${currentLocale === lang.code ? "font-bold bg-brand-cream text-brand-accent" : "font-normal text-brand-secondary"
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                        {currentLocale === lang.code && <Check className="w-3.5 h-3.5 text-brand-accent" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-brand-bg/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-bg/40 font-normal">
          <p>
            {dict.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors flex items-center"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors flex items-center"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
