import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../public/assets/projects/project1.png";
import project2 from "../public/assets/projects/project2.png";
import project3 from "../public/assets/projects/project3.png";
import project4 from "../public/assets/projects/project4.png";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16 px-6 md:px-12">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] mt-8">
          Projects
        </p>
        <h2 className="py-4 text-gray-700">What I&apos;ve Built</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <ProjectItem
            id="projectone"
            title="Example 1"
            tech="React JS"
            bgImg={project4}
            projectUrl="/project1"
          />
          <ProjectItem
            id="projecttwo"
            title="Example 2"
            tech="React JS"
            bgImg={project1}
            projectUrl="/project2"
          />
          <ProjectItem
            id="projectthree"
            title="Example 3"
            tech="React JS"
            bgImg={project2}
            projectUrl="/project3"
          />
          <ProjectItem
            id="projectfour"
            title="example4"
            tech="React JS"
            bgImg={project3}
            projectUrl="/project4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
