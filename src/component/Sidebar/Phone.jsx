import React, { useState } from "react";
import { FaApple, FaArrowRight } from "react-icons/fa";
import img from "../images/Phone.png";
import img1 from "../images/phoneee.png";
import img2 from "../images/phone2.jpg";
import img3 from "../images/phonee.png";
import style from "./Sidebar.module.css";
const phoneArray = [img, img1, img, img3];
function Phone() {
  const [current, setCurrent] = useState(0);
  console.log(phoneArray[current]);

  const nextSlide = () => {
    setCurrent((next) => (next === phoneArray.length - 1 ? 0 : next + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? phoneArray.length - 1 : prev - 1));
  };
  return (
    <div
      className={`${style.container}  xl:ml-32 bg-black flex justify-between text-white`}
    >
      <div>
        <div className="flex items-center">
          <FaApple className="text-white text-5xl" />
          <h4 className={`${style.iPhone}`}>iPhone 14 Series</h4>
        </div>
        <h2 className={`${style.Voucher}`}>Up to 10% off Voucher</h2>
        <div className="flex mr-4 items-center">
          <h3 className={`${style.shop}`}>Shop Now</h3>
          <FaArrowRight className="text-white text-xl  ml-5" />
        </div>
      </div>
      <div>
        <img
          src={phoneArray[current]}
          alt="gh"
          className={`${style.img} xl:w-60 xl:ml-10`}
        />
        <div className="flex">
          <button
            onClick={nextSlide}
            className="ml-3 w-3 h-3 rounded bg-white hover:bg-red-100"
          ></button>
          <button
            onClick={nextSlide}
            className="flex ml-3 w-3 h-3 text-white rounded bg-white hover:bg-red-100"
          ></button>
          <button
            onClick={nextSlide}
            className="flex ml-3 w-3 h-3 text-white rounded bg-white hover:bg-red-100"
          ></button>
          <button
            onClick={prevSlide}
            className="flex ml-3 w-3 h-3 text-white rounded bg-white hover:bg-red-100"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Phone;
