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
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  
  const handleClick = (param: string) => {
    onToggleNav();
    setActiveLink(param);
  };

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
    <div className="mb-14 sm:mb-0">
      <div className="fixed w-full h-[62px] z-20 bg-white shadow-md grid grid-cols-6 flex py-1 sm:hidden">
        <Link href={`/${lang}`} className="flex m-3 col-span-5">
          <Image
            src={"/assets/logo.jpg"}
            alt="Logo"
            width={250}
            height={0}
            className="w-[250px] h-auto"
          />
        </Link>
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
        <div className="flex p-4 pr-2 justify-between">
          <div className="flex gap-3 text-sm p-1 justify-end text-black font-bold uppercase">
            {[...locales].map((locale) => (
              <Link key={locale} href={redirectedPathName(locale)}>
                {locale}
              </Link>
            ))}
          </div>
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
          {header.navigation.map((link) => (
            <div key={link.name} className="px-12 py-4">
              {pathname === `/${lang}` ? (
                <>
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
                    className={
                      "text-2xl uppercase font-bold tracking-widest cursor-pointer" +
                      (activeLink === link.id
                        ? " text-neutral-400"
                        : " text-black hover:text-neutral-400")
                    }
                    onClick={onToggleNav}
                  >
                    {link.name}
                  </LinkScroll>
                  {/*link.sub.length > 0 && (
                    <>
                      <ol className="space-y-2 text-xl pl-2 pt-2 list-disc list-inside">
                        {link.sub.map((sublink) => (
                          <li key={sublink.name}>
                            <Link
                              key={sublink.id}
                              href={`/${lang}/${link.id}/${sublink.id}`}
                              onClick={() => {
                                handleClick(sublink.id);
                              }}
                              className={
                                "uppercase scroll-behavior font-bold tracking-widest cursor-pointer" +
                                (activeLink === sublink.id
                                  ? " text-neutral-400"
                                  : " text-black hover:text-neutral-400 ")
                              }
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ol>
                    </>
                  )*/}
                </>
              ) : (
                <>
                  <Link
                    key={link.id}
                    href={`/${lang}//#${link.id}`}
                    onClick={onToggleNav}
                    className={
                      "text-2xl uppercase scroll-behavior font-bold tracking-widest cursor-pointer" +
                      (activeLink === link.id
                        ? " text-neutral-400"
                        : " text-black hover:text-neutral-400 ")
                    }
                  >
                    {link.name}
                  </Link>
                  {/*link.sub && (
                    <>
                      <ol className="space-y-2 text-xl pl-2 pt-2 list-disc list-inside">
                        {link.sub.map((sublink) => (
                          <li key={sublink.name}>
                            <Link
                              key={sublink.id}
                              href={`/${lang}/${link.id}/${sublink.id}`}
                              onClick={() => {
                                handleClick(sublink.id);
                              }}
                              className={
                                "uppercase scroll-behavior font-bold tracking-widest cursor-pointer" +
                                (activeLink === sublink.id
                                  ? " text-neutral-400"
                                  : " text-black hover:text-neutral-400 ")
                              }
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ol>
                    </>
                  )*/}
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
