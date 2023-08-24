import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Counter from "./Counter";
function Heart() {
  return (
    <div>
      <div className="relative">
        <AiOutlineHeart className=" text-4xl m-3 text-2xl  text-black font-medium hover:cursor-pointer" />
        <div className="absolute text-center -top-1 right-0 w-5 h-5 rounded-full bg-red-700 justify-center items-centernflex flex-row text-white text-xs ">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default Heart;
