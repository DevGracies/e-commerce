import React from "react";

function User() {
  const users = [
    { id: 1, name: "Bolu" },
    { id: 2, name: "love" },
  ];
  return (
    <div>
      nested route
      {users.map(() => {
        <div></div>;
      })}
    </div>
  );
}

export default User;
