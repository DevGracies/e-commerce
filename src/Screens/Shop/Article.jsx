import React from "react";

function Article({ item }) {
  const { name, gmail, password } = item;
  return (
    <div>
      {name}
      <h1>{gmail}</h1>
      <p>{password}</p>
    </div>
  );
}

export default Article;
