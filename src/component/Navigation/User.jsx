import React, {useState} from 'react'
import { AiFillExclamationCircle, AiFillStar, AiOutlineLogout, AiOutlineUser } from "react-icons/ai"
import { FaJediOrder } from "react-icons/fa"


function User() {
 const [first, setfirst] = useState(false)
  return (
      <div>
      <AiOutlineUser className=" m-3  text-black font-medium hover:rounded-full 
         hover:cursor-pointer text-2xl hover:bg-red-400 hover:text-white"
      onClick={() => setfirst(!first)}
      />

      {first && (
        <div className=' origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg
        bg-gray-400 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'
        >
          <div className='py-1'>
            <a href="#" className='group flex items-center px-4 py-2 text-white'>
              <AiOutlineUser className='mr-3 h5 w-5 text-white' aria-hidden="true" />
              Manage My Account
            </a>
             <a href="#" className='group flex items-center px-4 py-2 text-white'>
              <FaJediOrder className='mr-3 h5 w-5 text-white' aria-hidden="true" />
              My Order
            </a>
             <a href="#" className='group flex items-center px-4 py-2 text-white'>
              <AiFillExclamationCircle className='mr-3 h5 w-5 text-white' aria-hidden="true" />
              My Cancellations
            </a>
             <a href="#" className='group flex items-center px-4 py-2 text-white'>
              <AiFillStar className='mr-3 h5 w-5 text-white' aria-hidden="true" />
              My Reviews
            </a>
             <a href="#" className='group flex items-center px-4 py-2 text-white'>
              <AiOutlineLogout className='mr-3 h5 w-5 text-white' aria-hidden="true" />
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default User