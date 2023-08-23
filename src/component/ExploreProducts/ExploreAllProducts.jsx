import React from 'react'
import ExploreProduct from './ExploreProduct'
import ExploreProductCart from './ExploreProductCart'
import ExploreProductCart2 from './ExploreProductCart2'
import { Data } from '../Data/Data'
import { Data2 } from '../Data/Data2'

function ExploreAllProducts() {
  return (
      <div>
          <ExploreProduct />
          <div className=' lg:flex  grid grid-cols-1 justify-center md:grid md:grid-cols-2'>
              {Data && Data.map((data) => {
                  return <ExploreProductCart key={data.id} props={data} />
              })}
          </div>
          <div className=' lg:flex  grid grid-cols-1 justify-center md:grid md:grid-cols-2'>
              {Data2 && Data2.map((data) => {
                  return <ExploreProductCart2 key={data.id} props={data} />
              })}
          </div>
          <div className='flex justify-center'>
              
          <button className='w-50 h-15 p-4 m-10 rounded gap-3 bg-[#DB4444]'>View All Products</button>
          </div>
    </div>
  )
}

export default ExploreAllProducts