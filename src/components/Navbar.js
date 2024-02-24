import React from "react";
import "./Navbar.css";
import { useState } from "react";
import i1 from "../images/download.png";
import i2 from "../images/logo3.webp";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar p-3  rounded-b-md ">
        <ul className="flex gap-5 justify-between w-full">
          <div className="logo font-semibold">
            <img
              className="h-full w-[60px] rounded-md scale-[1.1] ml-[50px]"
              src={i2}
            ></img>
          </div>
          <div className="main flex gap-7">
            <li>
              <a
                className="btn font-semibold rounded-lg hover:bg-black hover:scale-[1.15] hover:text-white transition duration-500 ease-in-out"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="btn font-semibold hover:bg-black hover:text-white hover:scale-[1.15] transition duration-500 ease-in-out"
                href="/"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="btn font-semibold hover:bg-black hover:text-white  hover:scale-[1.15] transition duration-500 ease-in-out"
                href="/"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="btn font-semibold hover:bg-black hover:text-white  hover:scale-[1.15] transition duration-500 ease-in-out"
                href="/"
              >
                Achievement
              </a>
            </li>
          </div>

          <button className="btn font-semibold h-[35px] hover:bg-blue-700 hover:text-white hover:scale-[1.15] transition duration-500 ease-in-out">
            <a href="">Linkedin</a>{" "}
          </button>
          <div className="dropdown-btn relative ">
            <button onClick={() => setOpen((prev) => !prev)}>
              {!Open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu shadow-lg hover:scale-[1.3] transition duration-500 ease-in-out"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              ) : (
                <img
                  className="h-[20px] shadow-lg hover:scale-[1.3] transition duration-500 ease-in-out"
                  src={i1}
                  alt="closing"
                ></img>
              )}
            </button>

            {Open && (
              <div className="fixed top-[80px] left-0 w-full  bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800 bg-opacity-50  flex justify-center items-center z-50 ">
                <div className=" p-8 rounded-lg">
                  <ul className=" flex-col gap-7">
                    <li>
                      <a
                        className="btn font-semibold rounded-lg text-xl hover:scale-[1.15] hover:text-white transition duration-500 ease-in-out"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn font-semibold text-xl hover:text-white hover:scale-[1.15] transition duration-500 ease-in-out"
                        href="/"
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn font-semibold text-xl hover:text-white  hover:scale-[1.15] transition duration-500 ease-in-out"
                        href="/"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        className="btn font-semibold text-xl hover:text-white  hover:scale-[1.15] transition duration-500 ease-in-out"
                        href="/"
                      >
                        Achievement
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
