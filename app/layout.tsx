import { ReactNode } from "react";

export const metadata = {
  title: "Cabinet dentaire ORA : Dentiste et Orthodontiste à Differdange",
  description: "Ora dental practice website",
  icons: {
    icon: "https://www.oradental.lu/assets/icon.png",
  },
  openGraph: {
    title: "Cabinet dentaire ORA : Dentiste et Orthodontiste à Differdange",
    type: "website",
    siteName: "Cabinet dentaire ORA : Dentiste et Orthodontiste à Differdange",
    images: "https://www.oradental.lu/assets/cabinet.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ora Dental",
              url: "https://www.oradental.lu",
              logo: "https://www.oradental.lu/assets/icon.png",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
