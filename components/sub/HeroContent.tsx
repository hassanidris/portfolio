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
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-5 text-center sm:items-start sm:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]"
        >
          <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
          <h1 className="welcome-text flex items-center gap-2 text-[13px] text-white">
            Hi, I&apos;m Hassen Ahmed
            <span className="wave text-7xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 256 256"
                color="var(--orange)"
                height=".4em"
                width=".4em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M213.27,104l-18-31.18a20,20,0,0,0-34.64,20l-28-48.5A20,20,0,0,0,98,64.31L90,50.46a20,20,0,0,0-34.64,20l12,20.83-1.17,1A20,20,0,0,0,36.7,118.17L74.7,184a80,80,0,0,0,138.57-80Zm-57.59,60.64.17-.1.14.24Z"
                  opacity="0.2"
                ></path>
                <path d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z"></path>
              </svg>
            </span>
            {/* Frontend Developer Portfolio */}
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex h-auto w-auto max-w-[700px] flex-col gap-6 text-4xl font-bold leading-[1.4] text-white md:text-6xl"
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
        <div className=" mt-10 flex items-center justify-center gap-4 sm:justify-start">
          <motion.a
            href="#projects"
            variants={slideInFromLeft(1)}
            className=" button-primary cursor-pointer rounded-lg px-6 py-2 text-center text-sm text-white sm:px-10 md:text-base"
          >
            My Projects!
          </motion.a>
          <motion.a
            href="/assets/CV_Hassen_Ahmed.pdf"
            target="_blank"
            variants={slideInFromLeft(1)}
            className="button-primary max-w-[200px] cursor-pointer rounded-lg px-6 py-2 text-center text-sm text-white sm:px-10 md:text-base"
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
