import React from "react";
import "./Skills.css";
import Card from "./Card";
import skills from "../data/project.ts";
const Skills = () => {
  return (
    <div className="skills mt-[80px]  flex flex-col items-center">
      <div className="div1">
        <p className="text-white text-3xl  w-full font-bold mt-5">About me </p>
      </div>
      <div className="div2 flex flex-col w-full mt-[50px]">
        <p className="hello1 text-gray-300 ml-[22%] mr-[10%] ">
          I specialize in crafting dynamic user interfaces with React.js and
          Tailwind CSS, ensuring seamless frontend experiences.
        </p>
        <p className="hello2 text-gray-300 ml-[25%] mr-[10%]">
          On the backend, I wield the power of Node.js and Mongoose to build
          robust and scalable applications.
        </p>{" "}
        <p className="hello3 text-gray-300 ml-[27%] mr-[10%]">
          Additionally, my repertoire extends to cross-platform development with
          frameworks like Flutter.
        </p>
      </div>
      <div className="div3 mt-[100px] flex gap-5">
        <div className="first flex ">
          <p className="text1 text-yellow-200 text-4xl">2+ </p>
          <p className="text2 text-gray-500 mt-2 ml-2">Years of Experience</p>
        </div>
        <div className="first flex">
          <p className="text3 text-yellow-200 text-4xl">100+ </p>
          <p className="text-gray-500 mt-2 ml-2 "> DSA questions on LeetCode</p>
        </div>
      </div>
      <div className="div4 flex flex-col items-center">
        <p className="text-white mt-12 text-3xl font-bold">Skills </p>

        <div className="div5 mt-5 grid grid-cols-4 gap-4 ">
          {skills.map((item, index) => {
            return (
              <div key={index} className="w-1/4 p-4">
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
