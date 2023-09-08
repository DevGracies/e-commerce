import React from "react";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import styles from "./product.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Product({ props }) {
  const { img, title, num, price, actualPrice, left } = props;
  return (
    <React.Fragment>
      <div className={` m-5 center ${styles.all}`}>
        <div className={`w-60 p-3 h-60 ${styles.cart} `}>
          <div className={` flex justify-between`}>
            <div>
              <h4 className={`${styles.num}  bg-[#DB4444]`}>{num}</h4>
            </div>
            <div className="mt-10">
              <img src={img} alt={title} />
            </div>
            <div>
              <div className="bg-white p-1 rounded-full">
                <FaHeart />
              </div>
              <div className="bg-white p-1 rounded-full mt-3">
                <FaEye />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <AiOutlineShoppingCart
              className="text-2xl mr-2 cursor-pointer"
              // onClick={increaseCount}
            />
            <h4>Add to cart</h4>
          </div>
        </div>
        <br />
        <div>
          <h4>{title} </h4>
          <div className="flex">
            <div className="mr-2 text-red-700 bold">{price}</div>
            <div>{actualPrice}</div>
          </div>
          <div className="flex items-center">
            <div className="flex mr-2">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            {left}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Product;
