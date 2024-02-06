"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import MobileNav from "../MobileNav";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { getNavigation } from "../../data/data";
import { usePathname } from "next/navigation";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 135);
    });
  }, []);

  const NavBar = () => {
    return (
      <>
        {getNavigation.map((nav) =>
          pathname === "/" ? (
            <LinkScroll
              key={nav.name}
              activeClass="active"
              to={nav.name}
              spy={true}
              smooth={true}
              duration={1000}
              offset={nav.offset}
              onSetActive={() => {
                setActiveLink(nav.name);
              }}
              className={
                "xl:text-2xl md:text-xl sm:block cursor-pointer" +
                (activeLink === nav.name
                  ? " text-emerald-600"
                  : " text-black hover:text-emerald-500 ")
              }
            >
              {nav.name}
            </LinkScroll>
          ) : (
            <Link
              key={nav.name}
              href = {`/#${nav.name}`}
              onClick={() => {
                setActiveLink(nav.name);
              }}
              className={
                "xl:text-2xl md:text-xl sm:block cursor-pointer" +
                (activeLink === nav.name
                  ? " text-emerald-600"
                  : " text-black hover:text-emerald-500 ")
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
    <header className="bg-slate-50" id="header">
      <div className="header uppercase hidden sm:block">
        <div className="bg-black text-white p-2 px-6 ">
          <div className="flex gap-1 text-sm p-1 lg:justify-end justify-center text-zinc-400  pr-4">
            <p>locations:</p>
            <Link href="">Differdange</Link>
            <p>+1 310-273-0848</p>
          </div>
          <h1 className="flex gap-2 text-4xl  p-3 justify-center font-bold">
            Dr. Ajdarpasic Mathilde
          </h1>
          <div className="flex gap-4 pb-2 text-xs justify-center">
            <Link href="">Differdange</Link>
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
      <MobileNav/>
    </header>
  );
}
