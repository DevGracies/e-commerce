import React from "react"; 
import {FaSearch} from "react-icons/fa"
import {AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import {Link  } from "react-router-dom";

function Nav() {
    return (
        <div class="bg-blue-200 p-4 flex justify-between static " >
            <h1 class=" m-1 text-4xl p-0 text-black font-bold">Exclusive</h1>
            <div className=" font-black md:hidden text-4xl">&#9776;</div>
            <ul class="flex list-none cursor-pointer">
                <Link to="/" class=" m-3 text-2xl  text-black font-medium"> Home </Link>
                <Link to="/Contact" class=" m-3 text-2xl  text-black font-medium"> Contact </Link>
                <Link class=" m-3 text-2xl  text-black font-medium" to="/About"> About </Link>
                <Link to="/SignUp" class=" m-3 text-2xl  text-black font-medium"> Sign-Up </Link>
            </ul>
            <div class='flex  text-lg font-medium text-black '>  
                <div class=" m-3 bg-white flex rounded-xl">
                    <input class=' rounded-xl focus:outline-none'
                        type="text" placeholder="What are you looking for? " name="" id="" />
                        <FaSearch class=" m-4" />
                </div>
                <div class="flex">
                    <div class=" m-3 ml-2 flex ">
                        <AiOutlineHeart class=" m-3 text-2xl  text-black font-medium" />
                        <AiOutlineShoppingCart class=" m-3 text-2xl  text-black font-medium" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav 