import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <div className="flex w-32 h-5 m-16">
        <Link to="/">Home</Link>
        <h2>/ Contact</h2>
      </div>
      <div className="flex justify-center m-16">
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
