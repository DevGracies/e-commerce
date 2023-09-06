import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NestedRouting() {
  return (
    <div>
      <div className="m-16">
        <NavLink to="Search">
          <button className=" ml-8 bg-blue-500 text-white rounded">
            Search
          </button>
        </NavLink>
        <NavLink to="List">
          <button className=" ml-8 bg-blue-500 text-white rounded">List</button>
        </NavLink>
        <NavLink to="Add">
          <button className=" ml-8 bg-blue-500 text-white rounded">Add</button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default NestedRouting;
