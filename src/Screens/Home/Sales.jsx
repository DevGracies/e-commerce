import React from "react";
import Product from "../../component/Product/Product";
import { Sales } from "../../component/Data/Sales";
function SalesMap() {
  return (
    <div className=" lg:flex  grid grid-cols-1 justify-center md:grid md:grid-cols-2">
      {Sales &&
        Sales.map((sales) => {
          return <Product key={sales.id} props={sales} />;
        })}
    </div>
  );
}

export default SalesMap;
