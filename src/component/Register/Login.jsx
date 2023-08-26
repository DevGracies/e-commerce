import React, { useState } from "react";
import login from "../images/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelChange = (e) => {
    const { name, value } = e.target;
  };
  return (
    <div className="xl:flex">
      <div className="">
        <img src={login} alt="" />
      </div>
      <div className="">
        <h1>Log in to Exclusive</h1>
        <h6>Enter your details below</h6>
        <input
          type="text"
          value={email}
          name="Email"
          id="Email"
          onChange={handelChange}
          placeholder="Email or Phone Number"
        />
        <input
          type="text"
          value={password}
          name="Password"
          id="Password"
          onChange={handelChange}
          placeholder="Password"
        />
        <div className="">
          <button>Login</button>
          <button>Forget Password</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
