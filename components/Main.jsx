import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="width-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#127082]">Jyotirmoy</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a dynamic full-stack developer. I specialize in crafting
            innovative web applications with a holistic approach to development.
            Committed to staying updated on industry trends, I deliver
            high-quality, future-proof solutions that exceed client
            expectations.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/jyotirmoy37/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg p-6 shadow-sky-400 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>

            <a
              href="https://github.com/j3pathak7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg p-6 shadow-sky-400 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <a href="mailto:jyotirmoypathak.37@gmail.com">
              <div className="rounded-full shadow-lg p-6 shadow-sky-400 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
