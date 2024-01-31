"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import Link from "next/link";

export default function Teams() {
  const scrollAnimation = useMemo(() => getScrollAnimation("top"), []);
  const scrollAnimationLeft = useMemo(() => getScrollAnimation("left"), []);

  return (
    <div className="bg-gray-300 py-24">
      <div className="mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2">
          <ScrollAnimationWrapper>
            <motion.div
              className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8"
              variants={scrollAnimation}
            >
              <Image
                src={"/assets/profil1.jpg"}
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
                Ora dental practice
              </motion.h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimationLeft}>
                Le cabinet dentaire ORA vous accueille à Differdange pour vous
                proposer des soins dentaires de qualité. Notre but est de
                s’adapter à vos besoins et de répondre à vos attentes.
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimationLeft}>
                Notre équipe pluri-disciplinaire est composée de médecins
                dentistes de différentes spécialités. Tous les soins se font
                directement au cabinet : visites de contrôle, soins
                conservateurs, orthodontie ou même les chirurgies. Cela permet à
                nos patients d’avoir accès en un seul lieu à un plateau
                technique complet.
              </motion.p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
