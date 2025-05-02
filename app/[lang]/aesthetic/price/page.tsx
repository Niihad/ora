"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/ScrollAnimationWrapper";
import { useDictionary } from "@/i18n/dictionary-provider";

export default function Price() {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const prices = useDictionary().aesthetic.price;

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  /*prices.categories.map((category: Category, index: any) =>
    console.log(category)
  )*/

  //prices.categories.map((category) => console.log(category))

  return (
    <>
      <div className="relative">
        <div className="h-[34vh] contrast-[.60] relative">
          <Image
            alt="London"
            src={"/assets/aesthetic/21.jpg"}
            quality={100}
            priority
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <ScrollAnimationWrapper>
          <div className="w-full absolute top-1/2 left-0 sm:w-[348px] uppercase text-white text-center">
            <motion.div className="text-6xl" variants={scrollAnimation}>
              {prices.title}
            </motion.div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <ScrollAnimationWrapper>
        <div className="w-full left-0 font-bold uppercase p-8">
          <motion.div
            className="text-md sm:text-xl md:text-2xl"
            variants={scrollAnimation}
          >
            {prices.info+" €"}
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
      <div className="w-full max-w-screen-2xl p-8 mx-auto space-y-4">
        {prices.categories.map((category) => {
          const isOpen = openCategories.includes(category.title);
          return (
            <ScrollAnimationWrapper key={category.title}>
              <motion.div
                key={category.title}
                className=""
                variants={scrollAnimation}
              >
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-left"
                >
                  <span>{category.title.toUpperCase()}</span>
                  <motion.svg
                    className="w-5 h-5 text-gray-600 transform transition-transform duration-100"
                    animate={{ rotate: !isOpen ? 180 : 0 }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {!isOpen && (
                    <motion.ul
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="grid grid-cols-1 gap-x-2 bg-white px-4 py-2 text-sm sm:text-md"
                    >
                      {category.item.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between py-1 border-b last:border-none"
                        >
                          <span>{item.title}</span>
                          <div className="flex text-right pl-4">
                            <span className="w-14">
                              {item.price} {item.price !== "" ? " €" : "-- €"}
                            </span>
                          </div>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollAnimationWrapper>
          );
        })}
      </div>
      <ScrollAnimationWrapper>
        <div className="w-full left-0 italic text-sm p-8 pt-0">
          <motion.div className="" variants={scrollAnimation}>
            {prices.info2}
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
    </>
  );
}
