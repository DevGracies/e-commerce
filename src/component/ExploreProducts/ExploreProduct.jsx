import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function ExploreProduct() {
  return (
    <div>
      <div className=" bg-[#DB4444] w-5 rounded-sm ml-3 mt-12 mb-10 h-10 ">
        <h3 className="  text-2xl text-[#DB4444] ml-8 w-max">Our Products</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <h1 className="mr-2 text-5xl font-bold leading-none ml-3">
            {" "}
            Explore Our Products
          </h1>
        </div>
        <div className="flex mr-6 ">
          <FaArrowLeft className=" text-3xl hover:bg-black hover:text-white hover:rounded-full" />
          <FaArrowRight className="ml-3 text-3xl  hover:bg-black hover:text-white hover:rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default ExploreProduct;
