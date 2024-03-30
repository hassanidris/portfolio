"use client";
// import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    page: "about-me",
  },
  {
    label: "Skills",
    page: "skills",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  return (
    <header className=" fixed top-0 z-50 mx-auto w-full bg-[#030001417] px-10 py-1 shadow-lg shadow-[#2a0e61]/50 backdrop-blur-md lg:px-28">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link
              to="about-me"
              className="flex h-auto w-auto flex-row items-center"
            >
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={40}
                height={40}
                className="hover:animate-slowspin cursor-pointer text-gray-300"
              />

              <span className="ml-[10px] block text-xl font-bold text-gray-300">
                Hassen Ahmed
              </span>
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-300 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`mt-0 h-screen flex-1 items-center justify-self-center pb-3 text-center text-3xl font-semibold md:block md:h-auto md:pb-0 md:text-lg ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="flex h-full flex-col items-center justify-center space-y-8 font-sans md:flex-row md:space-x-4 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block cursor-pointer px-3 py-1 text-[#b49bff] hover:rounded-lg hover:bg-white hover:text-neutral-900 md:inline-block  md:text-white"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
