import React from "react";
import { projectsData } from "@/constants";
import Project from "../sub/Project";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-20 "
      id="projects"
    >
      <div className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]">
        <SparklesIcon className="mr-[10px] h-5 w-5 text-[#b49bff]" />
        <h1 className="Welcome-text text-[13px]">My Projects</h1>
      </div>
      <div className="mb-[40px] mt-[30px] text-center text-[30px] font-medium text-white">
        Transforming Ideas into Exceptional Web Experiences
      </div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
