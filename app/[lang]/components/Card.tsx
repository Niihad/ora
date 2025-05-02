import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import Link from "next/link";

interface Props {
  sens: string;
  params: Pair[];
}

interface Pair {
  value: string | any;
  show: string;
  tel?: string;
  link?: string;
}

export default function Card({ sens, params }: Props) {
  const ScrollSens = (sens: string) => {
    return useMemo(() => getScrollAnimation(sens), [sens]);
  };

  const BuildImage = (param: Pair, alt: string) => {
    return (
      <ScrollAnimationWrapper>
        <motion.div
          className="mx-auto flex flex-col justify-center align-center text-center xl:max-w-2xl max-w-lg w-full"
          variants={ScrollSens(param.show)}
        >
          <Image
            src={param.value}
            alt={alt}
            width={600}
            height={0}
            priority={true}
            className="w-auto h-auto"
          />
        </motion.div>
      </ScrollAnimationWrapper>
    );
  };

  const BuildTitle = (param: Pair) => {
    return (
      <ScrollAnimationWrapper>
        <motion.h1
          className="uppercase text-2xl sm:text-3xl font-bold p-3"
          variants={ScrollSens(param.show)}
        >
          {param.value}
        </motion.h1>
      </ScrollAnimationWrapper>
    );
  };

  const BuildText = (params: Pair[]) => {
    let text: any = [];
    if (params.length > 0) {
      for (const pair of params) {
        if (!pair.tel && !pair.link) {
          text.push(
            <ScrollAnimationWrapper key={pair.value}>
              <motion.div
                key={pair.value}
                className="text-justify"
                variants={ScrollSens(pair.show)}
              >
                {pair.value}
              </motion.div>
            </ScrollAnimationWrapper>
          );
        } else if (pair.tel) {
          text.push(
            <ScrollAnimationWrapper key={pair.tel}>
              <motion.div
                variants={ScrollSens(pair.show)}
                className="mx-auto flex justify-center text-align uppercase p-3 rounded-[3px] bg-black mt-10 text-md font-semibold leading-7 text-white shadow-sm"
              >
                <a href={pair.tel}>{pair.value}</a>
              </motion.div>
            </ScrollAnimationWrapper>
          );
        } else if (pair.link) {
          text.push(
            <ScrollAnimationWrapper key={pair.link}>
              <motion.div
                variants={ScrollSens(pair.show)}
                className="mx-auto flex justify-center text-align w-80 uppercase p-2 rounded-[3px] bg-black text-sm font-semibold leading-7 text-white shadow-sm lg:mt-8 mt-4"
              >
                <Link href={pair.link}>{pair.value}</Link>
              </motion.div>
            </ScrollAnimationWrapper>
          );
        }
      }
    }
    return text;
  };

  const Left = (params: Pair[]) => {
    return (
      <>
        {params.length > 0 && (
          <div className="no-scrollbar overflow-y-auto mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2 items-center">
              {BuildImage(params[1], params[0].value)}
              <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[800px]">
                {BuildTitle(params[0])}
                {params.length > 2 && BuildText(params.slice(2))}
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
          <div className="no-scrollbar overflow-y-auto mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2">
              <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[680px]">
                {BuildTitle(params[0])}
                {params.length > 2 && BuildText(params.slice(2))}
              </div>
              <div className="flex flex-col justify-center">
                {BuildImage(params[1], params[0].value)}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return <>{sens === "left" ? Left(params) : Right(params)}</>;
}
