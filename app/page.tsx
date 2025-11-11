import { redirect } from 'next/navigation'
import { i18n, Locale } from '@/i18n/i18n-config'
import { match as matchLocale } from '@formatjs/intl-localematcher'

export default function RootPage({ headers }: { headers?: Headers }) {
  let locale: Locale = i18n.defaultLocale as Locale

  if (headers) {
    const acceptLang = headers.get('accept-language') || ''
    locale = matchLocale([acceptLang], i18n.locales, i18n.defaultLocale) as Locale
  }

  redirect(`/${locale}`) // redirection côté serveur vers la langue détectée
}
