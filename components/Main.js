import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase py-4 text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className=" text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Kyle</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-6 px-1 text-gray-600 sm:max-w-[70%] m-auto">
            I'm a front-end developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building responsive
            front-end web applications while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow0gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow0gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow0gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow0gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
