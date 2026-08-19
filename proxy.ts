import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Host canonicalization is intentionally handled by the Vercel domain
  // configuration. Redirecting www here can conflict with Vercel's own
  // redirect and create a loop, so this proxy only handles locale paths.

  // 1. Check if the pathname already has a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If they visit "/en" or "/en/...", redirect to clean root (SEO friendly)
    if (pathname === '/en') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    if (pathname.startsWith('/en/')) {
      const cleanPath = pathname.substring(3);
      return NextResponse.redirect(new URL(cleanPath, request.url));
    }
    return;
  }

  // 2. Rewrite internally to the defaultLocale ('en') so it matches the app/[locale] pages
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  
  return NextResponse.rewrite(url);
}

export const config = {
  // Match only internationalized pathnames, skipping internal files and public assets
  matcher: ['/((?!_next|api|static|favicon.ico|.*\\..*).*)']
};

