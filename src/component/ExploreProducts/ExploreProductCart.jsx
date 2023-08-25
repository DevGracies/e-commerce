import React from "react";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
function ExploreProductCart({ props }) {
  const { img, title, price, productLeft } = props;
  return (
    <React.Fragment>
      <div className="m-5 center">
        <div className={` bg-[#F5F5F5] w-60 p-3 h-60 `}>
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
          {/* <div className='text-center bg-black text-white w-50'>
                  <h1>Add to cart</h1>
              </div> */}
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
