import React, { useState } from "react";
import CartSales from "./CartSales";
import img from "../images/Frame600.png";
// import { ThemeContext } from "../../GlobalContext";
import { ProductsData } from "../../Data/ProductsData";
import MpComponent from "./MpComponent";

function NewMonthSales() {
  const [first, setfirst] = useState(true);
  const Products = first ? ProductsData.slice(0, 4) : ProductsData;
  return (
    <div>
      <div className="bg-[#DB4444] w-5 rounded-sm ml-3 mt-12 mb-10 h-10 ">
        <h3 className=" text-2xl text-[#DB4444] ml-8 w-max"> This Month</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex">
          <h1 className="mr-2 text-5xl font-bold leading-none ml-3">
            Best Selling Products
          </h1>
        </div>
        <div className="">
          {first === true ? (
            <button
              onClick={() => setfirst(false)}
              className="text-white bg-[#DB4444] w-28 mr-6 h-10 rounded"
            >
              View All
            </button>
          ) : (
            <button
              onClick={() => setfirst(true)}
              className="text-white bg-[#DB4444] w-28 mr-6 h-10 rounded"
            >
              View less
            </button>
          )}
        </div>
      </div>
      <div className=" lg:grid-cols-4  grid grid-cols-1 justify-center md:grid md:grid-cols-2">
        {Products.map((data) => {
          return <CartSales key={data.id} props={data} />;
        })}
      </div>
      {/* <div className="flex m-10 justify-center"> */}
      {/* <img src={img} alt="" /> */}
      {/* </div> */}
      <MpComponent />
    </div>
  );
}

export default NewMonthSales;
