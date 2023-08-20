import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import FlashSales from '../Flash sales/FlashSales'
import Product from '../Product/Product'
import Category from '../Category/Category'
import NewMonthSales from '../NewMonthSales/NewMonthSales'
import { Sales } from '../Data/Sales'
import styles from './Home.module.css'
function Home() {
  return (
    <div>
      <Sidebar />
      <FlashSales />
      <div>
      <div className='flex'>      
      {Sales && Sales.map((sales) => {
        return <Product key={sales.id} props={sales} />
      })}
        
        </div>
        <div className=' text-center m-10'>          
                <button className={styles.button}>
                    View All Products
                </button>
      </div>
      </div>
      <Category />
      <NewMonthSales />
    </div>
  )
}

export default Home