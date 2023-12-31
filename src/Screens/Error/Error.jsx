import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <div className=" flex m-20">
        <button className=" bg-black text-white rounded p-5">Click me</button>
        <Link to="/">Home</Link>
        <p className=" font-semibold ml-1">/ 404 Error</p>
      </div>
      <div className=" text-center m-20">
        <h1 className=" tracking-widest p-2 mb-16 font-semibold text-8xl">
          404 Not Found
        </h1>
        <p className=" font-bold mb-14">
          You visited the page not found You may go home page
        </p>
        <Link to="/">
          <button className="bg-[#DB4444] w-60 h-10 text-white rounded">
            Back to home page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
