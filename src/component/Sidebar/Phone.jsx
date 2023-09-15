import React, { useState } from "react";
// import phone from "../images/Phone.png";
// import phone1 from "../images/Phone1.jpg";
// import phone2 from "../images/Phone2.jpg";
// import phone3 from "../images/Phone3.jpg";
import { FaApple } from "react-icons/fa";

const phoneArray = [
  "../images/Phone.png",
  "../images/Phone1.jpg",
  "../images/Phone2.jpg",
  "../images/Phone3.jpg",
];
function Phone() {
  const [current, setCurrent] = useState(0);

  const nextSlide = setCurrent((next) => {
    if (next === phoneArray.length - 1) {
      return 0;
    } else {
      return next + 1;
    }
  });
  const prevSlide = setCurrent((prev) => {
    if (prev === 0) {
      return phoneArray.length - 1;
    } else {
      return prev - 1;
    }
  });
  return (
    <div className="bg-black">
      <div>
        <FaApple className="text-white" />
      </div>
      <div>
        <img src={phoneArray[current]} alt="" />
        <div>
          <button onClick={nextSlide}></button>
          <button onClick={nextSlide}></button>
          <button onClick={nextSlide}></button>
          <button onClick={prevSlide}></button>
        </div>
      </div>
    </div>
  );
}

export default Phone;
