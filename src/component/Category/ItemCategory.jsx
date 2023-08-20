import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa"
import { AiFillCamera } from "react-icons/ai"
import {BiSolidWatch, BiHeadphone, BiGame, BiLaptop } from "react-icons/bi"

function ItemCategory() {
  return (
      <div className='flex m-10 mr-3 justify-center text-center'>
          <div className=' border w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid'>
              <FaPhoneSquareAlt className=' text-5xl' />      
              <h1>Phone</h1>
          </div>
          <div className=' border w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid'>
              <BiLaptop className=' text-5xl' />
              <h1>Computers</h1>
          </div>
          <div className=' border w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid'>
              <BiSolidWatch className=' text-5xl' />
              <h1>SmartWatch</h1>
          </div>
          <div className=' border w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid'>
              <AiFillCamera className=' text-5xl' />
              <h1>Camera</h1>
          </div>
          <div className=' border w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid'>
              <BiHeadphone className=' text-5xl' />
              <h1>HeadPhones</h1>
          </div>
          <div className=' border w-30 p-5 m-5 hover:bg-red-700 rounded hover:text-white  border-solid'>
              <BiGame className=' text-5xl' />
              <h1>Gaming</h1>
          </div>
    </div>
  )
}

export default ItemCategory