import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 px-10 md:max-w-[1440px]">
        <ProjectCard
          src="/assets/screenshot-2pac-website.netlify.png"
          title="2PAC Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          gitUrl="/"
          previewUrl="/"
        />
        <ProjectCard
          src="/assets/screenshot-flappy-bird.png"
          title="Flappy Bird Clone"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          gitUrl="/"
          previewUrl="/"
        />
        <ProjectCard
          src="/assets/screenshot-hassanidris.github.png"
          title="Miljonbemanning Career Page"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          gitUrl="/"
          previewUrl="/"
        />
        <ProjectCard
          src="/assets/screenshot-hyperflix-site.netlify.png"
          title="HyperFlix Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          gitUrl="/"
          previewUrl="/"
        />
        <ProjectCard
          src="/assets/screenshot-whobrowsesthewebg7.png"
          title="Active Unity Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          gitUrl="/"
          previewUrl="/"
        />
        <ProjectCard
          src="/assets/screenshot-nesma.github.png"
          title="Nesma Holding Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          gitUrl="/"
          previewUrl="/"
        />
      </div>
    </section>
  );
};

export default Projects;
