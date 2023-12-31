import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import { BiSolidWatch, BiHeadphone, BiGame, BiLaptop } from "react-icons/bi";

function ItemCategory() {
  const myStyle = {
    main: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
    },
  };
  return (
    <div className=" lg:flex justify-center sm:grid sm:grid-cols-3 ">
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <FaPhoneSquareAlt className=" text-5xl" />
        <h1>Phone</h1>
      </div>
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <BiLaptop className=" text-5xl" />
        <h1>Computers</h1>
      </div>
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <BiSolidWatch className=" text-5xl" />
        <h1>SmartWatch</h1>
      </div>
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <AiFillCamera className=" text-5xl" />
        <h1>Camera</h1>
      </div>
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <BiHeadphone className=" text-5xl" />
        <h1>HeadPhones</h1>
      </div>
      <div className=" border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid">
        <BiGame className=" text-5xl" />
        <h1>Gaming</h1>
      </div>
    </div>
  );
}

export default ItemCategory;

// const database = [
//     {
//         id:1,
//     phone: <FaPhoneSquareAlt />,
//     title: "Phone"
//     },
//     {
//             id:2,
//     phone: <BiLaptop />,
//     title: "Computer"
//     },
//     {
//                 id:3,
//     phone: <BiSolidWatch />,
//     title: "SmartWatch"
//     },
//     {
//                     id:4,
//     phone: <AiFillCamera />,
//     title: "Camera"
//     },
//     {
//                         id:5,
//     phone: <BiHeadphone />,
//     title: "HeadPhones"
//     },
//     {
//                             id:6,
//     phone: <BiGame />,
//     title: "Gaming"
//     },
// ]

// function ItemCategory({ data }) {
//     const {phone, title} = data
//   return (
//       <div className=' m-10 mr-3 justify-center text-center flex w-48'>
//           {database.map((data) => {
//               return (

//                   <div key={data.id} className=' border sm:w-32 xl:w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid'>
//               <div className=' text-5xl'>
//               {phone}
//               </div>
//               <h1>{ title}</h1>
//           </div>
//                   )
//         })}
