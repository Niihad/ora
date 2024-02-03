import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

export default function About() {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);

  return (
    <div className="bg-slate-50 py-14 lg:py-24" id="about">
      <div className="mx-auto px-6 lg:px-8">
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
                Ora dental practice
              </motion.h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation}>
                Le cabinet dentaire ORA vous accueille à Differdange pour vous
                proposer des soins dentaires de qualité. Notre but est de
                s’adapter à vos besoins et de répondre à vos attentes.
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p variants={scrollAnimation}>
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
  );
}
