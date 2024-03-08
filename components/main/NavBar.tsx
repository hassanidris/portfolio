import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className=" w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#030001417] backdrop-blur-md z-50 p-10 mx-auto">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin text-white"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Hassen Ahmed
          </span>
        </a>
        <div className="h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] gap-16 px-[20px] py-[10px] rounded-full text-gray-200">
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
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
