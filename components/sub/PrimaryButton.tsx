import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

interface Props {
  title: string;
  herf: string;
  target: string;
}

const PrimaryButton = ({ title, herf, target }: Props) => {
  return (
    <motion.a
      href={herf}
      target={target}
      variants={slideInFromLeft(1)}
      className=" button-primary cursor-pointer rounded-lg px-6 py-2 text-center text-sm text-white sm:px-10 md:text-base"
    >
      {title}
    </motion.a>
  );
};

export default PrimaryButton;
