import React from "react";
import {
  FaGooglePlay,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import code from "../images/code.png";
import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" h-20">
      <div className=" sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid xl:grid-cols-5 bg-black text-white p-3 ">
        <div className="p-5"> 
          <h1 className=" text-xl font-medium">Exclusive</h1>
          <h4 className="mt-1">Subscribe</h4>
          <p className="mt-1">Get 10% off your first order</p>
          <button className="flex mt-2 p-1 border-white items-center border-2 rounded">
            Enter your email
            <FaGooglePlay className=" ml-2" />
          </button>
        </div>
        <div className="p-5">
          <h1 className=" text-xl font-medium mb-2">Support</h1>
          <h4 className="mb-1">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h4>
          <a href="/">exclusive@gmail.com</a>
          <p className="mt-1">+88015-88888-9999</p>
        </div>
        <div className="inline-block p-5">
          <h1 className=" text-xl font-medium">Account</h1>
          <ul>
            <Link to="/Account">My Account</Link>
            <br />
            <Link to="/Login">Login/</Link>
            <Link to="/SignUp">Register</Link>
            <br />
            <Link to="/Cart">Cart</Link>
            <br />
            <Link to="/Wishlist">Wishlist</Link>
            <br />
            <Link to="/Shop">Shop</Link>
          </ul>
        </div>
        <div className="p-5">
          <h1 className=" mb-2 text-xl font-medium">Quick Link</h1>
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
        <div className="p-5">
          <h1 className=" text-xl font-medium">Download App</h1>
          <h4>Save $3 with App New User Only</h4>
          <div className="flex mt-2">
            <div>
              <img src={code} alt="" />
            </div>
            <div className=" ml-3 inline-block">
              <img src={playstore} alt="" className="mb-1" />
              <img src={appstore} alt="" />
            </div>
          </div>
          <div className="flex mt-2">
            <FaFacebook className="text-2xl mr-3" />
            <FaTwitter className="text-2xl mr-3" />
            <FaInstagram className="text-2xl mr-3" />
            <FaLinkedin className="text-2xl mr-3" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
