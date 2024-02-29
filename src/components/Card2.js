import React from "react";
import i7 from "../images/image2.png";
import i8 from "../images/arrow3.png";
import "./Card2.css";
// import i1 from "../images/image2.png";
// import i2 from "../images/image3.png";
// import i3 from "../images/image4.png";
const Card2 = (props) => {
  return (
    <span>
      <div
        class="heello2  flex flex-col rounded-lg "
        id="id2"
        style={{
          width: "18rem",
          height: "25rem",
          paddingBottom: "0px",
        }}
      >
        {/* <img src={i1} class="card-img-top h-[12rem] w-[493px]" alt="Card" />
         */}
        <img
          src={props.item.image}
          className="card-img-top"
          style={{
            height: "350px",
            width: "100%",
            borderRadius: "10px",
            paddingBottom: "0px",
            marginBottom: "0px",
          }}
          alt="Card"
        />

        <div className="hello3 flex justify-center items-center">
          <p className="font-semibold">{props.item.name}</p>
          <a href="https://github.com/ChetanAgrawal11/Kharido-Ecommerce-Website">
            <img src={i8} className="image2 h-[20px] w-[40px]"></img>
          </a>
        </div>
      </div>
    </span>
  );
};

export default Card2;
