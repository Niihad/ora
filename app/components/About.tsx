import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

export default function About() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-slate-50 py-24" id="about">
      <div className="mx-auto px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-cols-1 gap-x-24 gap-y-16 text-center lg:grid-cols-2"
            variants={scrollAnimation}
          >
            <div className="mx-auto flex flex-col gap-y-4 justify-center xl:max-w-2xl max-w-lg w-full px-8">
              <motion.div className="" variants={scrollAnimation}>
                <Image
                  src={"/assets/cabinet.jpg"}
                  alt="Profil"
                  width={600}
                  height={0}
                />
              </motion.div>
            </div>
            <div className="mx-auto flex flex-col gap-y-4 justify-center max-w-[800px]">
              <motion.h1
                className="uppercase text-3xl font-bold p-3"
                variants={scrollAnimation}
              >
                Ora dental practice
              </motion.h1>
              <p>
                Dr. Sam Saleh is a world-renowned cosmetic dentist who is
                licensed and practices in both Southern California and London.
                He aims to provide exceptional dental work using state of the
                art technology to bring out the best in every smile. Dr. Saleh
                was educated at the prestigious King’s College of London where
                he gained an acute eye for cosmetic dentistry. He is a pioneer
                in No-Prep Veneers and Conservative facial aesthetic dentistry.
                Dr. Saleh is former faculty at UCLA School of Dentistry and a
                member of ADA and LADS. He was awarded one of America’s Best
                Dentists with recognition in leadership of aesthetic dentistry.
              </p>
              <p>
                Dr Saleh has been featured in Allure, LA times , Hollywood
                Reporter, Huffington Post, Wall Street Journal among other
                national and international publications. He has made appearances
                on CNN, The Doctors, Extra, KCal9 News and Tyra Banks Show.
              </p>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
