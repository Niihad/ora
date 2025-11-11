import { ReactNode } from "react";

export const metadata = {
  title: "Ora Dental",
  description: "Cabinet dentaire ORA",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
