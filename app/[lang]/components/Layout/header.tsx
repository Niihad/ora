"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import MobileNav from "../MobileNav";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n/i18n-config";
import { useDictionary } from "@/i18n/dictionary-provider";
import Image from "next/image";

export default function Header({ lang }: { lang: Locale }) {
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  const pathname = usePathname();
  const header = useDictionary().header;

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
          <div className="flex gap-1 text-sm p-1 lg:justify-end text-black  pr-4">
            <Link href="https://www.google.com/maps/dir//Centre+dentaire+differdange+65A+Av.+de+la+Libert%C3%A9+4601+Differdange+Luxembourg/@49.5263651,5.8900633,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47eacb049c805e7b:0xee6cc48d7952f62e">
              FR LU EN PO
            </Link>
          </div>
          <Link
            href="/"
            className="flex gap-2 text-4xl p-3 justify-center font-bold mb-6"
          >
            <Image
              src={"/assets/logo.jpg"}
              alt="Logo"
              width={600}
              height={0}
            />
          </Link>
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
