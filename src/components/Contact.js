import React from "react";
import i1 from "../images/instagram.png";
import i2 from "../images/twitter2.jpg";
import i3 from "../images/email.webp";
import i4 from "../images/git.png";
import "./Contact.css";
export const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-5 ">
        <p className="text-3xl font-bold">Contact Me</p>
        <div className="div9 bg-stone-100 w-[50%] mt-5 rounded-lg shadow-lg p-5 flex gap-[23%]">
          <a href="https://www.linkedin.com/in/chetan-agrawal-b7a226256/">
            <img
              src={i1}
              className="h-[50px] hover:scale-[1.1] ease-in-out transition duration-800 "
              alt="linkedin"
            ></img>
          </a>
          <a href="https://twitter.com/agrawal_ch35348">
            <img
              src={i2}
              className="h-[50px] hover:scale-[1.1] ease-in-out transition duration-800 "
              alt="twitter"
            ></img>
          </a>
          <a href="mailto:chetanagrawal117@gmail.com">
            <img
              src={i3}
              className="h-[50px] hover:scale-[1.1] ease-in-out transition duration-800 "
              alt="gmail"
            ></img>
          </a>
          <a href="https://github.com/ChetanAgrawal11">
            <img
              src={i4}
              className="h-[50px] hover:scale-[1.1] ease-in-out transition duration-800 "
              alt="git"
            ></img>
          </a>
        </div>
        <div className="h-[30px]"></div>
      </div>
    </>
  );
};
