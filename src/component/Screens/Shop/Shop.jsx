import React from "react";
import { Link } from "react-router-dom";
function Shop() {
  return (
    <div>
      <Link
        to="/Body"
        className=" bg-[#DB4444] text-white font-medium w-40 p-2 rounded"
      >
        Body
      </Link>
    </div>
  );
}

export default Shop;
