import React from "react";
import "./Achievement.css";
import Achcard from "./Achcard";
import achievement from "../data/achievement.ts";
const Achievement = () => {
  return (
    <section id="achievement">
      <div className="ach1  flex flex-col  items-center ">
        <p className="text-white mt-[40px] text-3xl font-bold">
          Achievement and Certification
        </p>
        {achievement.map((key, index) => {
          return <Achcard item={key} />;
        })}
        <div className="h-[30px]"></div>
      </div>
    </section>
  );
};

export default Achievement;
