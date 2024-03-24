import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className=" fixed top-0 z-50 mx-auto h-[65px] w-full bg-[#030001417] p-10 shadow-lg shadow-[#2a0e61]/50 backdrop-blur-md">
      <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
        <a
          href="#about-me"
          className="flex h-auto w-auto flex-row items-center"
        >
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="hover:animate-slowspin cursor-pointer text-white"
          />

          <span className="ml-[10px] hidden font-bold text-gray-300 md:block">
            Hassen Ahmed
          </span>
        </a>
        <div className="flex h-full flex-row items-center justify-between md:mr-20">
          <div className="flex h-auto w-full items-center justify-between gap-6 rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200 md:gap-16">
            <a href="#about-me" className="cursor-pointe hover:underline">
              Home
            </a>
            <a href="#skills" className="cursor-pointer hover:underline">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:underline">
              Projects
            </a>
            {/* <a href="#about-me" className="cursor-pointer hover:underline">
              About
            </a> */}
            <a href="#contact" className="cursor-pointer hover:underline">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
