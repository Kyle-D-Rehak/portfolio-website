import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto pt-16 w-full px-6 md:px-12">
        <p className="text-xl tracking0widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 text-gray-700">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* {left} */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 ease-in duration-300">
            <div className="lg:p-4 h-full flex flex-col">
              <div>
                <img
                  className="rounded-xl"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                  alt=""
                />
              </div>
              <div>
                <h2 className="pt-2 text-gray-700">Kyle Rehak</h2>
                <p className="py-1">Front-End Developer</p>
                <p className="py-2">
                  Available for freelance or full-time positions. Contact me,
                  let's talk!
                </p>
              </div>
              <div className="mt-auto">
                <p className="pt-12 uppercase text-center">Connect With Me</p>
                <div className="flex items-center justify-evenly py-2 px-6 max-w-[400px] mx-auto">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {right} */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Phone</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
