import {
  Backend_skill,
  Frontend_skill,
  Design_skill,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SectionHeader";
import SectionHeader from "../sub/SectionHeader";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20"
      // style={{ transform: "scale(0.9" }}
    >
      <SectionHeader
        title="my skills"
        desc="Making apps with modern technologies"
        slogen="Never miss a day to learn"
      />

      <div className=" mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill={image.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill={image.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Design_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill={image.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-5">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill={image.skill_name}
            index={index}
          />
          // </div>
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
