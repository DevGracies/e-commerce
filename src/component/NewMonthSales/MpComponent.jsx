import React, { useEffect, useState, useRef } from "react";
import mp from "../images/mp.png";

const MpComponent = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  let interval = useRef();
  const countdown = () => {
    const countdownDate = new Date("January 1, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const duration = countdownDate - now;
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);
      if (duration < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    countdown();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className=" h-[500px] items-center flex justify-between bg-black">
      <div className="m-5">
        <h4 className="text-green-500">Categories</h4>
        <h1 className="text-white text-5xl">Enhance Your Music Experience</h1>
        <div className="flex gap-5">
          <div className="w-20 h-20 items-center justify-center my-5 text-center rounded-full bg-white text-black ">
            <h1 className="font-bold ">{hours}</h1>
            <span className="font-medium text-sm ">Hours</span>
          </div>
          <div className="w-20 h-20 items-center justify-center my-5 text-center rounded-full bg-white text-black">
            <h1 className="font-bold ">{days}</h1>
            <span className="font-medium text-sm ">Days</span>
          </div>
          <div className="w-20 h-20 items-center justify-center my-5 text-center rounded-full bg-white text-black">
            <h1 className="font-bold ">{minute}</h1>
            <span className="font-medium text-sm ">Minute</span>
          </div>
          <div className="w-20 h-20 items-center justify-center my-5 text-center rounded-full bg-white text-black">
            <h1 className="font-bold ">{second}</h1>
            <span className="font-medium text-sm ">Second</span>
          </div>
        </div>
        <button className=" text-white w-32 h-12 rounded bg-green-600">
          Buy Now!
        </button>
      </div>
      <div>
        <img src={mp} alt="" />
      </div>
    </div>
  );
};

export default MpComponent;
