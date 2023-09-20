// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ps from "./ps.jpg";
// import tv from "./tv.jpg";
// import style from "./cart.module.css";
// import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
// function Cart() {
//   const [Count, setCount] = useState(0);
//   const [Count2, setCount2] = useState(0);
//   const click = () => {
//     setCount(Count + 1);
//   };
//   const click2 = () => {
//     setCount(Count2 + 1);
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-between">
//         <div className="flex m-5 ">
//           <Link to="/" className=" text-gray-400">
//             Home
//           </Link>
//           <h2 className="ml-2">/ Cart </h2>
//         </div>
//         <div>
//           <h1 className=" font-semibold text-xl m-10"> &#x2715;</h1>
//         </div>
//       </div>
//       <table className={style.table}>
//         <tr className=" m-16 flex justify-between rounded shadow-xl ">
//           <th>Product</th>
//           <th className=" ml-14">Price</th>
//           <th className=" ml-14">Quantity</th>
//           <th>Subtotal</th>
//         </tr>
//         <tr className=" m-16 items-center  flex justify-between rounded shadow-xl ">
//           <td className="flex items-center">
//             <img src={tv} alt="" className=" w-10 h-10" />
//             <h2 className="ml-3">LCD Monitor</h2>
//           </td>
//           <td>$650</td>
//           <td>
//             <div className=" border-2 w-16 h-10 items-center bg-white border-gray-5 border-[#00000066] rounded-md flex justify-between">
//               <h1 className=" font-medium text-xl">{Count}</h1>
//               <div className=" text-2xl">
//                 <RiArrowDropUpLine
//                   onClick={click}
//                   className=" cursor-pointer mt-2"
//                 />
//                 <RiArrowDropDownLine
//                   onClick={() => setCount(Count - 1)}
//                   className=" cursor-pointer mb-2"
//                 />
//               </div>
//             </div>
//           </td>
//           <td>$650</td>
//         </tr>
//         <tr className=" m-16 items-center  flex justify-between rounded shadow-xl ">
//           <td className="flex items-center">
//             <img src={ps} alt="" className=" w-10 h-10" />
//             <h2 className="ml-3">LCD Monitor</h2>
//           </td>
//           <td>$650</td>
//           <td>
//             <div className=" border-2 w-16 h-10 items-center bg-white border-gray-5 border-[#00000066] rounded-md flex justify-between">
//               <h1 className=" font-medium text-xl">{Count2}</h1>
//               <div className=" text-2xl">
//                 <RiArrowDropUpLine
//                   onClick={click2}
//                   className=" cursor-pointer mt-2"
//                 />
//                 <RiArrowDropDownLine
//                   onClick={() => setCount2(Count2 - 1)}
//                   className=" cursor-pointer mb-2"
//                 />
//               </div>
//             </div>
//           </td>
//           <td>$650</td>
//         </tr>
//       </table>
//       <div className=" flex items-center justify-between m-16">
//         <button className=" gap-3 h-14 w-32 rounded border-2 scroll-mx-4 scroll-my-12">
//           View All Products
//         </button>
//         <button className=" gap-3 h-14 w-32 rounded border-2 scroll-mx-4 scroll-my-12">
//           View All Products
//         </button>
//       </div>
//       <div className="flex justify-between m-16">
//         <div className="flex">
//           <h2 className=" w-80 h-14 rounded border">Coupon Code</h2>
//           <button className=" bg-[#DB4444] text-white w-56 h-14 rounded scroll-mx-4 scroll-my-12 gap-3">
//             View All Products
//           </button>
//         </div>
//         <div className=" w-96 h-80 rounded border">
//           <h1 className=" m-5 font-medium text-xl">Cart Total</h1>
//           <div className=" m-5 flex items-center justify-between">
//             <h1 className=" font-medium text-xl">Subtotal:</h1>
//             <h1 className=" font-medium text-xl">$1750</h1>
//           </div>
//           <div className=" m-5 flex items-center justify-between">
//             <h1 className=" font-medium text-xl">Shipping:</h1>
//             <h1 className=" font-medium text-xl">Free</h1>
//           </div>
//           <div className=" m-5 flex items-center justify-between">
//             <h1 className=" font-medium text-xl">Total:</h1>
//             <h1 className=" font-medium text-xl">$1750</h1>
//           </div>
//           <button className=" m-5 w-72 h-14 top-56 left-20  bg-[#DB4444]  rounded gap-3 scroll-mx-4 scroll-my-12">
//             View All Products
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;
import React from "react";

function Cart() {
  return <div>Cart</div>;
}

export default Cart;
