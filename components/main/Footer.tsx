import React from "react";

const Footer = () => {
  return (
    <div className=" top-0 z-50 mx-auto h-[75px] w-full bg-[#030001417] p-10 shadow-lg shadow-[#2a0e61]/50 backdrop-blur-md">
      <p className=" text-center text-white">
        &copy; {new Date().getFullYear()}, Hassen Ahmed
      </p>
    </div>
  );
};

export default Footer;
