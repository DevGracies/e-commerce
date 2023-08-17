import React from 'react'

function FlashSales() {
  return (
      <div>
          <h3>Today's</h3>
          <div>
              <h1>Flash sales</h1>
              <div>
                  <h6>Days</h6>
                  {Date()}
              </div>
          </div>
    </div>
  )
}

export default FlashSales