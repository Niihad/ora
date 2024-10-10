import "server-only";

import { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  lu: () => import("./dictionaries/lu.json").then((module) => module.default),
  pt: () => import("./dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en();
