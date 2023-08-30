import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ItemCategory from "./ItemCategory";

function Category() {
  // const myStyle = {
  //   main: {
  //     display: "grid",
  //     gridTemplateColumns: "auto auto auto",
  //   },
  // };
  return (
    <div>
      <div className=" bg-red-800 w-5 rounded-sm ml-3 mt-12 mb-10 h-10 ">
        <h3 className=" text-2xl text-red-700 ml-8"> Categories</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <h1 className="mr-2 text-5xl font-bold leading-none ml-3">
            {" "}
            Browse By Category
          </h1>
        </div>
        <div className="flex mr-6 ">
          <FaArrowLeft className=" text-3xl hover:bg-black hover:text-white hover:rounded-full" />
          <FaArrowRight className="ml-3 text-3xl  hover:bg-black hover:text-white hover:rounded-full" />
        </div>
      </div>
      <div
      // className={` xl:flex m-10 mr-3 justify-center text-center`}
      // style={myStyle.main}
      >
        <ItemCategory />
      </div>
    </div>
  );
}

export default Category;
