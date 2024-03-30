import {
  Backend_skill,
  Frontend_skill,
  Design_skill,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20"
      // style={{ transform: "scale(0.9" }}
    >
      <SkillText />
      <div className=" mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Frontend_skill.map((image, index) => (
          <div
            className=" relative z-10
         before:absolute
          before:-top-3 before:left-1/2 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-md before:bg-white before:px-3 before:py-2 before:text-black before:opacity-0 before:transition-all before:content-[attr(data-tip)] 
          after:absolute after:-top-3 after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-white after:opacity-0 after:transition-all
          
           hover:before:opacity-100 hover:after:opacity-100"
            data-tip={image.skill_name}
          >
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              skill={image.skill_name}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Backend_skill.map((image, index) => (
          <div
            className=" relative z-10
       before:absolute
        before:-top-3 before:left-1/2 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-md before:bg-white before:px-3 before:py-2 before:text-black before:opacity-0 before:transition-all before:content-[attr(data-tip)] 
        after:absolute after:-top-3 after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-white after:opacity-0 after:transition-all
        
         hover:before:opacity-100 hover:after:opacity-100"
            data-tip={image.skill_name}
          >
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              skill={image.skill_name}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Design_skill.map((image, index) => (
          <div
            className=" relative z-10
       before:absolute
        before:-top-3 before:left-1/2 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-md before:bg-white before:px-3 before:py-2 before:text-black before:opacity-0 before:transition-all before:content-[attr(data-tip)] 
        after:absolute after:-top-3 after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-white after:opacity-0 after:transition-all
        
         hover:before:opacity-100 hover:after:opacity-100"
            data-tip={image.skill_name}
          >
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              skill={image.skill_name}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Other_skill.map((image, index) => (
          <div
            className=" relative z-10
       before:absolute
        before:-top-3 before:left-1/2 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:rounded-md before:bg-white before:px-3 before:py-2 before:text-black before:opacity-0 before:transition-all before:content-[attr(data-tip)] 
        after:absolute after:-top-3 after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-transparent after:border-l-transparent after:border-r-transparent after:border-t-white after:opacity-0 after:transition-all
        
         hover:before:opacity-100 hover:after:opacity-100"
            data-tip={image.skill_name}
          >
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              skill={image.skill_name}
              index={index}
            />
          </div>
        ))}
      </div>
      <div className="absolute h-full w-full">
        <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover bg-center opacity-15">
          <video
            className="h-auto w-full"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/assets/skills-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
