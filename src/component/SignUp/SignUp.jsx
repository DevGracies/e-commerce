import React, { useState } from 'react'
import {FaGoogle} from "react-icons/fa"
function SignUp() {
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
      <div className='w-70'>
          <h2 className=' text-4xl text-center mt-3 mb-3'>Create an account</h2>
          <h6 className=' text-xl text-center'>Enter your details below</h6>
          <form onSubmit={submitForm} className=' justify-center grid self-center items-center'>
              <div>
                    <input type="text"
                className='  border-b-2 w-72 border-black m-10'
                  placeholder='Name'
                  value={name}
                    />
              </div>
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
                    <div className='flex justify-center'>
                  <button onClick={checkform} className=' bg-red-700 text-white font-medium w-64 p-2 rounded'>Create Account</button>
                    </div>
                    <div className=' m-2 flex justify-center '>
                        <button className='flex items-center font-medium w-64 p-2 border-2 rounded'>
                        <FaGoogle className='mr-4' />                            
                            Sign up with Google
                        </button>
                  </div>
                  <div className='flex justify-center'>
                  <h4>Already have an account?</h4>
                      <button className='font-medium ml-3'>Log in</button>
                  </div>
              </div>
          </form>
    </div>
  )
}


export default SignUp
