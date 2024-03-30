"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill: string;
}

const SkillDataProvider = ({ src, width, height, skill, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      {/* <div
        className=" relative
       before:absolute
        before:-bottom-3 before:left-1/2 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-md before:bg-white before:px-3 before:py-2 before:text-white before:opacity-0 before:transition-all before:content-[attr(data-tip)] 
        after:absolute after:-bottom-3 after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-white after:border-l-transparent after:border-r-transparent after:border-t-transparent after:opacity-0 after:transition-all
        
         hover:before:opacity-100 hover:after:opacity-100"
        data-tip={skill}
      > */}
      <Image src={src} width={width} height={height} alt={skill} />
      {/* </div> */}
    </motion.div>
  );
};

export default SkillDataProvider;
