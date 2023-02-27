import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    nav ? setNav(false) : setNav(true);
  };
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[99]"
          : "fixed w-full h-20 z-[99]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link href="/">
          <p className="text-[#5651e5] text-4xl font-bold tracking-tight">{`<KR/>`}</p>
          {/* <Image
            src="/../public/assets/navLogo.png"
            alt=""
            width="120"
            height="60"
          /> */}
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300 md:hidden"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300 md:hidden"
              : "fixed left-[-150%] top-0 h-screen bg-[#ecf0f3] p-10 ease-in duration-300 md:hidden"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[#5651e5] text-3xl font-bold tracking-tight">{`<KR/>`}</p>
              {/* <Image
                src="/../public/assets/navLogo.png"
                alt=""
                width="80"
                height="40"
              /> */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something together
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={handleNav} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={handleNav} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow0gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow0gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow0gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow0gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
