import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h3 className="uppercase text-xl tracking-widest text-[#127082]">
            About
          </h3>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a recent graduate with a Bachelor's degree in Computer Science
            and Engineering. My academic background has equipped me with a solid
            foundation in programming and computer science concepts. I am highly
            enthusiastic about programming and have a strong passion for solving
            complex problems through code. I am eager to apply my knowledge and
            skills to real-world challenges, contribute to innovative projects,
            and continuously enhance my programming abilities.
          </p>
        </div>
        <div className="'w-full h-auto m-auto shadow-xl shadow-sky-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded" src="/about.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
