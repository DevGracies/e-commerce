import React from "react";
import side from "../component/images/side.png";
import LastArrival from "../NewArrival/LastArrival";
import People from "./People";
import { Link } from "react-router-dom";
import Price from "./Price";
function About() {
  return (
    <div>
      <div className="flex items-center w-32 h-5 m-16">
        <Link to="/">Home</Link>
        <h2 className=" font-bold">/ About</h2>
      </div>
      <div>
        <div className="xl:flex xl:justify-between items-center ">
          <div className=" xl:max-w-xl p-4 text-start">
            <h1 className=" text-3xl ml-3 font-bold p-3">Our Story</h1>
            <p className="ml-3 p-3">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <br />
            <p className="ml-3 p-2">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img src={side} alt="" />
        </div>
      </div>
      <Price />
      <People />
      <LastArrival />
    </div>
  );
}

export default About;
