"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";
import { getTeams } from "../data/data";

export default function Team({ page }: any) {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);

  const getUrlName = (name: string) => {
    const res = name.split(" ");
    return `/en/${res[0]}-${res[1]}-${res[2]}`;
  };

  return (
    <div className="bg-neutral-100 w-full py-10 lg:py-24 " id="team">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="uppercase text-4xl font-bold p-3"
            >
              {page.teams.title}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="italic leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto mt-2 text-center pb-10"
            >
              {page.teams.description}
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-36">
            {getTeams.map((profil) => (
              <ScrollAnimationWrapper
                className="flex justify-center"
                key={profil.name}
              >
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col justify-centerpy-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {profil.speciality !== "Assistante dentaire" ? (
                    <Link
                      className="w-60 mx-auto"
                      href={getUrlName(profil.name).toLowerCase()}
                    >
                      <div className="h-80 relative">
                        <Image
                          src={profil.image}
                          alt="Free Plan"
                          width={250}
                          height={0}
                          className=""
                        />
                      </div>
                      <div className="relative">
                        <div className="flex font-primary uppercase text-palette-primary text-lg pt-4 px-4 font-semibold justify-center">
                          {profil.name}
                        </div>
                        <div>{profil.speciality}</div>
                      </div>
                    </Link>
                  ) : (
                    <div className="w-60 mx-auto">
                      <div className="h-80 relative">
                        <Image
                          src={profil.image}
                          alt="Free Plan"
                          width={250}
                          height={0}
                          className=""
                        />
                      </div>
                      <div className="relative">
                        <div className="flex font-primary uppercase text-palette-primary text-lg pt-4 px-4 font-semibold justify-center">
                          {profil.name}
                        </div>
                        <div>{profil.speciality}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
