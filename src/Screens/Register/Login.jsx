import React, { useState } from "react";
import login from "../images/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelChange = (e) => {
    const { name, value } = e.target;
    if (name === "Email") {
      setEmail(value);
    }
    if (name === "Password") {
      setPassword(value);
    }
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: password,
    };
    console.log(obj);
  };
  return (
    <div className="w-70 m-10 xl:flex xl:justify-between">
      <div className=" sm:hidden xl:inline" alt="login page">
        <img src={login} alt="" />
      </div>
      <form
        className="justify-center grid self-center items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl text-center mt-3 mb-3">Log in to Exclusive</h1>
        <h6 className=" text-xl text-center">Enter your details below</h6>
        <input
          className="border-b-2 w-72 outline-none border-black m-10"
          type="text"
          value={email}
          name="Email"
          onChange={handelChange}
          placeholder="Email or Phone Number"
        />
        <input
          className="border-b-2 w-72 outline-none border-black m-10"
          type="text"
          value={password}
          name="Password"
          onChange={handelChange}
          placeholder="Password"
        />
        <div className="flex justify-between">
          <Link
            to="/Body"
            className=" bg-[#DB4444] text-white font-medium w-40 p-2 rounded text-center"
          >
            {/* <button
              type="submit"
              className=" bg-[#DB4444] text-white font-medium w-40 p-2 rounded"
            >
            </button> */}
            Login
          </Link>
          <button>Forget Password</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
