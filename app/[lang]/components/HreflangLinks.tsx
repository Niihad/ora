import { i18n } from "@/i18n/i18n-config";

// Réutilisation des mêmes données que ton sitemap
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

// baseUrl = https://www.oradental.lu
interface HreflangLinksProps {
  baseUrl: string;
  currentPath?: string; // chemin actuel facultatif
}

export default function HreflangLinks({
  baseUrl,
  currentPath = "/",
}: HreflangLinksProps) {
  const pages: { url: string; alternates: Record<string, string> }[] = [];

  // Homepage
  pages.push({
    url: `${baseUrl}${currentPath === "/" ? "" : currentPath}`,
    alternates: Object.fromEntries(
      i18n.locales.map((l) => [l, `${baseUrl}/${l}`])
    ),
  });

  // Pages statiques
  for (const path of staticPaths) {
    pages.push({
      url: `${baseUrl}${currentPath === path ? path : ""}`,
      alternates: Object.fromEntries(
        i18n.locales.map((l) => [l, `${baseUrl}/${l}${path}`])
      ),
    });
  }

  // Pages membres
  for (const member of members) {
    const path = `/teams/${member}`;
    pages.push({
      url: `${baseUrl}${currentPath === path ? path : ""}`,
      alternates: Object.fromEntries(
        i18n.locales.map((l) => [l, `${baseUrl}/${l}${path}`])
      ),
    });
  }

  // Génération des balises <link hreflang>
  return (
    <>
      {pages.map((page, idx) =>
        Object.entries(page.alternates).map(([locale, href]) => (
          <link
            key={`${idx}-${locale}`}
            rel="alternate"
            hrefLang={locale}
            href={href}
          />
        ))
      )}

      {/* x-default */}
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
    </>
  );
}
