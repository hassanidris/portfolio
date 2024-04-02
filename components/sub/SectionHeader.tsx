"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Bad_Script } from "next/font/google";

interface Props {
  title: string;
  desc: string;
  slogen?: string;
}

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const SectionHeader = ({ title, desc, slogen }: Props) => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-5">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box border border-[#7042f88b] px-[8px] py-[8px] opacity-[0.9]"
      >
        <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
        <h1 className="Welcome-text text-[13px]">{title}</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-center text-[30px] font-bold text-white"
      >
        {desc}
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className={`${badScript.className} mb-12 text-center text-[22px] text-gray-200`}
      >
        {slogen}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
