"use client";

import React from 'react';
import NextLink from 'next/link';
import { useParams, usePathname as useNextPathname, useRouter as useNextRouter } from 'next/navigation';

export const locales = ['en', 'es'] as const;

// Custom lightweight Link component that preserves the dynamic locale during navigation
export function Link({ href, children, ...props }: any) {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  let localizedHref = href;
  if (locale === 'es' && href && href.startsWith('/') && !href.startsWith('/es')) {
    localizedHref = `/es${href === '/' ? '' : href}`;
  }

  return React.createElement(NextLink, { href: localizedHref, ...props }, children);
}

// Custom wrapper to get the clean pathname (without the locale prefix)
export function usePathname() {
  const pathname = useNextPathname();
  if (pathname.startsWith('/es')) {
    return pathname.substring(3) || '/';
  }
  return pathname;
}

// Custom wrapper to handle localized routing actions
export function useRouter() {
  const router = useNextRouter();
  const pathname = useNextPathname();

  return {
    ...router,
    push(href: string, options?: any) {
      let target = href;
      if (options?.locale === 'es' && href.startsWith('/')) {
        target = `/es${href === '/' ? '' : href}`;
      }
      router.push(target);
    },
    replace(href: string, options?: any) {
      let target = href;
      if (options?.locale === 'es' && href.startsWith('/')) {
        target = `/es${href === '/' ? '' : href}`;
      } else if (options?.locale === 'en' && href.startsWith('/')) {
        // Strip es prefix
        if (href.startsWith('/es')) {
          target = href.substring(3) || '/';
        }
      }
      router.replace(target);
    }
  };
}
