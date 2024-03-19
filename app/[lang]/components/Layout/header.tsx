"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import MobileNav from "../MobileNav";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { usePathname } from "next/navigation";
import { Locale, i18n } from "@/i18n/i18n-config";
import { useDictionary } from "@/i18n/dictionary-provider";
import Image from "next/image";

export default function Header({ lang }: { lang: Locale }) {
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  const pathname = usePathname();
  const header = useDictionary().header;
  const { locales } = i18n;

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 135);
    });
  }, []);

  const NavBar = () => {
    return (
      <>
        {header.navigation.map((nav: any) =>
          pathname === "/" ? (
            <LinkScroll
              key={nav.id}
              activeClass="active"
              to={nav.id}
              spy={true}
              smooth={true}
              duration={1000}
              offset={nav.offset}
              onSetActive={() => {
                setActiveLink(nav.id);
              }}
              className={
                "xl:text-2xl md:text-xl sm:block cursor-pointer" +
                (activeLink === nav.id
                  ? " text-neutral-500"
                  : " text-black hover:text-neutral-500 ")
              }
            >
              {nav.name}
            </LinkScroll>
          ) : (
            <Link
              key={nav.id}
              href={`/${lang}//#${nav.id}`}
              onClick={() => {
                setActiveLink(nav.id);
              }}
              className={
                "xl:text-2xl md:text-xl sm:block cursor-pointer" +
                (activeLink === nav.id
                  ? " text-neutral-500"
                  : " text-black hover:text-neutral-500 ")
              }
            >
              {nav.name}
            </Link>
          )
        )}
      </>
    );
  };

  return (
    <header className="bg-neutral-100" id="header">
      <div className="header uppercase hidden sm:block">
        <div className="bg-white text-black p-2 px-6 ">
          <div className="flex gap-3 text-sm p-1 justify-end text-black font-bold">
            {[...locales].map((locale) => (
              <Link key={locale} href={redirectedPathName(locale)}>
                {locale}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 text-4xl p-3 justify-center font-bold mb-6">
            <Image
              src={"/assets/logo.jpg"}
              alt="Logo"
              width={0}
              height={0}
              className="w-[600px] h-auto"
            />
          </div>
        </div>
        <nav>
          <NavBar />
        </nav>
        {scrollActive && (
          <ScrollAnimationWrapper>
            <motion.nav
              className={
                "fixed w-full z-30 bg-slate-50 h-[62px] transition-all top-0 shadow-md pt-0"
              }
              initial={{ y: -135 }}
              animate="visible"
              variants={{ visible: { y: 0 } }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <NavBar />
            </motion.nav>
          </ScrollAnimationWrapper>
        )}
      </div>
      <MobileNav lang={lang} />
    </header>
  );
}
