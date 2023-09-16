import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import img from "../images/Phone.png";
import img1 from "../images/phone1.jpg";
import img2 from "../images/phone2.jpg";
import img3 from "../images/phone3.jpg";
const phoneArray = [img, img1, img2, img3];
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
    <div className="bg-black text-white">
      <div>
        <FaApple className="text-white" />
      </div>
      <div>
        <img src={phoneArray[current]} alt="gh" />
        <div className=" gap-2 w-3 h-3 text-black rounded bg-white hover:bg-red-100">
          <button onClick={nextSlide}>9</button>
          <button onClick={nextSlide}>9</button>
          <button onClick={nextSlide}>9</button>
          <button onClick={prevSlide}>9</button>
        </div>
      </div>
    </div>
  );
}

export default Phone;
