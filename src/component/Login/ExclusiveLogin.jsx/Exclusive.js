import React from 'react'
import login from "../images/login.png"

function Exclusive() {
  return (
      <div>
          <h1>Log in to Exckusive</h1>
          <p>Enter your details below</p>

          <input type='text' placeholder='Email or phonr Number' />
          <input type='password' placeholder='Password />' />
          <div>
              <button>
                  Login
              </button>
              <a href='a'>Forget Password</a>
        </div>
         
    </div>
  )
}

export default Exclusive

