import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

export default function Treatments() {
  const scrollAnimation = useMemo(() => getScrollAnimation("top"), []);

  return (
    <div className="py-24 bg-slate-200" id="treatments">
      <div className="mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2">
          <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[680px]">
            <ScrollAnimationWrapper>
              <motion.h1
                className="uppercase text-4xl font-bold p-3 "
                variants={scrollAnimation}
              >
                HIGH QUALITY FACIAL AESTHETIC DENTISTRY
              </motion.h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation}>
                {`"The key to a successful outcome is an understanding of the
                patient's face. The shape, size and color of the teeth should
                create an enhancement without being too overwhelming to result
                in a distraction."`}
              </motion.p>
              <motion.p variants={scrollAnimation} className="mb-4">
                - Dr Sam Saleh
              </motion.p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <motion.div variants={scrollAnimation}>
                <button
                  type="submit"
                  className="rounded-[3px] bg-black px-7 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm"
                >
                  WHAT TO EXPECT WHEN YOU VISIT
                </button>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8">
            <ScrollAnimationWrapper>
              <motion.div className="" variants={scrollAnimation}>
                <Image
                  src={"/assets/home-tooth.jpg"}
                  alt="Tooth"
                  width={600}
                  height={0}
                />
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
