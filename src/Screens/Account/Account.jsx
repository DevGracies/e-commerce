import React from "react";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className="flex">
          <Link to="/">Home</Link>
          <h2 className=" font-bold">/ My Account</h2>
        </div>
        <h2>
          Welcome! <span className="text-[#DB4444]">Md Rimel</span>
        </h2>
      </div>

      <div className="flex justify-between p-5 m-5">
        <div className=" m-10">
          <h2 className=" font-bold w-40 h-6">Manage My Account</h2>
          <ul className=" w-40 h-20">
            <li className=" text-[#DB4444]">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h2 className=" font-bold w-40 h-6">My Orders</h2>
          <ul className=" w-40 h-20">
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <h2>My Wishlist</h2>
        </div>
        <div className=" w-[870px] m-10 p-10 h-[630px] border-r-4 shadow-[0px 1px 13px 0px #0000000D] shadow-lg">
          <h1 className=" ml-8 w-36 h-7 leading-7 font-medium text-[#DB4444]">
            Edit Your Profile
          </h1>
          <div className=" flex justify-between ">
            <div className="">
              <label className=" w-20 font-medium">First Name</label> <br />
              <input
                className=" bg-[#F5F5F5] border-none  w-72 h-12 mt-2"
                type="text"
                placeholder="Md"
              />
            </div>
            <div className="">
              <label className=" w-20 font-medium">Last Name</label> <br />
              <input
                className=" bg-[#F5F5F5] border-none  w-72 h-12 mt-2"
                type="text"
                placeholder="Rimel"
              />
            </div>
          </div>
          <div className=" flex justify-between ">
            <div className="">
              <label className=" w-20 font-medium">Email</label> <br />
              <input
                className=" bg-[#F5F5F5] border-none  w-72 h-12 mt-2"
                type="text"
                placeholder="rinelll@gmail.com"
              />
            </div>
            <div className="">
              <label className=" w-20 font-medium">Address</label> <br />
              <input
                className=" bg-[#F5F5F5] border-none  w-72 h-12 mt-2"
                type="text"
                placeholder="Kington, 5236, United State"
              />
            </div>
          </div>
          <h2 className="ml-8">Password Changes</h2>
          <div className="ml-8">
            <input
              className=" w-[710px]  bg-[#F5F5F5]  h-12 border-4"
              type="text"
              placeholder="Current Password"
            />
            <input
              className=" w-[710px]  bg-[#F5F5F5]  h-12 border-4"
              type="text"
              placeholder="New Password"
            />
            <input
              className=" w-[710px]  bg-[#F5F5F5]  h-12 border-4"
              type="text"
              placeholder="Confirm New Password"
            />
          </div>
          <div className=" text-right m-5">
            <button>Cancel</button>
            <button className=" ml-5 text-white rounded bg-[#DB4444] w-52 h-14">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
