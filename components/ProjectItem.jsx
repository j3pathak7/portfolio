import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl, projectInfo }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-sky-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#127082] to-[#42afc1]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="2xl text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">{projectInfo}</p>
        <Link href={projectUrl}>
          <p className="text-center p-3 rounded-lg bg-white text-sky-700 font-bold text-lg cursor-pointer">
            Visit
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
