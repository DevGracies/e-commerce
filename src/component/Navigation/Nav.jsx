import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Heart from "./Heart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import User from "./User";
import Carts from "./Cart";

function Nav({ Heart, Cart, User }) {
  const [click, setClick] = useState(false);

  const onSetClick = () => {
    setClick(!click);
  };
  return (
    <div className="border-b p-4 flex justify-between items-center ">
      <div className="flex items-center">
        <div
          className="m-1 bg-black  p-4 font-bold xl:hidden sm:inline
             rounded-full cursor-pointer text-white"
          onClick={onSetClick}
        >
          &#9776;
        </div>
        <h1 className=" m-1 text-4xl p-0 text-black font-bold">Exclusive</h1>
      </div>
      {click && (
        <ul
          className=" xl:hidden bg-[#ffffff50] pt-28 backdrop-blur-sm grid h-screen top-0
                right-0 fixed pr-10 z-10 cursor-pointer list-none"
        >
          <Link
            to="/"
            className="text-2xl hover:bg-black h-10 pl-3 ml-3 rounded hover:text-white text-black font-medium"
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to="/Contact"
            className=" text-2xl  text-black h-10 pl-3 ml-3 pr-3 rounded font-medium  
                 hover:bg-black hover:text-white -mt-24"
          >
            {" "}
            Contact{" "}
          </Link>
          <Link
            className=" -mt-4 text-2xl text-black font-medium 
                h-10 pl-3 ml-3 pr-2 rounded hover:bg-black hover:text-white"
            to="/About"
          >
            {" "}
            About{" "}
          </Link>
          <Link
            to="/SignUp"
            className=" -mt-56ssssssss text-2xl 
                 text-black h-10 pl-3 ml-3 pr-3 rounded hover:bg-black hover:text-white font-medium"
          >
            {" "}
            Sign-Up{" "}
          </Link>
        </ul>
      )}

      <ul className="flex sm:hidden xl:contents list-none cursor-pointer">
        <Link to="/" className=" m-1 text-2xl  text-black font-medium">
          {" "}
          Home{" "}
        </Link>
        <Link to="/Contact" className="m-1 text-2xl  text-black font-medium">
          {" "}
          Contact{" "}
        </Link>
        <Link className=" m-1 text-2xl  text-black font-medium" to="/About">
          {" "}
          About{" "}
        </Link>
        <Link to="/SignUp" className="m-1 text-2xl  text-black font-medium">
          {" "}
          Sign-Up{" "}
        </Link>
      </ul>
      <div className="flex  text-lg font-medium text-black ">
        <div className="xl:flex sm:hidden m-3 flex rounded-xl items-center bg-slate-100 h-10">
          <input
            className=" sm:h rounded-xl focus:outline-none text-sm p-1 bg-slate-100 h-10"
            type="text"
            placeholder="What are you looking for? "
            name=""
            id=""
          />
          <FaSearch className=" m-4" />
        </div>
        <div className="flex">
          {Heart && <Heart />}
          {Cart && <Carts />}
          {User && <User />}
        </div>
      </div>
    </div>
  );
}

export default Nav;
