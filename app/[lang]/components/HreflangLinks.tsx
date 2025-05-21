"use client";

import { usePathname } from "next/navigation";

type Props = {
  baseUrl: string;
  locales: readonly string[];
};

export default function HreflangLinks({ baseUrl, locales }: Props) {
  const pathname = usePathname();

  return (
    <>
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${baseUrl}/${locale}${pathname === "/" ? "" : pathname}`}
        />
      ))}
    </>
  );
}
