import React from "react";
import { BiDollar } from "react-icons/bi";
import {
  AiOutlineDollarCircle,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

const Sales = () => {
  return (
    <div className=" m-5 w-64 h-40 bg-white border-none rounded shadow-2xl p-3">
      <div>
        <div className=" font-medium flex justify-between">
          <h1>BUDGET</h1>
          <div className=" bg-red-600 relative rounded-full w-11 h-11">
            <div className=" absolute text-center top-3 left-3  ">
              <AiOutlineDollarCircle className="bg-white text-red-600 rounded-full" />
              {/* <BiDollar className=" text-red-800" /> */}
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-2xl">$24k</h1>
      </div>
      <div className=" flex">
        <div className=" flex mr-3">
          <AiOutlineArrowUp />
          <h2>12%</h2>
        </div>
        <h3>Since last month</h3>
      </div>
    </div>
  );
};

export default Sales;
