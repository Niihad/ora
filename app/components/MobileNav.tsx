"use client";

import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";

const headerNavLinks = [
  { offset: -60, title: "about" },
  { offset: -40, title: "treatments" },
  { offset: -34, title: "team" },
  { offset: -34, title: "locations" },
];

export default function MobileNav() {
  const [navShow, setNavShow] = useState(false);
  const [activeLink, setActiveLink] = useState("");

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
      <div className="fixed w-full z-20 bg-slate-50 shadow-md grid grid-cols-6 flex py-1 sm:hidden">
        <div className="p-2 col-span-5">
          <h1 className="text-xl font-bold">Dr. Ajdarpasic Mathilde</h1>
          <div className="text-xs ml-20">
            <Link href="">Differdange</Link>
          </div>
        </div>
        <div className="flex justify-end">
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
        className={`fixed z-30 left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            className="mr-8 mt-11 h-8 w-8"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <LinkScroll
                activeClass="active"
                to={link.title}
                spy={true}
                smooth={true}
                duration={1000}
                offset={link.offset}
                onSetActive={() => {
                  setActiveLink(link.title);
                }}
                className="text-2xl uppercase font-bold tracking-widest text-gray-900 dark:text-gray-100 hover:text-zinc-400 cursor-pointer"
                onClick={onToggleNav}
              >
                {link.title}
              </LinkScroll>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
