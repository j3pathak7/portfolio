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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi
            molestiae nihil. Nemo, quod exercitationem excepturi minima est
            quisquam optio voluptate, nisi omnis autem iure ipsa distinctio
            quidem eaque modi earum, tenetur laudantium sapiente.
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
