import React, { useState } from 'react'

function Form() {
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
    }
    return (
      <div className='w-70'>
          <h2 className=' text-4xl text-center mt-3 mb-3'>Create an account</h2>
          <h6 className=' text-xl text-center'>Enter your details below</h6>
          <form onSubmit={submitForm} className=' justify-center'>
              <div>
                    <input type="text"
                className='  border-b-2 w-96 border-black m-10'
                  placeholder='Name'
                  value={name}
                    />
              </div>
              <div>
                    <input type="text"
                            className='  border-b-2 w-96 m-10 border-black'
                        placeholder='Email or Phone Number'
                        value={email}
                    />
              </div>
              <div>
                    <input type='password'
                        className='  border-b-2 w-96 m-10 border-black'
                        placeholder='Password'
                        value={password}
                    />
              </div>
              <div>
                  <button onClick={checkform}>Create Account</button>
                  <div>
                      <button>Sign up with Google</button>
                  </div>
                  <div>
                  <h4>Already have an account?</h4>
                      <button>Log in</button>
                  </div>
              </div>
          </form>
    </div>
  )
}

export default Form