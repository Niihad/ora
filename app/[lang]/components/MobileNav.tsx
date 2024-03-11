"use client";

import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/i18n/dictionary-provider";
import Image from "next/image";
import { Locale, i18n } from "@/i18n/i18n-config";

export default function MobileNav({ lang }: { lang: Locale }) {
  const [navShow, setNavShow] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const header = useDictionary().header;
  const { locales } = i18n;

  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <div className="fixed w-full h-[62px] z-20 bg-white shadow-md grid grid-cols-6 flex py-1 sm:hidden">
        <div className="p-3 col-span-5 text-center justify-center align-middle">
          <Image src={"/assets/logo.jpg"} alt="Logo" width={250} height={0} />
        </div>
        <div className="flex justify-end ">
          <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className="pr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-8 w-8 "
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed z-30 left-0 top-0 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out  ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex p-4 pr-2 justify-end">
          <button
            className="h-8 w-8 z-20"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-black "
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full z-20">
          {header.navigation.map((link: any) => (
            <div key={link.name} className="px-12 py-4">
              {pathname === "/" ? (
                <LinkScroll
                  activeClass="active"
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={link.offset}
                  onSetActive={() => {
                    setActiveLink(link.id);
                  }}
                  className="text-2xl uppercase font-bold tracking-widest text-black hover:text-zinc-400 cursor-pointer"
                  onClick={onToggleNav}
                >
                  {link.name}
                </LinkScroll>
              ) : (
                <Link
                  key={link.id}
                  href={`/${lang}//#${link.id}`}
                  onClick={onToggleNav}
                  className="text-2xl uppercase scroll-behavior font-bold tracking-widest text-neutral-900 hover:text-zinc-400 cursor-pointer"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="relative min-h-screen -top-20 w-full z-0">
          <div className="absolute bottom-0 end-0 mr-2">
            <div className="flex gap-2 text-sm p-1 justify-end text-black font-bold uppercase">
              {[...locales].sort().map((locale) => (
                <Link key={locale} href={redirectedPathName(locale)}>
                  {locale}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
