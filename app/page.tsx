import { redirect } from "next/navigation";
import { i18n, Locale } from "@/i18n/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { headers } from "next/headers";

export default function RootPage() {
  const headersList = headers();
  const acceptLang = headersList.get("accept-language") || "";

  const locale: Locale = matchLocale(
    [acceptLang],
    i18n.locales,
    i18n.defaultLocale
  ) as Locale;

  redirect(`/${locale}`);
}
