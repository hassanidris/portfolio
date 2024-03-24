"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Socials } from "@/constants";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mx-auto mt-40 flex w-full flex-row items-center justify-center px-5 md:max-w-[1440px] md:px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]"
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <h1 className="welcome-text text-[13px] text-white">
            Frontend Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex h-auto w-auto max-w-[700px] flex-col gap-6 text-3xl font-bold leading-[1.4] text-white md:text-6xl"
        >
          <span>
            Dedicated to
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              optimizing{" "}
            </span>
            projects and
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              eager{" "}
            </span>
            for professional growth.
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px] text-lg text-gray-400"
        >
          I&apos;m a Front End Developer with an eye on UI/UX. Check out my
          projects and skills.
        </motion.p>
        <div className=" mt-10 flex items-center justify-center gap-4">
          <motion.a
            href="#projects"
            variants={slideInFromLeft(1)}
            className=" button-primary cursor-pointer rounded-lg px-10 py-2 text-center text-sm text-white md:text-base"
          >
            My Projects!
          </motion.a>
          <motion.a
            href="/assets/CV_Hassen_Ahmed.pdf"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="button-primary max-w-[200px] cursor-pointer rounded-lg px-10 py-2 text-center text-sm text-white md:text-base"
          >
            Download CV
          </motion.a>
          <motion.div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <motion.a
                variants={slideInFromLeft(1)}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                key={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={30}
                  height={30}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className=" hidden h-full w-full items-center justify-center md:flex"
      >
        <Image
          src="/assets/my_photo_2.png"
          alt="work icons"
          height={550}
          width={550}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
