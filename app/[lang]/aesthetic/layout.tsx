"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/i18n/dictionary-provider";
import Link from "next/link";
import TransitionPage from "../components/TransitionPage";
import { Locale } from "@/i18n/i18n-config";

export default function AestheticLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const pathname = usePathname().replace(/^\/[a-z]{2}(?=\/)/, "");
  const aesthetic = useDictionary().aesthetic;

  return (
    <div>
      <nav className="flex justify-center space-x-4 sm:pt-3 pt-6">
        {aesthetic.categories.map((category) => (
          <Link
            key={category.title}
            href={`/${params.lang}/aesthetic/${category.link}`}
            className={`uppercase font-bold px-4 pt-0 ${
              pathname === `/${params.lang}/aesthetic/${category.link}`
                ? "text-neutral-400"
                : "text-black hover:text-neutral-400"
            }`}
          >
            {category.title}
          </Link>
        ))}
      </nav>
      <div className="w-full h-px bg-black my-0 mt-3" />
      <TransitionPage key={pathname}>{children}</TransitionPage>
    </div>
  );
}
