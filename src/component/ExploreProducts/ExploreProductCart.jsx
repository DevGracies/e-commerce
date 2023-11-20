import React from "react";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import styles from "../Product/product.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
function ExploreProductCart({ props }) {
  const { img, title, price, productLeft } = props;
  return (
    <React.Fragment>
      <div className={` m-5 center ${styles.all}`}>
        <div className={`${styles.cart} `}>
          <div className={` flex justify-between`}>
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
            <AiOutlineShoppingCart className="text-2xl mr-2 cursor-pointer" />
            <h4>Add to cart</h4>
          </div>
        </div>{" "}
        <br />
        <div>
          <h4>{title} </h4>
          <div className="flex">
            <div className="mr-2 text-[#DB4444] bold">{price}</div>
          </div>
          <div className="flex items-center">
            <div className="flex mr-2">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p>{productLeft}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ExploreProductCart;
