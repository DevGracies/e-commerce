import React, { useState } from "react";
import img from "../images/Frame560.jpg";
import { FaAngleRight } from "react-icons/fa";
import Phone from "./Phone";

function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className=" flex justify-between ">
      <div className={`${open ? "w-72" : "w-20"} duration-100 border-2`}>
        <ul className="p-5">
          <div className="flex justify-between items-center">
            {" "}
            <li className={`${!open && "hidden"} p-1`}>Woman’s Fashion</li>
            <FaAngleRight
              className={`cursor-pointer rounded-full ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex justify-between items-center">
            {" "}
            <li className={`${!open && "hidden"} p-1`}>Men’s Fashion</li>
            <FaAngleRight
              className={`cursor-pointer rounded-full ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
          </div>
          <li className={`${!open && "hidden"} p-1`}>Electronics</li>
          <li className={`${!open && "hidden"} p-1`}>Home & Lifestyle</li>
          <li className={`${!open && "hidden"} p-1`}>Medicine </li>
          <li className={`${!open && "hidden"} p-1`}>Sports & Outdoor </li>
          <li className={`${!open && "hidden"} p-1`}>Baby's & Toy </li>
          <li className={`${!open && "hidden"} p-1`}>Groceries & pots </li>
          <li className={`${!open && "hidden"} p-1`}>Health & Beauty </li>
        </ul>
      </div>
      <div className="sm:m-5  xl:h-max xl:w-max xl:m-10">
        <Phone />
      </div>
    </div>
  );
}

export default Sidebar;
