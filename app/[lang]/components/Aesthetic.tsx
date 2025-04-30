import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import Link from "next/link";

export default function Aesthetic({ page, lang }: any) {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);

  return (
    <div className="bg-neutral-100 py-14 lg:py-24" id="aesthetic">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 text-center lg:grid-cols-2 items-center ">
          <ScrollAnimationWrapper>
            <motion.div
              className="mx-auto flex flex-col justify-center xl:max-w-2xl max-w-lg w-full px-8"
              variants={scrollAnimation}
            >
              <Image
                src={"/assets/aesthetic/01.jpg"}
                alt="cabinet" 
                width={500}
                height={0}
                className="w-auto h-auto"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[800px] ">
            <ScrollAnimationWrapper>
              <motion.h1
                className="uppercase text-2xl sm:text-3xl font-bold p-3"
                variants={scrollAnimation}
              >
                {page.aesthetic.title}
              </motion.h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation} className="text-justify">
                {page.aesthetic.description}
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation} className="text-justify">{page.aesthetic.more}</motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation} className="text-justify">{page.aesthetic.more2}</motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div
                variants={scrollAnimation}
                className="mx-auto flex justify-center text-align w-80 uppercase p-2 rounded-[3px] bg-black text-sm font-semibold leading-7 text-white shadow-sm lg:mt-8 mt-4"
              >
                <Link href={`/${lang}/aesthetic`}>
                  {page.aesthetic.more3}
                </Link>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
