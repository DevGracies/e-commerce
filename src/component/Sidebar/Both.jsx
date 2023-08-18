import React from 'react'
import img from "../images/Frame560.png"
import Sidebar from './Sidebar'

function Both() {
  return (
      <div className='flex m-5'>
          <Sidebar />
          <img src={img} alt="pic" />
    </div>
  )
}

export default Both