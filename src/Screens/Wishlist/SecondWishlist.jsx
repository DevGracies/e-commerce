import React from "react";
import { AiFillEye, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

function SecondWishlist({ second }) {
  const { img, title, price, left, actualPrice } = second;
  return (
    <div>
      <div className="bg-[#F5F5F5] w-60 border-none rounded-sm">
        <div className=" rounded-3xl flex justify-between">
          <div>{/* <button>{left}%</button> */} heeloooo</div>
          <div>
            <AiFillEye className="text-3xl cursor-pointer m-4" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div className="bg-black text-white items-center justify-center flex p-2 ">
          <AiOutlineShoppingCart
            className="text-2xl mr-2 cursor-pointer"
            // onClick={increaseCount}
          />
          <h4>Add to cart</h4>
        </div>
      </div>

      <div>
        <h2 className=" text-xl font-medium">{title}</h2>
        <div className=" flex">
          <h5 className="mr-2 text-[#DB4444]">{price}</h5>
          <h6>{actualPrice}</h6>
        </div>
        <div className="flex mr-2">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
        </div>
      </div>
    </div>
  );
}

export default SecondWishlist;
