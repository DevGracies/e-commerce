import React from "react";

function Checkout() {
  return (
    <div>
      <div className=" flex">
        <h2>Account</h2>
        <h2>/ My Account</h2>
        <h2>/ Product</h2>
        <h2>/ ViewCart</h2>
        <h2>/ Checkout</h2>
      </div>
      <div className="flex justify-between">
        <div>
          <h1>Billing Details</h1>
          <div>
            <label>First Name</label>
            <input type="text" />
            <label>Company Name</label>
            <input type="text" />
            <label>First Name</label>
            <input type="text" />
            <label>Street Address</label>
            <input type="text" />
            <label>Apartment floor etc(optional)</label>
            <input type="text" />
            <label>Town/city</label>
            <input type="text" />
            <label>Phone Number</label>
            <input type="text" />
            <label>Email Address</label>
            <input type="text" />
          </div>
          <div>
            <input type="checkbox" />
            <h6>Save this information for faster check-out next time</h6>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Checkout;
