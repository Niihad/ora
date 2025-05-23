"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Locations({ page }: any) {
  const scrollAnimation = useMemo(() => getScrollAnimation("bottom"), []);

  return (
    <div className="bg-neutral-100 p-10 lg:py-14" id="contact">
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="uppercase text-2xl sm:text-3xl font-bold p-3 text-center justify-center "
        >
          {page.contact.title}
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
                <a
                  target="_blank"
                  href="https://www.google.com/maps/dir//Centre+dentaire+differdange+65A+Av.+de+la+Libert%C3%A9+4601+Differdange+Luxembourg/@49.5263651,5.8900633,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x47eacb049c805e7b:0xee6cc48d7952f62e"
                >
                  65A avenue de la Liberté, 4601 Differdange
                </a>
              </div>
              <div className="flex">
                <FaPhone className="mr-2" size="20px" color="black" />
                <a href={"tel:+352 27 76 17 09"}>+352 27 76 17 09</a>
              </div>
              <div className="flex my-4">
                <MdOutlineAlternateEmail
                  className="mr-2"
                  size="24px"
                  color="black"
                />
                <a href={"mailto:contact@oradental.lu"}>contact@oradental.lu</a>
              </div>

              <p className="mb-4">{page.contact.description}</p>
              {page.contact.time.map((value: any) => (
                <p key={value.day}>{value.day}</p>
              ))}
            </div>
          </div>
        </motion.div>
        <p className="relative mt-4 md:text-center justify-center text-justify">
          {page.contact.more}
        </p>
      </section>
    </div>
  );
}
