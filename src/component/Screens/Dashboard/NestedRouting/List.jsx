import React from "react";

function List() {
  return (
    <div>
      <div>
        <ul className="xl:flex xl:justify-center grid lg:grid-cols-3 sm:grid-cols-2">
          <li className="bg-black text-white rounded p-5 m-5 text-bold w-60">
            <h3>Name: </h3>
            <h3>Email:</h3>
            <h3>Password: </h3>
          </li>
          <li className="bg-black text-white rounded p-5 m-5 text-bold w-60">
            <h3>Name: </h3>
            <h3>Email:</h3>
            <h3>Password: </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
