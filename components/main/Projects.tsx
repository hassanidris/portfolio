import React from "react";
import { projectsData } from "@/constants";
import Project from "../sub/Project";

const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-20 "
      id="projects"
    >
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
