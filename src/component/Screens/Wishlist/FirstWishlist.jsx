import React from "react";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";

function FirstWishlist({ first }) {
  const { img, title, price, left, actualPrice } = first;
  return (
    <div>
      <div>
        <h3>Wishlist</h3>
        <button>Move All To Bog</button>
      </div>
      <div>
        <div>
          <div>
            <button>{left}%</button>
          </div>
          <div>
            <AiOutlineDelete />
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <AiOutlineShoppingCart />
          <h4>Add to cart</h4>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <div>
          <h5>{price}</h5>
          <h6>{actualPrice}</h6>
        </div>
      </div>
    </div>
  );
}

export default FirstWishlist;
