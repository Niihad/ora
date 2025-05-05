"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useDictionary } from "@/i18n/dictionary-provider";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import Link from "next/link";
import Image from "next/image";

export default function Aesthetic() {
  const ScrollSens = (sens: string) => {
    return useMemo(() => getScrollAnimation(sens), [sens]);
  };
  const aesthetic = useDictionary().aesthetic;

  const buildSelect = (
    name: string,
    link: string,
    sens: string,
    img: string,
    color: string
  ) => {
    return (
      <div
        className="mx-auto flex flex-col gap-y-4 justify-center max-w-[680px]"
        key={name + link + sens}
      >
        <ScrollAnimationWrapper>
          <motion.div variants={ScrollSens(sens)}>
            <Link href={`/aesthetic/${link}`}>
              <div className="peer">
                <div
                  className={`${color} shadow-lg w-full transform duration-500 hover:translate-x-5 hover:-translate-y-5 cursor-pointer`}
                >
                  <p className="uppercase text-xl sm:text-2xl font-bold p-1 right-1 absolute text-white">
                    {name}
                  </p>
                  <Image
                    src={img}
                    alt={name}
                    width={400}
                    height={0}
                    className="shadow-lg transform duration-500 hover:-translate-x-10 hover:translate-y-10 "
                  />
                </div>
              </div>
              <p className="uppercase text-xl sm:text-2xl font-bold pt-3 transition-opacity duration-300 peer-hover:opacity-0">
                {name}
              </p>
            </Link>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    );
  };

  return (
    <div className="" id="aesthetic">
      <div className="py-10 lg:py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="no-scrollbar overflow-y-auto mx-auto px-4">
            <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2 items-center">
              <ScrollAnimationWrapper>
                <motion.div
                  variants={ScrollSens("left")}
                  className="mx-auto flex flex-col justify-center align-center text-center xl:max-w-2xl max-w-lg w-full px-4"
                >
                  <Image
                    src={"/assets/aesthetic/02.jpeg"}
                    alt="Tooth"
                    width={600}
                    height={0}
                    className="w-auto h-auto"
                  />
                </motion.div>
              </ScrollAnimationWrapper>

              <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[800px]">
                <ScrollAnimationWrapper>
                  <motion.p
                    variants={ScrollSens("top")}
                    className="text-justify"
                  >
                    {aesthetic.title}
                  </motion.p>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                  <motion.p
                    variants={ScrollSens("top")}
                    className="text-justify"
                  >
                    {aesthetic.description}
                  </motion.p>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                  <motion.p
                    variants={ScrollSens("right")}
                    className="font-bold text-justify "
                  >
                    {aesthetic.more}
                  </motion.p>
                </ScrollAnimationWrapper>
                <ol className="pl-2 list-disc list-inside">
                  {aesthetic.more2.map((reason: any) => (
                    <ScrollAnimationWrapper key={reason}>
                      <motion.li
                        variants={ScrollSens("right")}
                        className="text-justify "
                      >
                        {reason}
                      </motion.li>
                    </ScrollAnimationWrapper>
                  ))}
                </ol>
                <ScrollAnimationWrapper>
                  <motion.p
                    variants={ScrollSens("bottom")}
                    className="text-justify "
                  >
                    {aesthetic.more3}
                  </motion.p>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                  <motion.div
                    variants={ScrollSens("bottom")}
                    className="mx-auto flex justify-center text-align w-80 uppercase p-2 rounded-[3px] bg-black text-sm font-semibold leading-7 text-white shadow-sm lg:mt-8 mt-4"
                  >
                    <Link
                      target="_blank"
                      href={
                        "https://www.doctena.lu/fr/cabinet/differdange/centre-dentaire-de-differdange-281260"
                      }
                    >
                      {aesthetic.doctena}
                    </Link>
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 mx-auto p-20 lg:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2">
          {aesthetic.categories
            .filter((category) => category.link !== "price")
            .map((category, index) =>
              buildSelect(
                category.title,
                category.link,
                index % 2 ? "left" : "right",
                category.image,
                index % 2 ? "bg-blue-200" : "bg-red-200"
              )
            )}
        </div>
      </div>
    </div>
  );
}
