import React, { useState } from 'react'
import FaAngleRight from "react-icons/fa"

function Sidebar() {
  const [click, setClick] = useState(true)

  return (
    <div className={`${click ? "w-72" : "w-20"} w-72 h-screen bg-blue-100`}  onclick={() => {setClick(!click) }} >
          <ul className=''>
              <li>Woman’s Fashion <FaAngleRight  /> </li>
              <li>Men’s Fashion  <FaAngleRight /></li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine </li>
              <li>Sports & Outdoor </li>
              <li>Baby's & Toy </li>
              <li>Groceries & pots </li>
              <li>Health & Beauty </li>
          </ul>
    </div>
  )
}

export default Sidebar