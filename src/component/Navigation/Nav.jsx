import React from "react"; 
import {FaSearch} from "react-icons/fa"
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai"
import User from "./User";
import {Link  } from "react-router-dom";

function Nav() {
    return (
        <div className="border-b p-4 flex justify-between static " >
            <h1 className=" m-1 text-4xl p-0 text-black font-bold">Exclusive</h1>
            <div className="font-black hidden text-4xl">&#9776;</div>
            <ul className="flex list-none cursor-pointer">
                <Link to="/" className=" m-3 text-2xl  text-black font-medium"> Home </Link>
                <Link to="/Contact" className="m-3 text-2xl  text-black font-medium"> Contact </Link>
                <Link className=" m-3 text-2xl  text-black font-medium" to="/About"> About </Link>
                <Link to="/SignUp" className="m-3 text-2xl  text-black font-medium"> Sign-Up </Link>
            </ul>
            <div className='flex  text-lg font-medium text-black '>  
                <div className=" m-3 flex rounded-xl items-center bg-slate-100 h-10">
                    <input className=' rounded-xl focus:outline-none text-sm p-1 bg-slate-100 h-10'
                        type="text" placeholder="What are you looking for? " name="" id="" />
                        <FaSearch className=" m-4" />
                </div>
                <div className="flex">
                    <div className=" m-3 ml-2 flex ">
                        <AiOutlineHeart className=" m-3 text-2xl  text-black font-medium hover:cursor-pointer" />
                        <AiOutlineShoppingCart className=" m-3 text-2xl  text-black font-medium hover:cursor-pointer" />
                        <User />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav 