import { ReactNode } from "react";
import { i18n } from "@/i18n/i18n-config";

const baseUrl = "https://www.oradental.lu";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>
          Cabinet dentaire ORA : Dentiste et Orthodontiste à Differdange
        </title>
        <meta name="description" content="Ora dental practice website" />
        <link rel="icon" href={`${baseUrl}/assets/icon.png`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        {i18n.locales.map((locale) => (
          <link
            key={`hreflang-root-${locale}`}
            rel="alternate"
            hrefLang={locale}
            href={`${baseUrl}/${locale}`}
          />
        ))}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ora Dental",
              url: baseUrl,
              logo: `${baseUrl}/assets/icon.png`,
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
