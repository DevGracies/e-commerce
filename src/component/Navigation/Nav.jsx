import React from "react"; 
import {FaSearch} from "react-icons/fa"
import {AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import {Link  } from "react-router-dom";

function Nav() {
    return (
        <div class="bg-blue-200 p-4 flex justify-between " >
            <h1 class=" m-1 text-3xl p-0 text-black font-bold">Exclusive</h1>
            <div className=" font-black md:hidden text-4xl">&#9776;</div>
            <ul class="flex list-none cursor-pointer">
                <Link to="/" > Home </Link>
                <Link to="/Contact"> Contact </Link>
                <Link class=" m-3 text-lg p-0 text-black font-medium" to="/About"> About </Link>
                <Link to="/SignUp"> Sign-Up </Link>
            </ul>
            <div class='flex  text-lg font-medium text-black '>  
                <div class=" m-3 bg-white flex ">
                    <input class='border-r-5 focus:outline-none '
                        type="text" placeholder="What are you looking for? " name="" id="" />
                        <FaSearch />
                </div>
                <div class="flex">
                    <div class=" m-3 ml-2 flex ">
                        <AiOutlineHeart />
                        <AiOutlineShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav 