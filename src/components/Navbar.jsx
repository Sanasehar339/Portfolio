import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = ({ background, dark, setDark }) => {
  const [bg, setBg] = useState(0);
  const [smNav, setSmNav] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setBg((prevBg) => (prevBg + 1) % background.length);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [bg, background.length]);

  return (
    <div className="max-w-screen h-[450px] w-auto relative">
      <div
        style={{
          backgroundImage: `url(${background[bg].url})`,
        }}
        className="h-full w-full bg-cover bg-center duration-1000 relative"
      >
        <nav
          className={` hidden sm:flex justify-between items-center p-3 ${
            dark ? "bg-slate-400/30 text-white" : "bg-zinc-300/85 text-black"
          }`}
        >
          <h1 className={`${dark ? "text-gray-400" : "text-black"}`}>
            Portfolio
          </h1>
          <ul className="flex justify-center">
            <li
              className={`${
                dark ? "text-slate-300 hover:text-slate-400" : "text-black"
              }`}
            >
              <a href="#">Home</a>
            </li>
            <li
              className={`${
                dark ? "text-slate-300 hover:text-slate-400" : "text-black"
              }`}
            >
              <a href="#">Projects</a>
            </li>
            <li
              className={`${
                dark ? "text-slate-300 hover:text-slate-400" : "text-black"
              }`}
            >
              <a href="#">About</a>
            </li>
            <li
              className={`${
                dark ? "text-slate-300 hover:text-slate-400" : "text-black"
              }`}
            >
              <a href="#">Contact</a>
            </li>
            <button
              className="transition-transform ml-2 outline-none"
              onClick={() => setDark((prev) => !prev)}
            >
              {dark ? (
                <MdDarkMode size={25} />
              ) : (
                <MdOutlineLightMode size={25} />
              )}
            </button>
          </ul>
        </nav>
        <div
          className={`flex justify-between p-3 ${
            dark ? "bg-slate-400/30" : "bg-zinc-300"
          } sm:bg-transparent w-full`}
        >
          <h1 className={`${dark ? "text-gray-400" : "text-black"} sm:hidden`}>
            Portfolio
          </h1>
          <div className={`text-white sm:hidden`}>
            {smNav ? (
              <RxCross1
                size={25}
                onClick={() => setSmNav(false)}
                className={` sm:hidden duration-700 ${
                  dark ? "text-white" : "text-black"
                }`}
              />
            ) : (
              <GiHamburgerMenu
                size={25}
                onClick={() => setSmNav(true)}
                className={` sm:hidden duration-700 ${
                  dark ? "text-white" : "text-black"
                }`}
              />
            )}
          </div>
        </div>
        {smNav && (
          <div className="flex justify-end relative transition">
            <nav
              className={`md:hidden flex flex-col justify-between items-center p-3 ${
                dark
                  ? "bg-slate-400/30 text-white"
                  : "bg-zinc-300/85 text-black"
              }  rounded-md`}
            >
              <ul className="flex flex-col justify-center items-center">
                <li
                  className={`${
                    dark ? "text-slate-300 hover:text-slate-400" : "text-black"
                  }`}
                >
                  Home
                </li>
                <li
                  className={`${
                    dark ? "text-slate-300 hover:text-slate-400" : "text-black"
                  }`}
                >
                  Project
                </li>
                <li
                  className={`${
                    dark ? "text-slate-300 hover:text-slate-400" : "text-black"
                  }`}
                >
                  About
                </li>
                <li
                  className={`${
                    dark ? "text-slate-300 hover:text-slate-400" : "text-black"
                  }`}
                >
                  Contact
                </li>
                <button
                  className="transition-transform outline-none"
                  onClick={() => setDark((prev) => !prev)}
                >
                  {dark ? (
                    <li
                      className={`${
                        dark
                          ? "text-slate-300 hover:text-slate-400"
                          : "text-black"
                      } flex`}
                    >
                      <span className="mr-2">Dark</span>
                      <MdDarkMode size={25} />
                    </li>
                  ) : (
                    <li
                      className={`${
                        dark
                          ? "text-slate-300 hover:text-slate-400"
                          : "text-black"
                      } flex`}
                    >
                      <span className="mr-2">Light</span>
                      <MdOutlineLightMode size={25} />
                    </li>
                  )}
                </button>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
