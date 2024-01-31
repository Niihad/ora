"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";

export default function Locations() {
  const scrollAnimation = useMemo(() => getScrollAnimation("top"), []);

  return (
    <div
      className="bg-gradient-to-b from-slate-100 to-white p-10"
      id="locations"
    >
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="uppercase text-4xl font-bold p-3 text-center justify-center "
        >
          Location
        </motion.h3>
      </ScrollAnimationWrapper>
      <section className="text-gray-600 body-font relative">
        <motion.div variants={scrollAnimation}>
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 rounded-lg sm:mr-10 flex items-end justify-start relative w-full ">
              <ScrollAnimationWrapper className="w-full h-full ">
                <motion.div
                  variants={scrollAnimation}
                  className="w-full h-full"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    className="inset-0 opacity-1 contrast-75 rounded-xl"
                    title="map"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Address
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                54 avenue de la paix, 54510 Tomblaine
              </p>
              <div className="relative mb-4">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
              <p className="relative mb-4">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
