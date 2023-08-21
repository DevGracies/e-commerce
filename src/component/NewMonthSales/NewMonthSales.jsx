import React from 'react'
import img from "../images/Frame600.png"

function NewMonthSales() {
  return (
      <div>
           <div className=' bg-red-800 w-5 rounded-sm ml-3 mt-12 mb-10 h-10 '>
          <h3 className=' text-2xl text-red-700 ml-8 w-max'> This Month</h3>
          </div>
          <div className='flex items-center justify-between'>
        <div className='flex'>
          <h1 className='mr-2 text-5xl font-bold leading-none ml-3'> Best Selling Products</h1>
        </div>
              <div className=''>
                <button className='text-white bg-red-700 w-28 mr-6 h-10 rounded'> View All</button>
              </div>
          </div>
          <div className='flex m-10 justify-center'>
          <img src={img} alt="" />
          </div>
    </div>
  )
}

export default NewMonthSales