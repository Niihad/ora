import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import Link from "next/link";

interface Props {
  sens: string;
  params: Pair[];
}

interface Pair {
  value: string | any;
  show: string;
}

export default function Card({ sens, params }: Props) {
  const ScrollSens = (sens: string) => {
    return useMemo(() => getScrollAnimation(sens), [sens]);
  };

  const Left = (params: Pair[]) => {
    return (
      <>
        {params.length > 0 && (
          <div className="mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2 items-center">
              <ScrollAnimationWrapper>
                <motion.div
                  className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8"
                  variants={ScrollSens(params[1].show)}
                >
                  <Image
                    src={params[1].value}
                    alt={params[0].value}
                    width={600}
                    height={0}
                  />
                </motion.div>
              </ScrollAnimationWrapper>
              <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[800px]">
                <ScrollAnimationWrapper>
                  <motion.h1
                    className="uppercase text-3xl font-bold p-3"
                    variants={ScrollSens(params[0].show)}
                  >
                    {params[0].value}
                  </motion.h1>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                  <motion.div variants={ScrollSens(params[2].show)}>
                    {params[2].value}
                  </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                  <motion.div variants={ScrollSens(params[3].show)}>
                    {params[3].value}
                  </motion.div>
                </ScrollAnimationWrapper>
                {params.length > 4 && (
                  <ScrollAnimationWrapper>
                    <motion.div
                      variants={ScrollSens(params[4].show)}
                      className="mx-auto flex justify-center text-align uppercase p-3 rounded-[3px] bg-black mt-10 text-md font-semibold leading-7 text-white shadow-sm"
                    >
                      <Link href="https://fr.doctena.lu/praticien/Dr_Ludovic_Altermatt-235034">
                        {params[4].value}
                      </Link>
                    </motion.div>
                  </ScrollAnimationWrapper>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const Right = (params: Pair[]) => {
    return (
      <>
        {params.length > 0 && (
          <div className="mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2">
              <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[680px]">
                <ScrollAnimationWrapper>
                  <motion.h1
                    className="uppercase text-4xl font-bold p-3"
                    variants={ScrollSens(params[0].show)}
                  >
                    {params[0].value}
                  </motion.h1>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper>
                  <motion.p variants={ScrollSens(params[2].show)}>
                    {params[2].value}
                  </motion.p>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                  <motion.p variants={ScrollSens(params[3].show)}>
                    {params[3].value}
                  </motion.p>
                </ScrollAnimationWrapper>
                {params.length > 4 && (
                  <ScrollAnimationWrapper>
                    <motion.div
                      variants={ScrollSens(params[4].show)}
                      className="mx-auto flex justify-center text-align uppercase p-3 rounded-[3px] bg-black mt-10 text-md font-semibold leading-7 text-white shadow-sm"
                    >
                      <Link href="https://fr.doctena.lu/praticien/Dr_Ludovic_Altermatt-235034">
                        {params[4].value}
                      </Link>
                    </motion.div>
                  </ScrollAnimationWrapper>
                )}
              </div>
              <div className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8">
                <ScrollAnimationWrapper>
                  <motion.div variants={ScrollSens(params[1].show)}>
                    <Image
                      src={params[1].value}
                      alt={params[0].value}
                      width={600}
                      height={0}
                    />
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {sens === "left" ? Left(params) : Right(params)}
    </>
  );
}
