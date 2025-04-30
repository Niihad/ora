import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import Link from "next/link";

export default function Treatments({ page, lang }: any) {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);

  return (
    <div className="py-10 lg:py-24 bg-white" id="treatments">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2">
          <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[680px]">
            <ScrollAnimationWrapper>
              <motion.h1
                className="uppercase text-2xl sm:text-3xl font-bold p-3"
                variants={scrollAnimation}
              >
                {page.treatments.title}
              </motion.h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation} className="italic pb-3">
                {page.treatments.description}
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation} className="text-justify ">
                {page.treatments.more}
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.div
                variants={scrollAnimation}
                className="mx-auto flex justify-center text-align w-80 uppercase p-2 rounded-[3px] bg-black text-sm font-semibold leading-7 text-white shadow-sm lg:mt-8 mt-4"
              >
                <Link href={`/${lang}/treatments`}>
                  {page.treatments.more2}
                </Link>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8">
            <ScrollAnimationWrapper>
              <motion.div variants={scrollAnimation}>
                <Image
                  src={"/assets/treatments.jpg"}
                  alt="Tooth"
                  width={600}
                  height={0}
                  className="w-auto h-auto"
                />
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
