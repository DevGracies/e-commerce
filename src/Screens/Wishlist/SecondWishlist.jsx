import React from "react";
import { AiFillEye, AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import style from "./Wishlist.module.css";

function SecondWishlist({ second }) {
  const { title, price, left, actualPrice } = second;
  return (
    <div className={style.all}>
      <div className={style.container}>
        <div className=" rounded-3xl items-center flex justify-between flex justify-between h-36">
          <div>
            <button>{left}%</button>{" "}
          </div>
          <div>
            <AiFillEye className="text-3xl cursor-pointer m-4" />
          </div>
        </div>
        <div className="flex justify-center">{/* <img src={} alt="" /> */}</div>
        <div className={style.footer}>
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
