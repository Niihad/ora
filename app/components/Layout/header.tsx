"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import MobileNav from "../MobileNav";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 135);
    });
  }, []);

  return (
    <header className="">
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
        <nav
          className={
            scrollActive
              ? "fixed w-full z-30 bg-slate-50 transition-all top-0 shadow-md pt-0"
              : ""
          }
        >
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-60}
            onSetActive={() => {
              setActiveLink("about");
            }}
            className={"xl:text-2xl md:text-xl sm:block cursor-pointer" +
            (activeLink === "about"
              ? " text-emerald-600"
              : " text-black hover:text-emerald-500 ")}
          >
            about
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="treatments"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            onSetActive={() => {
              setActiveLink("treatments");
            }}
            className={"xl:text-2xl md:text-xl sm:block cursor-pointer" +
            (activeLink === "treatments"
              ? " text-emerald-600"
              : " text-black hover:text-emerald-500 ")}
          >
            treatments
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="team"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            onSetActive={() => {
              setActiveLink("team");
            }}
            className={"xl:text-2xl md:text-xl sm:block cursor-pointer" +
            (activeLink === "team"
              ? " text-emerald-600"
              : " text-black hover:text-emerald-500 ")}
          >
            team
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="locations"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("locations");
            }}
            className={"xl:text-2xl md:text-xl sm:block cursor-pointer" +
            (activeLink === "locations"
              ? " text-emerald-600"
              : " text-black hover:text-emerald-500 ")}
          >
            locations
          </LinkScroll>
        </nav>
      </div>
      <MobileNav />
    </header>
  );
}
