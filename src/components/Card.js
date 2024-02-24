import React from "react";
import i1 from "../images/react3.png";
import "./Card.css";

const Card = (props) => {
  const pss = 80;
  const ct = 60;
  const pt = 80;
  const desc =
    "   Heeelo theses is chetan agrawal learing new skills getting familiar with all the skills ";
  console.log(props.item.desc);
  return (
    <div className="card ">
      <div className="content">
        <div
          className={`front h-[250px] w-[200px] bg-${props.item.color}-200 rounded-md flex flex-col items-center `}
        >
          <img
            src={i1}
            className={`i2 bg-${props.item.color}-200 h-[50px] w-[50px] mt-4`}
            alt="firstimage"
          ></img>
          <p className="text-black font-bold ">{props.item.name}</p>
          <p className="p-2 text-wrap ml-3">{props.item.desc}</p>
        </div>
        <div
          className={`back h-[250px] w-[200px] bg-${props.item.color}-200 rounded-md flex flex-col items-center `}
        >
          <p className="mt-4 font-semibold text-black">
            Problem solving Skills{" "}
          </p>
          <p className="w-[80%] mt-2  h-[20px] rounded-lg border-1 border-black flex">
            <p
              className={`bg-${props.item.color}-600 w-[${props.item.pss}%]  h-full rounded-lg`}
            ></p>
          </p>
          <p className="mt-2 font-semibold text-black">Critical Thinking </p>
          <p className="w-[80%] mt-2  h-[20px] rounded-lg border-1 border-black flex">
            <p
              className={`bg-${props.item.color}-600 w-[${props.item.ct}%]  h-full rounded-lg`}
            ></p>
          </p>
          <p className="mt-2 font-semibold text-black">Projects Experience </p>
          <p className="w-[80%] mt-2  h-[20px] rounded-lg border-1 border-black flex">
            <p
              className={`bg-${props.item.color}-600 w-[${props.item.pt}%]  h-full rounded-lg`}
            ></p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
