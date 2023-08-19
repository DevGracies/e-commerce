import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import FlashSales from '../Flash sales/FlashSales'
import Product from '../Product/Product'
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
                <button className={styles.button}>
                    View All Products
                </button>
            </div>
    </div>
  )
}

export default Home