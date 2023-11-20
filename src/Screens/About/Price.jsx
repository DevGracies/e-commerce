import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import { BiSolidWatch, BiHeadphone, BiGame, BiLaptop } from "react-icons/bi";

function Price() {
  const myStyle = {
    main: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
    },
  };
  return (
    <div className=" lg:flex justify-center sm:grid sm:grid-cols-3 ">
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <FaPhoneSquareAlt className=" text-5xl" />
        <h1>Phone</h1>
      </div>
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <BiLaptop className=" text-5xl" />
        <h1>Computers</h1>
      </div>
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <BiSolidWatch className=" text-5xl" />
        <h1>SmartWatch</h1>
      </div>
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <AiFillCamera className=" text-5xl" />
        <h1>Camera</h1>
      </div>
    </div>
  );
}

export default Price;
