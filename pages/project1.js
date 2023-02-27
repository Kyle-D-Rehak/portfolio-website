import Image from "next/image";
import React from "react";
import project4 from "../public/assets/projects/project4.png";

const project1 = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-[10]"></div>
        <Image
          className="absolute z-[1]"
          fill="true"
          style={{ objectFit: "cover" }}
          src={project4}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#ecf0f3] px-6 z-10">
          <h2 className="py-2">Project 1</h2>
          <h3>React JS / Next JS / Tailwind</h3>
        </div>
      </div>
    </div>
  );
};

export default project1;
