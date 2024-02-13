"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Locations() {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);

  return (
    <div
      className="bg-gradient-to-b from-slate-100 to-white p-10 lg:py-14"
      id="location"
    >
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="uppercase text-4xl font-bold p-3 text-center justify-center "
        >
          Location
        </motion.h3>
      </ScrollAnimationWrapper>
      <section className="text-gray-600 body-font relative">
        <motion.div variants={scrollAnimation}>
          <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 rounded-lg sm:mr-10 flex items-end justify-start relative w-full ">
              <ScrollAnimationWrapper className="w-full h-full ">
                <motion.div
                  variants={scrollAnimation}
                  className="w-full h-full"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    className="inset-0 opacity-1 contrast-75 rounded-xl"
                    title="map"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Centre dentaire differdange+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>

            <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <div className="flex mb-4">
                <FaHome className="mr-2" size="24px" color="black" />
                <p>65A avenue de la Liberté, 4601 Differdange</p>
              </div>
              <div className="flex ">
                <FaPhone className="mr-2" size="20px" color="black" />
                <p>+352 27 76 17 09</p>
              </div>
              <div className="flex my-4">
                <MdOutlineAlternateEmail
                  className="mr-2"
                  size="24px"
                  color="black"
                />
                <p>contact@oradental.lu</p>
              </div>

              <p className="mb-4">Parking privé réservé aux patients</p>

              <p>Lundi 9h00 - 19h00</p>
              <p>Mardi 9h00 - 19h00</p>
              <p>Mercredi 9h00 - 18h00</p>
              <p>Jeudi 9h00 - 18h00</p>
              <p>Vendredi 9h00 - 19h00</p>
              <p>Samedi 9h00 - 14h00</p>

              <p className="relative mt-4">
                En cas d’urgence, nous téléphoner directement. Nous mettrons
                tout en œuvre pour vous recevoir et vous soulager le plus
                rapidement possible dans la journée.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
