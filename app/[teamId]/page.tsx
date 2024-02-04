"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import Link from "next/link";
import { getTeams } from "../data/data";

export default function TeamPage({ params }: { params: { teamId: string } }) {
  const scrollAnimationTop = useMemo(() => getScrollAnimation("top"), []);
  const scrollAnimationBottom = useMemo(() => getScrollAnimation("bottom"), []);
  const scrollAnimationLeft = useMemo(() => getScrollAnimation("left"), []);
  const scrollAnimationRight = useMemo(() => getScrollAnimation("right"), []);

  const info: string[] = params.teamId.split("-");
  const profil = getTeams.find(
    (val) =>
      val.lastname.toLowerCase() === decodeURI(info[1]).toLowerCase() &&
      val.firstname.toLowerCase() === decodeURI(info[2]).toLowerCase()
  );

  return (
    <div className="mt-auto py-24">
      {profil === undefined ? (
        <div className="mt-auto">Oops! That page can’t be found.</div>
      ) : (
        <div className="mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2">
            <ScrollAnimationWrapper>
              <motion.div
                className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8"
                variants={scrollAnimationRight}
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
                  className="flex uppercase text-3xl font-bold p-3 justify-center"
                  variants={scrollAnimationTop}
                >
                  Dr. <p className="px-2">{profil.lastname}</p>
                  <p>{profil.firstname}</p>
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
                  conservateurs, orthodontie ou même les chirurgies. Cela permet
                  à nos patients d’avoir accès en un seul lieu à un plateau
                  technique complet.
                </motion.p>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper>
                <motion.div
                  variants={scrollAnimationBottom}
                  className="mx-auto flex justify-center text-align w-72 uppercase p-3 rounded-[3px] bg-black mt-10 text-md font-semibold leading-7 text-white shadow-sm"
                >
                  <Link href="">
                    Prendre rendez-vous
                  </Link>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
