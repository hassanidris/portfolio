import React from "react";

const Footer = () => {
  return (
    <div className=" top-0 z-50 mx-auto flex h-[75px] w-full justify-center bg-[#030001417] p-10 shadow-lg shadow-[#2a0e61]/50 backdrop-blur-md ">
      <div className="w-full md:max-w-[80rem]">
        <p className=" text-center text-white">
          &copy; {new Date().getFullYear()}, Hassen Ahmed
        </p>
      </div>
    </div>
  );
};

export default Footer;
