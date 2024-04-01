import React from "react";
import { projectsData } from "@/constants";
import Project from "../sub/Project";
import { SparklesIcon } from "@heroicons/react/24/solid";
import SectionHeader from "../sub/SectionHeader";

const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-20 "
      id="projects"
    >
      <SectionHeader
        title="My Projects"
        desc="Transforming Ideas into Exceptional Web Experiences"
        slogen="Every line of code tells a story of problem-solving and creativity, weaving together the fabric of progress"
      />
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
