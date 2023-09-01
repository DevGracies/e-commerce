import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import img from "./download.jpg";

function Top() {
  return (
    <div className="flex justify-between text-4xl mb-5 ml-5 text-gray-600">
      <div className="flex relative">
        <input type="text" className="ml-5 border-none outline-none" />
        <AiOutlineSearch className="flex absolute left-0" />
      </div>
      <div className="flex items-center">
        <HiUsers className=" mr-3" />
        <div>
          <div className=" absolute top-0 bg-green-500 w-2 h-2 rounded-full"></div>
          <IoMdNotifications className=" relative" />
        </div>
        <img src={img} alt="" className=" w-9 h-9 rounded-full" />
      </div>
    </div>
  );
}

export default Top;
