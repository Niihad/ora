"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

export default function Team() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-8"
      id="team"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="uppercase text-4xl font-bold p-3"
            >
              Our team
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center pb-14"
            >
              {`Let's choose the package that is best for you and explore it
              happily and cheerfully.`} 
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-36">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Link className="w-60 mx-auto " href="">
                  <div className="h-60  relative">
                    <Image
                      src="/assets/profil1.jpg"
                      alt="Free Plan"
                      width={250}
                      height={0}
                      className="rounded-full "
                    />
                  </div>
                  <div className="relative">
                    <div className="font-primary text-palette-primary text-lg pt-4 px-4 font-semibold">
                      Dr. Ajdarpasic Mathilde
                    </div>
                    <div>Médecin dentiste</div>
                  </div>
                </Link>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Link className="w-60 mx-auto " href="">
                  <div className="h-60  relative">
                    <Image
                      src="/assets/profil1.jpg"
                      alt="Free Plan"
                      width={250}
                      height={0}
                      className="rounded-full "
                    />
                  </div>
                  <div className="relative">
                    <div className="font-primary text-palette-primary text-lg pt-4 px-4 font-semibold">
                      Dr. Ajdarpasic Mathilde
                    </div>
                    <div>Médecin dentiste</div>
                  </div>
                </Link>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Link className="w-60 mx-auto " href="">
                  <div className="h-60  relative">
                    <Image
                      src="/assets/profil1.jpg"
                      alt="Free Plan"
                      width={250}
                      height={0}
                      className="rounded-full "
                    />
                  </div>
                  <div className="relative">
                    <div className="font-primary text-palette-primary text-lg pt-4 px-4 font-semibold">
                      Dr. Ajdarpasic Mathilde
                    </div>
                    <div>Médecin dentiste</div>
                  </div>
                </Link>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Link className="w-60 mx-auto " href="">
                  <div className="h-60  relative">
                    <Image
                      src="/assets/profil1.jpg"
                      alt="Free Plan"
                      width={250}
                      height={0}
                      className="rounded-full "
                    />
                  </div>
                  <div className="relative">
                    <div className="font-primary text-palette-primary text-lg pt-4 px-4 font-semibold">
                      Dr. Ajdarpasic Mathilde
                    </div>
                    <div>Médecin dentiste</div>
                  </div>
                </Link>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Link className="w-60 mx-auto " href="">
                  <div className="h-60  relative">
                    <Image
                      src="/assets/profil1.jpg"
                      alt="Free Plan"
                      width={250}
                      height={0}
                      className="rounded-full "
                    />
                  </div>
                  <div className="relative">
                    <div className="font-primary text-palette-primary text-lg pt-4 px-4 font-semibold">
                      Dr. Ajdarpasic Mathilde
                    </div>
                    <div>Médecin dentiste</div>
                  </div>
                </Link>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Link className="w-60 mx-auto " href="">
                  <div className="h-60  relative">
                    <Image
                      src="/assets/profil1.jpg"
                      alt="Free Plan"
                      width={250}
                      height={0}
                      className="rounded-full "
                    />
                  </div>
                  <div className="relative">
                    <div className="font-primary text-palette-primary text-lg pt-4 px-4 font-semibold">
                      Dr. Ajdarpasic Mathilde
                    </div>
                    <div>Médecin dentiste</div>
                  </div>
                </Link>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
