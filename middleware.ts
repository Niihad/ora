import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/i18n/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  return matchLocale(languages, i18n.locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Exceptions qui ne doivent pas être redirigées
  const exceptions = ["/robots.txt", "/sitemap.xml", "/favicon.ico"];
  if (exceptions.includes(pathname)) return NextResponse.next();

  // Vérifie si l'URL commence déjà par une locale
  const hasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  );

  if (!hasLocale) {
    const locale = getLocale(request);
    const url = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(url, 308); // permanent redirect pour Googlebot
  }

  return NextResponse.next();
}

// Matcher : ignore fichiers statiques et API
export const config = {
  matcher: "/((?!api|_next/static|_next/image|assets/).*)",
};
