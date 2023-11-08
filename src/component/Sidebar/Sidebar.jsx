import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Phone from "./Phone";
import style from "./Sidebar.module.css";

// import img from "../images/Phone.png";

function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className={`flex justify-between ${style.sidebar}`}>
      <div
        className={`${
          open ? "w-72" : "w-20"
        } hidden xl:contents duration-100 border-2`}
      >
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
        {/* <img src={img} alt="" /> */}
      </div>
    </div>
  );
}

export default Sidebar;
