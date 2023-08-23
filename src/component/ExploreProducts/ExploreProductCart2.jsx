import React from 'react'
import {FaEye, FaHeart, FaStar} from "react-icons/fa"

function ExploreProductCart2({props}) {
 const {img, title, price, productLeft, upper} = props
  return (
    <React.Fragment>
      <div className='m-5 bg-[#F5F5F5] center'>
          <div className= {`w-60 p-3 h-60 `}>
                  <div className={` flex justify-between`}>  
                    <div>
              <h4 className={`  bg-red-800`}>{upper}</h4>
          </div>            
          <div className='mt-10'>
            <img src={img} alt={title} />
          </div>
          <div>
              <div className='bg-white p-1 rounded-full'>
                <FaHeart />
              </div>
              <div className='bg-white p-1 rounded-full mt-3'>                  
              <FaEye />
              </div>
              </div>
          </div>
              {/* <div className='text-center bg-black text-white w-50'>
                  <h1>Add to cart</h1>
              </div> */}
                
          </div> <br />
          <div>
              <h4>{title} </h4>
              <div className='flex'>
                        <div className='mr-2 text-red-700 bold'>
                        {price}
                        </div>
              </div>
              <div className='flex items-center'>
                 <div className='flex mr-2'> 
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
              <FaStar className='text-yellow-400' />
                  </div>
            <p>{productLeft}</p>
              </div>
              </div>
              <div>
                  <div></div>
                  <div className=' w-5 h-5 bg-[#DB4444] rounded-full'></div>
              </div>
            </div>
            
      </React.Fragment>
  )
}

export default ExploreProductCart2