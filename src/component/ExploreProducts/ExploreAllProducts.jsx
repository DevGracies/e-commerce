import React, { useState } from "react";
import ExploreProduct from "./ExploreProduct";
import ExploreProductCart from "./ExploreProductCart";
import ExploreProductCart2 from "./ExploreProductCart2";
import { Data } from "../../Data/Data";
import { Data2 } from "../../Data/Data2";

function ExploreAllProducts() {
  const [first, setfirst] = useState(true);
  const Products = first ? Data.slice(0, 4) : Data;
  const Products2 = first ? Data2.slice(0, 4) : Data2;
  return (
    <div>
      <ExploreProduct />
      <div className=" lg:flex  grid grid-cols-1 justify-center md:grid md:grid-cols-2">
        {Products.map((data) => {
          return <ExploreProductCart key={data.id} props={data} />;
        })}
      </div>
      <div className=" lg:flex  grid grid-cols-1 justify-center md:grid md:grid-cols-2">
        {Products2.map((data) => {
          return <ExploreProductCart2 key={data.id} props={data} />;
        })}
      </div>
      <div className="flex justify-center">
        {first === true ? (
          <button
            onClick={() => setfirst(false)}
            className="text-white bg-[#DB4444] m-8 w-28 mr-6 h-10 rounded"
          >
            View All
          </button>
        ) : (
          <button
            onClick={() => setfirst(true)}
            className="text-white bg-[#DB4444] m-8 w-28 mr-6 h-10 rounded"
          >
            View less
          </button>
        )}
      </div>
    </div>
  );
}

export default ExploreAllProducts;
