"use client";

import { projectsData } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  gitUrl,
  previewUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 last:mb-0  sm:mb-8"
    >
      <section className=" relative max-w-[40rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition even:pl-8 hover:bg-gray-200 group-even:even:pl-8 sm:h-[20rem] sm:max-w-[54rem] sm:pr-8">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 group-odd:mr-[18rem] group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 group-even:sm:ml-[26rem]">
          <h3 className=" text-2xl font-semibold">{title}</h3>
          <p className=" mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className=" mt-2 flex flex-wrap gap-2 ">
            {tags.map((tag, index) => (
              <li
                className=" rounded-full border border-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black/[0.7]"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className=" mt-4 flex gap-3 sm:mt-auto">
            <Link
              href={gitUrl}
              className=" rounded-full bg-black/[0.7] px-5 py-2 text-[.9rem] uppercase tracking-wider text-white"
            >
              View Code
            </Link>
            <Link
              href={previewUrl}
              className=" rounded-full bg-black/[0.7] px-5 py-2 text-[.9rem] uppercase tracking-wider text-white"
            >
              Preivew
            </Link>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className=" group-hover:scale[1.04] absolute -right-40 top-8 w-[28.25rem] translate-y-3 rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
             group-even:group-hover:rotate-2
             sm:-right-14
             group-even:sm:-left-14"
        />
      </section>
    </motion.div>
  );
};

export default Project;
