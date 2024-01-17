import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

export default function Treatments() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="py-24 bg-slate-200" id="treatments">
      <div className="mx-auto px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2 "
            variants={scrollAnimation}
          >
            <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[680px]">
              <h1 className="uppercase text-4xl font-bold p-3 ">
                HIGH QUALITY FACIAL AESTHETIC DENTISTRY
              </h1>
              <p>
                {`"The key to a successful outcome is an understanding of the
                patient's face. The shape, size and color of the teeth should
                create an enhancement without being too overwhelming to result
                in a distraction."`}
              </p>
              <p className="-mt-4">- Dr Sam Saleh</p>
              <div>
                <button
                  type="submit"
                  className="rounded-[3px] bg-black px-7 py-1.5 text-sm font-semibold leading-7 text-white shadow-sm"
                >
                  WHAT TO EXPECT WHEN YOU VISIT
                </button>
              </div>
            </div>
            <div className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8">
              <motion.div className="" variants={scrollAnimation}>
                <Image
                  src={"/assets/home-tooth.jpg"}
                  alt="Tooth"
                  width={600}
                  height={0}
                />
              </motion.div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
