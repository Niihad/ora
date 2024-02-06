"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";

export default function Treatments() {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);

  return (
    <div className="bg-slate-200 py-14 py-24">
      <div className="mx-auto px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2">
          <ScrollAnimationWrapper>
            <motion.div
              className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8"
              variants={scrollAnimation}
            >
              <Image
                src={"/assets/cabinet.jpg"}
                alt="Profil"
                width={600}
                height={0}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[800px]">
            <ScrollAnimationWrapper>
              <motion.h1
                className="uppercase text-3xl font-bold p-3"
                variants={scrollAnimation}
              >
                Dentisterie esthétique
              </motion.h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation}>
                Vous souhaitez corriger des imperfections liées à votre sourire
                ?
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation}>
                La dentisterie esthétique consiste à embellir et améliorer
                l’apparence de vos dents. Elle comprend différents traitements
                comme le blanchiment, les facettes ou encore les couronnes pour
                améliorer la forme, la couleur ou l’alignement de vos dents,
                afin de rendre votre sourire plus esthétique et plus harmonieux.
              </motion.p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
