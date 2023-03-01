import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#f8f8f8");
  const [linkColor, setLinkColor] = useState("#2c2c2c");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/project1" ||
      router.asPath === "/project2" ||
      router.asPath === "/project3" ||
      router.asPath === "/project4"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#f8f8f8");
      setLinkColor("#1f2937");
    }
  }, [router]);

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
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[99]"
          : "fixed w-full h-20 z-[99]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link href="/">
          <p className="font-stroke-md text-4xl font-black ">{`<KR/>`}</p>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-5 text-sm font-black uppercase hover:underline">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-5 text-sm font-black uppercase hover:underline">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-5 text-sm font-black uppercase hover:underline">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-5 text-sm font-black uppercase hover:underline">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-5 text-sm font-black uppercase hover:underline">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu style={{ color: "#2c2c2c" }} size={30} />
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
              ? "fixed left-0 top-0 w-[100%] max-w-[414px] h-screen bg-[#ecf0f3] p-10 ease-in duration-300 md:hidden"
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
                Let&apos;s build something together
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
                  Let&apos;s connect
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
