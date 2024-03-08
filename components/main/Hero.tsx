import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className=" relative flex flex-col justify-center items-center h-screen w-full mx-auto"
      id="about-me"
    >
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/assets/blackhole.webm" type="video/webm" />
      </video> */}
      <HeroContent />
    </div>
  );
};

export default Hero;
