import React from "react";
import Sidebar from "./Sidebar";
import Top from "./Top";
import Sales from "./Sales";

const Body = () => {
  return (
    <div className=" w-full flex">
      <div className=" sm:w-4/12 xl:w-1/5">
        <Sidebar />
      </div>
      <div className=" xl:w-4/5">
        <Top />
        <Sales />
      </div>
    </div>
  );
};

export default Body;
