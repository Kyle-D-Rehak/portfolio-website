import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen py-16 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] mt-8">
          Skills
        </p>
        <h2 className="py-4 text-gray-700">What I Can Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/git.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center text-gray-700">
                <h3>Git</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
