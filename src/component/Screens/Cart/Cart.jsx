import React, { useState } from "react";
import { Link } from "react-router-dom";
import ps from "./ps.jpg";
import tv from "./tv.jpg";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
function Cart() {
  const [Count, setCount] = useState(0);
  const [Count2, setCount2] = useState(0);
  const click = () => {
    setCount(Count + 1);
  };
  const click2 = () => {
    setCount(Count2 + 1);
  };
  return (
    <div>
      <div className="flex m-5 ">
        <Link to="/" className=" text-gray-400">
          Home
        </Link>
        <h2 className="ml-2">/ Cart </h2>
      </div>
      <div>
        <div className=" m-16 flex justify-between rounded shadow-xl ">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>
        <div className=" m-16 items-center  flex justify-between rounded shadow-xl ">
          <div className="flex items-center">
            <img src={tv} alt="" />
            <h2 className="ml-3">LCD Monitor</h2>
          </div>
          <h2>$650</h2>
          <div className=" items-center bg-white border-gray-500 w-max h-max rounded-md flex justify-between">
            <h1>{Count}</h1>
            <div className=" text-2xl">
              <RiArrowDropUpLine
                onClick={click}
                className=" cursor-pointer mt-2"
              />
              <RiArrowDropDownLine
                onClick={() => setCount(Count - 1)}
                className=" cursor-pointer mb-2"
              />
            </div>
          </div>
          <h2>$650</h2>
        </div>
        <div className=" m-16 items-center  flex justify-between rounded shadow-xl ">
          <div className="flex items-center">
            <img src={ps} alt="" />
            <h2 className="ml-3">LCD Monitor</h2>
          </div>
          <h2>$650</h2>
          <div className=" items-center bg-white border-gray-500 w-max h-max rounded-md flex justify-between">
            <h1>{Count2}</h1>
            <div className=" text-2xl">
              <RiArrowDropUpLine
                onClick={click2}
                className=" cursor-pointer mt-2"
              />
              <RiArrowDropDownLine
                onClick={() => setCount2(Count2 - 1)}
                className=" cursor-pointer mb-2"
              />
            </div>
          </div>
          <h2>$650</h2>
        </div>
      </div>
      <div className="flex items-center justify-between m-16">
        <button className=" gap-3 h-14 w-32 rounded border-2 scroll-mx-4 scroll-my-12">
          View All Products
        </button>
        <button className=" gap-3 h-14 w-32 rounded border-2 scroll-mx-4 scroll-my-12">
          View All Products
        </button>
      </div>
      <div className="flex justify-between m-16">
        <div>
          <h2 className=" w-80 h-14 rounded border">Coupon Code</h2>
          <button className=" bg-[#DB4444] text-white w-56 h-14 rounded scroll-mx-4 scroll-my-12 gap-3">
            View All Products
          </button>
        </div>
        <div>
          <h1>Cart Total</h1>
          <div className="flex items-center justify-between">
            <h1>Subtotal:</h1>
            <h1>$1750</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1>Shipping:</h1>
            <h1>Free</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1>Total:</h1>
            <h1>$1750</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
