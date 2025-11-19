import { MetadataRoute } from "next";

const siteUrl = "https://www.oradental.lu";
const locales = ["fr", "en", "lu", "pt"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/treatments",
    "/aesthetic",
    "/aesthetic/face",
    "/aesthetic/body",
    "/aesthetic/price",
  ];

  const members = [
    "dr-mathilde-ajdarpasic",
    "dr-djamel-daf",
    "dr-alvin-lesdel",
    "dr-alain-zeidan",
    "dr-agnès-hussein",
    "dr-gorian-freminet",
    "dr-david-narberger",
  ];

  const now = new Date().toISOString();
  const pages: MetadataRoute.Sitemap = [];

  // Homepages
  for (const locale of locales) {
    pages.push({
      url: `${siteUrl}/${locale}`,
      lastModified: now,
      priority: 1,
      changeFrequency: "monthly",
      alternates: {
        languages: {
          fr: `${siteUrl}/fr`,
          en: `${siteUrl}/en`,
          lu: `${siteUrl}/lu`,
          pt: `${siteUrl}/pt`,
          "x-default": `${siteUrl}/fr`,
        },
      },
    });
  }

  // Pages statiques
  for (const path of staticPaths) {
    for (const locale of locales) {
      pages.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: now,
        priority: 0.8,
        changeFrequency: "monthly",
        alternates: {
          languages: {
            fr: `${siteUrl}/fr${path}`,
            en: `${siteUrl}/en${path}`,
            lu: `${siteUrl}/lu${path}`,
            pt: `${siteUrl}/pt${path}`,
            "x-default": `${siteUrl}/fr${path}`,
          },
        },
      });
    }
  }

  // Pages membres
  for (const member of members) {
    const path = `/teams/${member}`;

    for (const locale of locales) {
      pages.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: now,
        priority: 0.8,
        changeFrequency: "monthly",
        alternates: {
          languages: {
            fr: `${siteUrl}/fr${path}`,
            en: `${siteUrl}/en${path}`,
            lu: `${siteUrl}/lu${path}`,
            pt: `${siteUrl}/pt${path}`,
            "x-default": `${siteUrl}/fr${path}`,
          },
        },
      });
    }
  }

  return pages;
}
