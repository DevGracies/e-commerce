import React, { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import login from "../images/login.png";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:3004/posts",
  });
  useEffect(() => {
    const fetchPost = async () => {
      let resp = await client.get("password");
      setPosts(resp.data);
    };
    fetchPost();
  }, []);

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
    setLoading(true);

    setTimeout(() => {
      const obj = {
        name: name,
        email: email,
        password: password,
      };
      console.log(obj);
      setLoading(false);
    }, 3000);
  }

  // import React, { useState, useEffect } from 'react';

  // const App = () => {
  //    const [title, setTitle] = useState('');
  //    const [body, setBody] = useState('');
  //    const [posts, setPosts] = useState([]);

  //    // GET with Axios
  //    useEffect(() => {
  //       const fetchPost = async () => {
  //          let response = await client.get('?_limit=10');
  //          setPosts(response.data);
  //       };
  //       fetchPost();
  //    }, []);

  //    // Delete with Axios
  //    const deletePost = async (id) => {
  //       await client.delete(`${id}`);
  //       setPosts(
  //          posts.filter((post) => {
  //             return post.id !== id;
  //          })
  //       );
  //    };

  //    // Post with Axios
  //    const addPosts = async (title, body) => {
  //       let response = await client.post('', {
  //          title: title,
  //          body: body,
  //       });
  //       setPosts((posts) => [response.data, ...posts]);
  //    };

  //    const handleSubmit = (e) => {
  //       e.preventDefault();
  //       addPosts(title, body);
  //    };

  //    return (
  //       // ...
  //    );
  // };

  // export default App;

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
                {loading ? (
                  <Bars color="#DB4444" height="50" width="100" />
                ) : (
                  <button
                    type="submit"
                    className=" bg-[#DB4444] text-white font-medium w-64 p-2 rounded"
                  >
                    Create Account
                  </button>
                )}
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
