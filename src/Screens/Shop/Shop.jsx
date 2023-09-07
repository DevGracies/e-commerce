import { useEffect, useState } from "react";
import React from "react";
import Article from "./Article";
import axios from "axios";

function Shop({ Datacontext }) {
  const [storeApi, setStoreApi] = useState([]);
  const getApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setStoreApi(data.slice(0, 20));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      {/* {Datacontext && Datacontext > 0 ? (
        Datacontext.map((item) => <Article key={item.id} item={item} />)
      ) : (
        <h2>No Data</h2>
      )} */}
      <div>
        {storeApi.map((photo) => {
          return (
            <div key={photo.id}>
              <p>{photo.id}</p>
              <h2>{photo.title}</h2>
              <img src={photo.url} alt={photo.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
