import React, { useContext } from "react";
import { ThemeContext } from "../../Context/CreateContext";

function Counter() {
  const { productTotal } = useContext(ThemeContext);
  return <div>{productTotal}</div>;
}

export default Counter;
