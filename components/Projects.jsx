import Image from "next/image";
import Link from "next/link";
import React from "react";
import bflixImg from "../public/assets/projects/bflix.png";
import jobrecoImg from "../public/assets/projects/jobreco.png";
import shoppingcardImg from "../public/assets/projects/shoppingcard.png";
import captiongeneratorImg from "../public/assets/projects/captiongenerator.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#127082]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={bflixImg}
            projectInfo="Next JS project using Tailwind"
            projectUrl="https://bflix-five.vercel.app/"
          />
          <ProjectItem
            title="Job Recommender"
            backgroundImg={jobrecoImg}
            projectInfo="Next JS project using Tailwind"
            projectUrl="https://jobreco-1k5dnwufq-j3pathak7.vercel.app/"
          />
          <ProjectItem
            title="Shopping Card"
            backgroundImg={shoppingcardImg}
            projectInfo="A Tailwind project"
            projectUrl="https://shoppingcard-cyan.vercel.app"
          />
          <ProjectItem
            title="Caption Generator"
            backgroundImg={captiongeneratorImg}
            projectInfo="React JS project"
            projectUrl="https://jpcaptiongenerator.vercel.app"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
