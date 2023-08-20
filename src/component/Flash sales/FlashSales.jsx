import React from 'react'
import Countdown from './Countdown'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
function FlashSales() {
  return (
    <div>
      <div className=' bg-red-800 w-5 rounded-sm ml-3 mt-12 mb-10 h-10 '>
          <h3 className=' text-2xl text-red-700 ml-8'>Today's</h3>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <h1 className='mr-2 text-5xl font-bold leading-none ml-3'> Flash sales</h1>
          <Countdown />
        </div>
              <div className='flex mr-6 '>
          <FaArrowLeft className=' text-3xl hover:bg-black hover:text-white hover:rounded-full' />
          <FaArrowRight className='ml-3 text-3xl  hover:bg-black hover:text-white hover:rounded-full' /> 
              </div>
          </div>
    </div>
  )
}

export default FlashSales