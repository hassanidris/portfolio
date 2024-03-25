import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className=" mx-auto flex h-full w-full max-w-[80rem] flex-col items-center justify-center md:relative md:h-screen"
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
