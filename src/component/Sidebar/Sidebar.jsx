import React, {useState} from 'react'
import img from "../images/Frame560.jpg"
import { FaAngleRight } from "react-icons/fa"


function Sidebar() {
  const [open, setOpen] = useState(true)
  return (
    <div className='flex'>
      <div className={`${open ? "w-72" : "w-20"} duration-100 h-90 bg-blue-800`} >
        <ul className='p-5'>
              <li className='flex justify-between items-center'> <li  className={`${!open && "hidden"} p-1`}>
              Woman’s Fashion 
              </li>
              <FaAngleRight className={`cursor-pointer rounded-full ${!open && "rotate-180"}`} 
              onClick={() => setOpen(!open)}  /></li>
              <li className='flex justify-between items-center'> <li  className={`${!open && "hidden"} p-1`}>
              Men’s Fashion  
              </li>
              <FaAngleRight className={`cursor-pointer rounded-full ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}  /></li>
              <li  className={`${!open && "hidden"} p-1`}>Electronics</li>
              <li  className={`${!open && "hidden"} p-1`}>Home & Lifestyle</li>
              <li  className={`${!open && "hidden"} p-1`}>Medicine </li>
              <li  className={`${!open && "hidden"} p-1`}>Sports & Outdoor </li>
              <li  className={`${!open && "hidden"} p-1`}>Baby's & Toy </li>
              <li  className={`${!open && "hidden"} p-1`}>Groceries & pots </li>
              <li  className={`${!open && "hidden"} p-1`}>Health & Beauty </li>
          </ul>
      </div>
      <div>
        <img src={img} alt="" className='h-80 m-5 ml-20' />
      </div>
    </div>
  )
}

export default Sidebar