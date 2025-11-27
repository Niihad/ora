import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@/i18n/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string {
  const headersObj: Record<string, string> = {};
  request.headers.forEach((value, key) => (headersObj[key] = value));
  const languages = new Negotiator({ headers: headersObj }).languages();
  return matchLocale(languages, i18n.locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const rootExceptions = [
    "/robots.txt",
    "/sitemap.xml",
    "/favicon.ico",
    "/icon.png",
    "/icon.jpg",
    "/apple-touch-icon.png",
  ];

  if (rootExceptions.includes(pathname)) return NextResponse.next();
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/fr";
    return NextResponse.redirect(url, 308);
  }

  const hasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const locale = getLocale(request);
  const url = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon|assets|robots.txt|sitemap).*)",
  ],
};
