import { MetadataRoute } from 'next';

const siteUrl = 'https://www.oradental.lu';
const locales = ['fr', 'en', 'lu', 'pt'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/treatments',
    '/aesthetic',
    '/aesthetic/face',
    '/aesthetic/body',
    '/aesthetic/price',
    '/teams',
  ];

  const members = [
    "dr-mathilde-ajdarpasic",
    "dr-djamel-daf",
    "dr-alvin-lesdel",
    "dr-alain-zeidan",
    "dr-agnès-hussein",
    "dr-gorian-freminet",
    "dr-david-narberger"
  ];

  const now = new Date();

  const pages: MetadataRoute.Sitemap = [];

  // Homepage pour toutes les langues
  for (const locale of locales) {
    pages.push({
      url: `${siteUrl}/${locale}`,
      lastModified: now,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${siteUrl}/${l}`])
        ),
      },
    });
  }

  // Pages statiques (autres que homepage)
  for (const path of staticPaths) {
    for (const locale of locales) {
      pages.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: now,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${siteUrl}/${l}${path}`])
          ),
        },
      });
    }
  }

  // Pages des membres de l'équipe
  for (const member of members) {
    for (const locale of locales) {
      const path = `/teams/${member}`;
      pages.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified: now,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${siteUrl}/${l}${path}`])
          ),
        },
      });
    }
  }

  return pages;
}
