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
        <Link to="/Home" className=" text-gray-400">
          Home
        </Link>
        <h2 className="ml-2">/ Cart </h2>
      </div>
      <div>
        <div className=" bg-slate-100 m-16 flex justify-between rounded ">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>
        <div className=" bg-slate-100 m-16  flex justify-between rounded ">
          <div className="flex">
            <img src={tv} alt="" />
            <h2>LCD Monitor</h2>
          </div>
          <h2>$650</h2>
          <div className=" rounded-md flex justify-between border-gray-400">
            <h1>{Count}</h1>
            <div className=" text-2xl  text-gray-400">
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
        <div className=" bg-slate-100 m-16  flex justify-between rounded ">
          <div className="flex">
            <img src={ps} alt="" />
            <h2>LCD Monitor</h2>
          </div>
          <h2>$650</h2>
          <div className=" rounded-md flex justify-between border-gray-400">
            <h1>{Count2}</h1>
            <div className=" text-2xl  text-gray-400">
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
    </div>
  );
}

export default Cart;
