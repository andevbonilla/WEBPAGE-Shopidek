"use client";

import React from "react";
import NextLink from "next/link";
import { useParams, usePathname as useNextPathname, useRouter as useNextRouter } from "next/navigation";

export const locales = ["en", "es"] as const;
type Locale = (typeof locales)[number];
type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "href"> & {
  href: string;
  children: React.ReactNode;
};
type LocaleOptions = { locale?: Locale; scroll?: boolean };

export function Link({ href, children, ...props }: LinkProps) {
  const params = useParams();
  const locale = (params?.locale as Locale | undefined) || "en";
  const localizedHref = locale === "es" && href.startsWith("/") && !href.startsWith("/es")
    ? `/es${href === "/" ? "" : href}`
    : href;

  return React.createElement(NextLink, { href: localizedHref, ...props }, children);
}

export function usePathname() {
  const pathname = useNextPathname();
  return pathname.startsWith("/es") ? pathname.substring(3) || "/" : pathname;
}

export function useRouter() {
  const router = useNextRouter();

  const localize = (href: string, locale?: Locale) => {
    if (locale === "es" && href.startsWith("/")) return `/es${href === "/" ? "" : href}`;
    if (locale === "en" && href.startsWith("/es")) return href.substring(3) || "/";
    return href;
  };

  return {
    ...router,
    push(href: string, options?: LocaleOptions) {
      router.push(localize(href, options?.locale), { scroll: options?.scroll });
    },
    replace(href: string, options?: LocaleOptions) {
      router.replace(localize(href, options?.locale), { scroll: options?.scroll });
    },
  };
}
