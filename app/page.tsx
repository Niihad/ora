"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Team from "./components/Team";
import Locations from "./components/Locations";
import getScrollAnimation from "./utils/getScrollAnimation";
import ScrollAnimationWrapper from "./components/Layout/ScrollAnimationWrapper";

export default function Home() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div>
      <div className="relative">
        <div className="relative overflow-hidden h-[77vh] contrast-[.60]">
          <Image
            alt="London"
            src={"/assets/london.jpg"}
            quality={100}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/*<div className={"bg-zinc-950/50 absolute w-full bottom-0 left-0 h-[78.5vh]"}></div>*/}
        <ScrollAnimationWrapper>
          <motion.div className="" variants={scrollAnimation}>
            <div className="bg-zinc-950/75 absolute bottom-0 left-0 p-12 uppercase text-white">
              <p className="text-3xl mb-4">The experience</p>
              <div className="p-2 border-2 text-center text-md cursor-pointer">
                <motion.div className="" variants={scrollAnimation}>
                  Watch the video
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <About />
      <Treatments />
      <Team />
      <Locations />
    </div>
  );
}
