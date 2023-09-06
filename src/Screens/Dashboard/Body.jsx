import React from "react";
import Sidebar from "./Sidebar";
import Top from "./Top";

const Body = ({ children }) => {
  return (
    <div className=" w-full flex">
      <div className=" sm:w-4/12 xl:w-1/5">
        <Sidebar />
      </div>
      <div className=" xl:w-4/6 sm:w-7/12">
        <div>
          <Top />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Body;
