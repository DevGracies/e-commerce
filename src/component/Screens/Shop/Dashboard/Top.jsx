import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";

function Top() {
  return (
    <div>
      <div>
        <AiOutlineSearch />
        <input type="text" />
      </div>
      <div>
        <HiUsers />
        <div className=" relative">
          <IoMdNotifications className=" absolute" />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Top;
