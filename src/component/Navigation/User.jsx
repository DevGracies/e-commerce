import React, {useState} from 'react'
import { AiFillExclamationCircle, AiFillStar, AiOutlineLogout, AiOutlineUser } from "react-icons/ai"
import { FaJediOrder } from "react-icons/fa"

function User() {
 const [first, setfirst] = useState(false)
  return (
    <div>
      <div className=" p-2  text-black font-medium hover:rounded-full 
         hover:cursor-pointer text-2xl hover:bg-[#DB4444] m-1">

      <AiOutlineUser 
      onClick={() => setfirst(!first)}
      />
      </div>
      {first && (
        <div className=' origin-top-right absolute right-0 mt-5  mr-10 text-white rounded-md shadow-lg
        bg-[#0000000A] backdrop-blur-lg h-60 w-72 hover:text-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'
        >
          <div className='py-1'>
            <a href="#" className='group flex items-center px-4 py-2  hover:bg-white hover:text-black'>
              <AiOutlineUser className='mr-3 h5 w-5' aria-hidden="true" />
              <div className=' text-xl'>
              Manage My Account
              </div>
            </a>
             <a href="#" className='  hover:bg-white hover:text-black group flex items-center px-4 py-2'>
              <FaJediOrder className='mr-3 h5 w-5' aria-hidden="true" />
              <div className=' text-xl'>
              My Order
              </div>
            </a>
             <a href="#" className=' hover:bg-white hover:text-black group flex items-center px-4 py-2'>
              <AiFillExclamationCircle className='mr-3 h5 w-5' aria-hidden="true" />
              <div className=' text-xl'>
              My Cancellations
              </div>
            </a>
             <a href="#" className=' hover:bg-white hover:text-black group flex items-center px-4 py-2'>
              <AiFillStar className='mr-3 h5 w-5' aria-hidden="true" />
              <div className=' text-xl'>
              My Reviews
              </div>
            </a>
             <a href="#" className=' hover:bg-white hover:text-black group flex items-center px-4 py-2'>
              <AiOutlineLogout className='mr-3 h5 w-5' aria-hidden="true" />
              <div className=' text-xl'>
              Logout
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default User