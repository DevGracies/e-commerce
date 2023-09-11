import React, { useContext } from "react";
import Product from "../../component/Product/Product";
import { Sales } from "../../component/Data/Sales";
import { ThemeContext } from "../../Context/CreateContext";
function SalesMap() {
  const { flashsales } = useContext(ThemeContext);
  return (
    <div className=" lg:flex  grid grid-cols-1 justify-center md:grid md:grid-cols-2">
      {flashsales.map((sales) => {
        return <Product key={sales.id} props={sales} />;
      })}
    </div>
  );
}

export default SalesMap;
