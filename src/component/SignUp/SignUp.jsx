import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import login from "../images/login.png";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkform = (e) => {
    const { name, value } = e.target;
    console.log(value);
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  function submitForm(e) {
    e.preventDefault();
    const obj = {
      name: name,
      email: email,
      password: password,
    };
    console.log(obj);
  }

  return (
    <>
      <div className="w-70 m-10 xl:flex xl:justify-between">
        <div>
          <img src={login} className=" sm:hidden xl:inline" alt="login page" />
        </div>
        <div>
          <h2 className=" text-4xl text-center mt-3 mb-3">Create an account</h2>
          <h6 className=" text-xl text-center">Enter your details below</h6>
          <form
            onSubmit={submitForm}
            className=" justify-center grid self-center items-center"
          >
            <div>
              <input
                type="text"
                className="border-b-2 w-72 outline-none border-black m-10"
                placeholder="Name"
                name="name"
                value={name}
                onChange={checkform}
              />
            </div>
            <div>
              <input
                type="text"
                className=" outline-none border-b-2 w-72 m-10 border-black"
                placeholder="Email or Phone Number"
                name="email"
                value={email}
                onChange={checkform}
              />
            </div>
            <div>
              <input
                type="password"
                className=" outline-none border-b-2 w-72 m-10 border-black"
                placeholder="Password"
                name="password"
                value={password}
                onChange={checkform}
              />
            </div>
            <div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" bg-[#DB4444] text-white font-medium w-64 p-2 rounded"
                >
                  Create Account
                </button>
              </div>
              <div className=" m-2 flex justify-center ">
                <button className="flex items-center font-medium w-64 p-2 border-2 rounded">
                  <FaGoogle className="mr-4" />
                  Sign up with Google
                </button>
              </div>
              <div className="flex justify-center">
                <h4>Already have an account?</h4>
                <Link to="/Login" className="font-medium ml-3">
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
