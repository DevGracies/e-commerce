import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/CreateContext";
import Heartprops from "./Heartprops";

function CartClick() {
  const { newCart } = useContext(ThemeContext);
  return (
    <div>
      {newCart.map((data) => {
        return <Heartprops key={data} props={data} />;
      })}
    </div>
  );
}

export default CartClick;
