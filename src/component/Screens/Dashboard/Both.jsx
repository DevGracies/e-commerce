import React from "react";
import Profit from "./Profit";
import Traffic from "./Traffic";
import Sales from "./Sales";
function Both() {
  return (
    <div>
      <div className="">
        <Sales />
      </div>
      <div className=" w-full items-center flex justify-between">
        <div className=" xl:w-4/6 sm:w-7/12">
          <Profit />
        </div>
        <div className=" sm:w-4/12 xl:w-1/5">
          <Traffic />
        </div>
      </div>
    </div>
  );
}

export default Both;
