import React from "react";
import Sidebar from "./Sidebar";
import Top from "./Top";
import Sales from "./Sales";
import Traffic from "./Traffic";
import Profit from "./Profit";

const Body = () => {
  return (
    <div className=" w-full flex">
      <div className=" sm:w-4/12 xl:w-1/5">
        <Sidebar />
      </div>
      <div className=" xl:w-4/6 sm:w-7/12">
        <div>
          <Top />
          <Sales />
        </div>
        <div className=" flex justify-between">
          <Profit />
          <Traffic />
        </div>
      </div>
    </div>
  );
};

export default Body;
