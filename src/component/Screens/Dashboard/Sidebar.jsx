import React from "react";
import { FaLeaf } from "react-icons/fa";
import { BsBarChartFill, BsFillBagCheckFill, BsLockFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { AiFillAccountBook, AiOutlineSetting } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { BiSolidUser, BiSolidUserPlus } from "react-icons/bi";
import { AiOutlineSync } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiComputerDesktop, HiDeviceTablet } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";

function Sidebar() {
  return (
    <div className=" h-screen bg-blue-950">
      <div>
        <FaLeaf className=" text-indigo-700 ml-2 mb-3 sm:text-4xl md:text-5xl xl:text-6xl" />
        <div className="flex justify-between border-none rounded bg-[#ffffff50] p-2 m-2 sm:text-1xl md:text-2xl">
          <div>
            <h1 className=" text-white">Devias</h1>
            <h6 className=" text-gray-400">Production</h6>
          </div>
          <div className=" text-2xl  text-gray-400">
            <RiArrowDropUpLine className=" cursor-pointer mt-2" />
            <RiArrowDropDownLine className=" cursor-pointer mb-2" />
          </div>
        </div>{" "}
        <hr className=" text-slate-400 bg-slate-400" />
        <div>
          <div className=" flex p-2 m-2 items-center hover:bg-[#ffffff50] hover:text-white text-gray-400">
            <BsBarChartFill className=" hover:text-indigo-700 sm:text-1xl md:text-2xl" />
            <h2 className=" ml-2 sm:text-1xl md:text-2xl">Overview</h2>
          </div>
          <div className=" flex p-2 m-2 items-center hover:bg-[#ffffff50] hover:text-white text-gray-400">
            <HiUsers className=" hover:text-indigo-700 sm:text-1xl md:text-2xl" />
            <h2 className=" ml-2 sm:text-1xl md:text-2xl">Customers</h2>
          </div>
          <div className=" flex p-2 m-2 items-center hover:bg-[#ffffff50] hover:text-white text-gray-400">
            <BsFillBagCheckFill className=" hover:text-indigo-700 sm:text-1xl md:text-2xl" />
            <h2 className=" ml-2 sm:text-1xl md:text-2xl">Companies</h2>
          </div>
          <div className=" flex p-2 m-2 items-center hover:bg-[#ffffff50] hover:text-white text-gray-400">
            <BiSolidUser className=" hover:text-indigo-700 sm:text-1xl md:text-2xl" />
            <h2 className=" ml-2 sm:text-1xl md:text-2xl">Account</h2>
          </div>
          <div className=" flex p-2 m-2 items-center hover:bg-[#ffffff50] hover:text-white text-gray-400">
            <AiOutlineSetting className=" hover:text-indigo-700 sm:text-1xl md:text-2xl" />
            <h2 className=" ml-2 sm:text-1xl md:text-2xl">Setting</h2>
          </div>
          <div className=" flex p-2 m-2 items-center hover:bg-[#ffffff50] hover:text-white text-gray-400">
            <BsLockFill className=" hover:text-indigo-700 sm:text-1xl md:text-2xl" />
            <h2 className=" ml-2 sm:text-1xl md:text-2xl">Login</h2>
          </div>
          <div className=" flex p-2 m-2 items-center hover:bg-[#ffffff50] hover:text-white text-gray-400">
            <BiSolidUserPlus className=" hover:text-indigo-700 sm:text-1xl md:text-2xl" />
            <h2 className=" ml-2 sm:text-1xl md:text-2xl">Register</h2>
          </div>
          <div className=" flex p-2 m-2 items-center hover:bg-[#ffffff50] hover:text-white text-gray-400">
            <VscError className=" hover:text-indigo-700 sm:text-1xl md:text-2xl" />
            <h2 className=" ml-2 sm:text-1xl md:text-2xl">Error</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
