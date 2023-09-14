import React from "react";
import style from "./Wishlist.module.css";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import Counter from "../../component/Navigation/Counter";
function FirstWishlist({ first }) {
  const { img, title, price, left, actualPrice } = first;
  return (
    <div className={style.all}>
      <div className={style.container}>
        <div className="flex justify-between">
          <div> {/* <button>{left}%</button> */}</div>
          <div>
            <AiOutlineDelete className="text-3xl cursor-pointer m-4" />
          </div>
        </div>
        <div className="flex justify-center mb-11">
          <img src={img} alt="" />
        </div>
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
      </div>
    </div>
  );
}

export default FirstWishlist;
