import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

export default function About({ page }: any) {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);

  return (
    <div className="bg-neutral-100 py-14 lg:py-24" id="about">
      <div className="mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 text-center lg:grid-cols-2 items-center ">
          <ScrollAnimationWrapper>
            <motion.div
              className="mx-auto flex flex-col justify-center xl:max-w-2xl max-w-lg w-full px-8"
              variants={scrollAnimation}
            >
              <Image
                src={"/assets/cabinet.png"}
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
                className="uppercase text-3xl font-bold p-3 "
                variants={scrollAnimation}
              >
                {page.about.title}
              </motion.h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation} className="text-justify">
                {page.about.description}
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation} className="text-justify">{page.about.more}</motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation} className="text-justify">{page.about.more2}</motion.p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
