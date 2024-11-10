"use client";

import { useEffect, useState } from "react";
import { useDictionary } from "@/i18n/dictionary-provider";
import { Locale } from "@/i18n/i18n-config";
import Link from "next/link";
import Image from "next/image";

export default function Folder({ lang }: { lang: Locale }) {
  const folder = useDictionary().folder;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById("folder");

      if (targetDiv) {
        const rect = targetDiv.getBoundingClientRect();
        // Vérifie si on est en bas de la page ou dans la div cible
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="uppercase text-center text-white" id="folder">
      <div
        className={`bg-black p-3 bottom-0 lg:relative ${
          isSticky ? "fixed m-3 w-[calc(100vw-1.5rem)]" : "relative"
        }`}
      >
        <div className="sm:text-xl md:text-2xl text-md p-1 font-bold">
          <a
            target="_blank"
            className="focus:bg-black"
            href="https://www.doctena.lu/fr/cabinet/differdange/centre-dentaire-de-differdange-281260"
          >
            {folder.title}
          </a>
        </div>
      </div>
      <div className="bg-white pb-5 text-black">
        <Link
          href={`/${lang}`}
          className="flex justify-center text-3xl p-3 font-bold"
        >
          <Image
            src={"/assets/folder.jpg"}
            alt="folder"
            width={400}
            height={0}
            className="max-w-sm w-auto h-auto"
          />
        </Link>
        <a
          target="_blank"
          className="text-xs"
          href="https://www.google.com/maps/dir//Centre+dentaire+differdange+65A+Av.+de+la+Libert%C3%A9+4601+Differdange+Luxembourg/@49.5263651,5.8900633,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47eacb049c805e7b:0xee6cc48d7952f62e"
        >
          65A avenue de la Liberté, 4601 Differdange{" "}
        </a>
        <p className="pt-3 text-xs">
          © COPYRIGHT {new Date().getFullYear()} {folder.description}
        </p>
      </div>
    </div>
  );
}
