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
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-20 text-[40px] font-semibold text-transparent">
        My Projects
      </h1>
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
