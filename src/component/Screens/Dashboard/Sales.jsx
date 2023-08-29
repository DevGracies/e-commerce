import React from "react";
import {
  AiOutlineDollarCircle,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

import { TfiMenuAlt } from "react-icons/tfi";
import { HiUsers } from "react-icons/hi";

const Sales = () => {
  return (
    <div className=" lg:flex  grid grid-cols-2 justify-center md:grid md:grid-cols-2">
      <div className=" m-5 w-64 h-40 bg-white border-none rounded shadow-2xl p-3">
        <div className=" font-medium flex justify-between">
          <h1>BUDGET</h1>
          <div className=" bg-red-600 relative rounded-full w-11 h-11">
            <div className=" absolute text-center top-3 left-3  ">
              <AiOutlineDollarCircle className="bg-white text-red-600 rounded-full" />
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-2xl">$24k</h1>
        <div className="flex mt-4">
          <div className=" text-green-500 flex mr-3 items-center">
            <AiOutlineArrowUp />
            <h2>12%</h2>
          </div>
          <h3>Since last month</h3>
        </div>
      </div>
      <div className=" m-5 w-64 h-40 bg-white border-none rounded shadow-2xl p-3">
        <div className=" font-medium flex justify-between">
          <h1>TOTAL CUSTOMERS</h1>
          <div className=" bg-green-600 relative rounded-full w-11 h-11">
            <div className=" absolute text-center top-3 left-3  ">
              <HiUsers className=" text-white rounded-full" />
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-2xl">1.6k</h1>
        <div className="flex mt-4">
          <div className=" flex mr-3 items-center  text-red-500">
            <AiOutlineArrowDown />
            <h2>16%</h2>
          </div>
          <h3>Since last month</h3>
        </div>
      </div>
      <div className=" m-5 w-64 h-40 bg-white border-none rounded shadow-2xl p-3">
        <div className=" font-medium flex justify-between">
          <h1>TASK PROGRESS</h1>
          <div className=" bg-orange-600 relative rounded-full w-11 h-11">
            <div className=" absolute text-center top-3 left-3  ">
              <TfiMenuAlt className="text-white rounded-full" />
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-2xl">75.5%</h1>
        <div className="flex mt-4">
          <div></div>
        </div>
      </div>
      <div className=" m-5 w-64 h-40 bg-white border-none rounded shadow-2xl p-3">
        <div className=" font-medium flex justify-between">
          <h1>TOTAL PROFIT</h1>
          <div className=" bg-red-600 relative rounded-full w-11 h-11">
            <div className=" absolute text-center top-3 left-3  ">
              <AiOutlineDollarCircle className="bg-white text-red-600 rounded-full" />
            </div>
          </div>
        </div>
        <h1 className=" font-bold text-2xl">$15k</h1>
      </div>
    </div>
  );
};

export default Sales;
