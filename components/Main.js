import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className=" w-full h-full mx-auto flex justify-center items-center">
        <div>
          <h1
            className="font-black font-archivo leading-verytight"
            style={{ fontSize: "13.5vw" }}
          >
            KYLE REHAK
          </h1>
          <h1
            className="font-black font-archivo font-stroke-lg leading-verytight"
            style={{ fontSize: "9.95vw" }}
          >
            WEB DEVELOPER
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
