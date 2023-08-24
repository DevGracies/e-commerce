import React from "react";
import FirstWishlist from "./FirstWishlist";
import SecondWishlist from "./SecondWishlist";
// import {} from "react-icons/fa"
import { Wishlist1 } from "../../Data/WishlistData1";
import { Wishlist2 } from "../../Data/WishlistData2";
function Wishlist() {
  return <div>{Wishlist1 && Wishlist1}</div>;
}

export default Wishlist;

// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa"
// import Heart from "./Heart";
// import { AiOutlineShoppingCart } from "react-icons/ai"
// import User from "./User";
// import { Link } from "react-router-dom";

// function Nav() {
//     const [click, setClick] = useState(true)

//     const onSetClick = () => {
//         setClick(!click)
//     }
//     return (
//         <div className="border-b p-4 flex justify-between items-center " >

//             <div className="m-1 bg-black  p-4 font-bold xl:hidden sm:inline
//              rounded-full cursor-pointer text-white" onClick={onSetClick}>&#9776;</div>
//             <h1 className=" m-1 text-4xl p-0 text-black font-bold">Exclusive</h1>
//             {click && (
//                 <ul className=" sm:bg-[#ffffff50] sm:pt-28 xl:pt-0 backdrop-blur-sm sm:grid xl:flex sm:h-screen xl:h-auto sm:top-0 xl:top-auto
//                 right-0 xl:right-auto sm:fixed pr-10 xl:pr-0 xl:z-auto
//                 z-10 cursor-pointer list-none">
//                     <Link to="/" className="text-2xl  hover:bg-black h-10 pl-3 ml-3 xl:h-auto Xl:pl-0 xl:ml-auto
//                  rounded hover:text-white text-black font-medium"> Home </Link>
//                     <Link to="/Contact" className=" text-2xl  text-black h-10 pl-3 ml-3 pr-3 rounded font-medium  xl:h-auto Xl:pl-0 xl:ml-auto
//                  hover:bg-black hover:text-white"> Contact </Link>
//                     <Link className=" text-2xl  xl:h-auto Xl:pl-0 xl:ml-auto  text-black font-medium
//                 h-10 pl-3 ml-3 pr-2 rounded hover:bg-black hover:text-white" to="/About" > About </Link>
//                     <Link to="/SignUp" className=" text-2xl  xl:h-auto Xl:pl-0 xl:ml-auto
//                  text-black h-10 pl-3 ml-3 pr-3 rounded hover:bg-black hover:text-white font-medium"> Sign-Up </Link>
//             </ul>
//                     )}
//             <div className='flex  text-lg font-medium text-black '>
//                 <div className="xl:flex sm:hidden m-3 flex rounded-xl items-center bg-slate-100 h-10">
//                     <input className=' sm:h rounded-xl focus:outline-none text-sm p-1 bg-slate-100 h-10'
//                         type="text" placeholder="What are you looking for? " name="" id="" />
//                         <FaSearch className=" m-4" />
//                 </div>
//                 <div className="flex">
//                     <div className=" m-3 ml-2 flex ">
//                         <Heart />
//                         <AiOutlineShoppingCart className=" m-3 text-2xl  text-black font-medium hover:cursor-pointer" />
//                         <User />
//                     </div>
//                 </div>
//                 </div>
//         </div>
//     )
// }

// export default Nav
