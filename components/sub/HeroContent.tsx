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

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full md:max-w-[1440px] z-[20] mx-auto"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px] text-white">
            Frontend Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl leading-[1.4] font-bold text-white max-w-[700px] w-auto h-auto"
        >
          <span>
            Dedicated to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              optimizing{" "}
            </span>
            projects and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              eager{" "}
            </span>
            for professional growth.
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Front End Developer with an eye on UI/UX. Check out my
          projects and skills.
        </motion.p>
        <div className=" flex gap-4">
          <motion.a
            href="#projects"
            variants={slideInFromLeft(1)}
            className="py-2 px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            My Projects!
          </motion.a>
          <motion.a
            href="/assets/CV_Hassen_Ahmed.pdf"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="py-2 px-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Download CV
          </motion.a>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className=" w-full h-full flex justify-center items-center"
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
