import React from 'react'
import Countdown from './Countdown'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
function FlashSales() {
  return (
    <div>
      <div>
          <h3>Today's</h3>
      </div>
      <div className='flex justify-between'>
        <div className='flex'>
          <h1 className='mr-2'> Flash sales</h1>
          <Countdown />
        </div>
              <div className='flex'>
          <FaArrowLeft />
          <FaArrowRight className='ml-3' />
              </div>
          </div>
    </div>
  )
}

export default FlashSales