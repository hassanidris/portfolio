import React from "react";

const Footer = () => {
  return (
    <div className=" top-0 z-50 mx-auto flex h-[50px] w-full items-center justify-center border-t border-t-[#b49bff]/50 bg-[#030001417] p-8 shadow-lg shadow-[#2a0e61]/50 backdrop-blur-md ">
      <div className="w-full md:max-w-[80rem]">
        <p className=" text-center font-[400] text-white">
          &copy; {new Date().getFullYear()},{" "}
          <span className=" font-[300]">Hassen Ahmed</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
