import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaVoicemail } from "react-icons/fa";
function Contact() {
  return (
    <div>
      <div className="flex items-center w-32 h-5 m-16">
        <Link to="/">Home</Link>
        <h2 className=" font-bold">/ Contact</h2>
      </div>
      <div className="flex items-center justify-center m-16">
        <div className=" w-80 h-96 rounded shadow-lg bg-[#FFFFFF]">
          <div className=" w-64 h-80">
            <div className=" w-64 h-28 gap-6">
              <div className="flex items-center">
                <div className="">
                  <FaPhone className=" bg-[#DB4444] rounded-full text-white text-center" />
                </div>
                <h2 className=" w-20 font-medium text-sm ml-2">Call To Us</h2>
              </div>
              <h2 className=" font-normal text-sm w-64 h-5">
                We are available 24/7, 7 days a week.
              </h2>
              <h2 className=" font-normal text-sm w-64 h-5">
                Phone: +8801611112222
              </h2>
            </div>
            <div className=" w-60 h-44 gap-6">
              <div className="flex items-center">
                <div className="">
                  <FaEnvelope className="bg-[#DB4444] rounded-full text-white text-center" />
                </div>
                <h2 className=" w-20 font-medium text-sm ml-2">Write To Us</h2>
              </div>
              <h2 className=" font-normal text-sm w-64 h-5">
                Fill out our form and we will contact you within 24 hours.
              </h2>
              <h2 className=" font-normal text-sm w-64 h-5">
                Emails: customer@exclusive.com
              </h2>
              <h2 className=" font-normal text-sm w-64 h-5">
                Emails: support@exclusive.com
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full h-3/5 ml-16 rounded shadow-lg">
          <form className=" w-11/12 h-96 gap-8 justify-center self-center">
            <div className="flex items-center w-11/12 h-14">
              <input
                type="text"
                className="w-60 h-14 ml-2 text-black bg-slate-300 rounded"
                placeholder="Your Name*"
              />
              <input
                type="text"
                className="w-60 h-14 ml-2 text-black bg-slate-300 rounded"
                placeholder="Your Name*"
              />
              <input
                type="text"
                className="w-60 h-14 ml-2 text-black bg-slate-300 rounded"
                placeholder="Your Name*"
              />
            </div>
            <textarea
              className=" bg-slate-300 w-5/6 h-52  mt-5 rounded text-black"
              placeholder="Your Message"
            ></textarea>
            <button className="bg-[#DB4444] text-white left-6 rounded w-52 h-14 gap-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
