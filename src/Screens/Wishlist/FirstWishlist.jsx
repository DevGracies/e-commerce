import React from "react";
import style from "./Wishlist.module.css";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";

function FirstWishlist(props) {
  const { addItem } = useCart();
  return (
    <div className={style.all}>
      <div className={style.container}>
        <div className="flex justify-between">
          <div></div>
          <div>
            <AiOutlineDelete className="text-3xl cursor-pointer m-4" />
          </div>
        </div>
        <div className="flex justify-center ">
          <img src={props.img} alt="" />
        </div>
        <div className={style.footer}>
          <AiOutlineShoppingCart
            className="text-2xl mr-2 cursor-pointer"
            onClick={() => {
              addItem(props.item);
            }}
          />
          <h4>Add to cart</h4>
        </div>
      </div>
      <div>
        <h2 className=" text-xl font-medium">{props.title}</h2>
        <div className=" flex">
          <h5 className="mr-2 text-[#DB4444]">{props.price}</h5>
          <h6>{props.actualPrice}</h6>
        </div>
      </div>
    </div>
  );
}

export default FirstWishlist;
