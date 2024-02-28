import React from "react";
import i1 from "../images/arrow5.png";
import "./Achcard.css";
const Achcard = (props) => {
  console.log(props.item);
  return (
    <>
      <div
        className={`card2 h-[90px] w-[60%] bg-${props.item.color}-300 mt-[50px] rounded-lg flex justify-between items-center hover:scale-[1.15] transition duration-500 ease-in-out mb-2`}
      >
        <div className="part1 p-3">
          <p className="text-2xl">{props.item.title}</p>
          <p>{props.item.desc}</p>
        </div>
        <div className="part2  w-[60px] mr-4">
          <a href={`${props.item.link}`}>
            {" "}
            <img src={i1}></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Achcard;
