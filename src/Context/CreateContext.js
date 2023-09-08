import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "./Data";
import { Provider } from "../GlobalContext";
import { Wishlist2 } from "../component/Data/WishlistData2";

function CreateContext({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  const getProduct = useCallback(async () => {
    const url = `http://localhost:3004/posts`;
    const config = {
      headers: {
        "Context-Type": "Application/json",
      },
    };
    try {
      const { data } = await axios.get(url, config);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3004/posts")
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // }, []);
  // setProduct(response.data.product)

  // const s) => {
  //   sum();
  // }, []);

  let dataStorarge = {
    // sum: sum,
    DataContext: DataContext,
    Wishlist2: Wishlist2,
    count,
    setCount,
    product,
    setProduct,
    user,
    setUser,
    isLoading,
    setIsLoading,
  };

  return (
    <div>
      <Provider value={dataStorarge}>{children} </Provider>
    </div>
  );
}

export default CreateContext;
