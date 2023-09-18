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

      <div className="flex justify-between m-5">
        <div>
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
        <div className=" w-[870px] p-10 h-[630px] border-r-4 shadow-[0px 1px 13px 0px #0000000D] shadow-lg">
          <h1 className=" w-36 h-7 leading-7 font-medium">Edit Your Profile</h1>
          <div>
            <div>
              <label>First Name</label>
              <input type="text" placeholder="Md" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Rimel" />
            </div>
          </div>
          <div>
            <div>
              <label>Email</label>
              <input type="text" placeholder="rinelll@gmail.com" />
            </div>
            <div>
              <label>Address</label>
              <input type="text" placeholder="Kington, 5236, United State" />
            </div>
          </div>
        </div>
        <h2>Password Changes</h2>
        <input type="text" placeholder="Current Password" />
        <input type="text" placeholder="New Password" />
        <input type="text" placeholder="Confirm New Password" />
        <div>
          <button>Cancel</button>
          <button>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
