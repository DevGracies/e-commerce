import React, { useState } from 'react'
import login from "../images/login.png"
function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function checkform(e) {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value)
        }
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    function submitForm(e) {
      e.preventDefault()
      const obj = {
        name: name,
        email: email,
        password: password

      }
      console.log(obj)

    }
    return (
      <>
        <div className='w-70 m-10 xl:flex xl:justify-between'>
        <div>
            <img src={login} className=' sm:hidden xl:inline' alt="login page" />
        </div>
        <div>
          <h2 className=' text-4xl text-center mt-3 mb-3'>Log in to Exckusive</h2>
            <h6 className=' text-xl text-center'>Enter your details below</h6>
          <form onSubmit={submitForm} className=' justify-center grid self-center items-center'>
              <div>
                    <input type="text"
                            className='  border-b-2 w-72 m-10 border-black'
                        placeholder='Email or Phone Number'
                        value={email}
                    />
              </div>
              <div>
                    <input type='password'
                        className='  border-b-2 w-72 m-10 border-black'
                        placeholder='Password'
                        value={password} 
                    />
              </div>
                <div>
                <div className=' m-2 flex justify-center '>
                        <button className='flex items-center font-medium w-64 p-2 border-2 rounded'>
                       Log in                            
                        </button>
                   <a href='a' className='text-red'>Forget Password</a>
                  </div>
              </div>
          </form>
        </div>
        </div>
    </>
  )
}


export default Login
