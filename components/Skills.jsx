import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl uppercase tracking-widest text-[#127082]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/node.png"}
                  width="64px"
                  height={"64px"}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/javascript.png"}
                  width="64px"
                  height={"64px"}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/react.png"}
                  width="64px"
                  height={"64px"}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/next.png"}
                  width="64px"
                  height={"64px"}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/tailwind.png"}
                  width="64px"
                  height={"64px"}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/mongo.png"}
                  width="64px"
                  height={"64px"}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/firebase.png"}
                  width="64px"
                  height={"64px"}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-sky-400 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={"/assets/skills/github1.png"}
                  width="64px"
                  height={"64px"}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
