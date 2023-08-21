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
        if (name === 'enail') {
            setEmail(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    function submitForm(e) {
        
    }
    return (
      <div>
          <h2>Create an account</h2>
          <h6>Enter your details below</h6>
          <form onSubmit={submitForm}>
              <div>
                  <input type="text"
                  placeholder='Name'
                  value={name}
                    />
              </div>
              <div>
                    <input type="text"
                        placeholder='Email or Phone Number'
                        value={email}
                    />
              </div>
              <div>
                    <input type='password'
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