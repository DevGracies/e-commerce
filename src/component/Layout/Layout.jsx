import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Navigation/Header'

function Layout({children}) {
  return (
      <div>
          <Header />
          {children}
          <Footer />
    </div>
  )
}

export default Layout