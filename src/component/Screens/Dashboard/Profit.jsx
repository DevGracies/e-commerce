import React from "react";
import { AiOutlineSync } from "react-icons/ai";

const chart = [];
const Profit = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2>Sales</h2>
        <div className="flex items-center">
          <AiOutlineSync />
          <h6 className=" ml-2">sync</h6>
        </div>
      </div>
    </div>
  );
};

export default Profit;
