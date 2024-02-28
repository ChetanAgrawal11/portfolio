import React from "react";

import i3 from "../images/first3.svg";
import i4 from "../images/second3.svg";
import "./Projects.css";
import Card2 from "./Card2";
import { useEffect } from "react";
import projects from "../data/projects2.ts";
import projects2 from "../data/projects3.ts";
const Projects = () => {
  useEffect(() => {
    const scroll = document.querySelector(".gallery");
    if (scroll) {
      scroll.addEventListener("wheel", (e) => {
        e.preventDefault();
        scroll.scrollLeft += e.deltaY;
      });
    }
  }, []);

  const scrollLeft = () => {
    const gallery = document.querySelector(".gallery");
    if (gallery) {
      gallery.scrollLeft -= 900;
    }
  };

  const scrollRight = () => {
    const gallery = document.querySelector(".gallery");
    if (gallery) {
      gallery.scrollLeft += 900;
    }
  };
  return (
    <>
      <section id="projects">
        <div className="mt-[100px] flex justify-center text-3xl font-bold">
          <p>Projects</p>
        </div>
        <div className="gallery-warp flex items-center justify-center ">
          <img
            src={i3}
            className=" buton1 h-[50px] m-[40px] "
            onClick={scrollLeft}
          ></img>
          <div className="gallery flex  h-[500px] p-4 ">
            <div className="div1 w-[100%] grid ">
              {projects.map((item, index) => {
                return (
                  <div key={index}>
                    <Card2 item={item} />
                  </div>
                );
              })}
            </div>
            <div className="div2 w-[100%] grid ">
              {projects2.map((item, index) => {
                return (
                  <div key={index}>
                    <Card2 item={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <img
            src={i4}
            className="buton2 h-[50px] m-[40px] "
            onClick={scrollRight}
          ></img>
        </div>
      </section>
    </>
  );
};

export default Projects;
