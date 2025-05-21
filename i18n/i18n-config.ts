export const i18n = {
  defaultLocale: "fr",
  locales: ["fr", "en", "lu", "pt"],
  localeDetection: true,
} as const;

export type I18nConfig = typeof i18n;
export type Locale = (typeof i18n)["locales"][number];