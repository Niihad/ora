"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Team from "./components/Team";
import Contact from "./components/Contact";
import getScrollAnimation from "./utils/getScrollAnimation";
import ScrollAnimationWrapper from "./components/ScrollAnimationWrapper";
import { useDictionary } from "@/i18n/dictionary-provider";
import { Locale } from "@/i18n/i18n-config";
import Aesthetic from "./components/Aesthetic";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);
  const dico = useDictionary();
  const page = dico.page;

  return (
    <>
      <div className="relative pt-10 sm:pt-0">
        <div className="h-[77vh] contrast-[.60] relative">
          <Image
            alt="London"
            src={"/assets/luxembourg.jpg"}
            quality={100}
            priority
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <ScrollAnimationWrapper>
          <motion.div className="" variants={scrollAnimation}>
            <div className="bg-zinc-950/75 w-full absolute bottom-0 left-0 p-12 sm:w-[348px] uppercase text-white text-center">
              <p className="text-3xl mb-4">{page.title}</p>
              <div className="p-2 border-2 text-md ">
                <motion.div className="p-3" variants={scrollAnimation}>
                  {}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <About page={page} />
      <Treatments page={page} lang={lang}/>
      <Aesthetic page={page} lang={lang}/>
      <Team dico={dico} lang={lang}/>
      <Contact page={page} />
    </>
  );
}
