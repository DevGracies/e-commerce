import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "./Data";
import { Wishlist2 } from "../component/Data/WishlistData2";

const ThemeContext = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(1);
  const [flashsales, setFlashsales] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const getProduct = useCallback(async () => {
    const url = `http://localhost:3004/products`;
    try {
      const { data } = await axios.get(url);
      setProduct(data);
      console.log(data, "momo");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const increaseCount =  ()=> {
  setIsLoading(isLoading + 1)
  }
  
  const getFlashsales = useCallback(async () => {
    const url = `http://localhost:3004/flashsales`;
    const { data } = await axios.get(url);
    console.log(data, "flashsales");
    try {
      setFlashsales(data);
      console.log(data, "flashsales");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getProductsData = useCallback(async () => {
    const url = `http://localhost:3004/ProductsData`;
    const { data } = await axios.get(url);
    try {
      setProductsData(data);
      console.log(data, "productsData");
      console.log("productsData");
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getProductsData();
    getFlashsales();
    getProduct();
  }, [getFlashsales, getProductsData, getProduct]);

  console.log(productsData);

  let dataStorage = {
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
    flashsales,
    setFlashsales,
    productsData: productsData,
    setProductsData,
  };

  return (
    <ThemeContext.Provider value={dataStorage}>
      {children}
    </ThemeContext.Provider>
  );
};

export { Provider, ThemeContext };
// useEffect(() => {
//   axios
//     .get("http://localhost:3004/posts")
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// }, []);
//
// const getFlashsales = axios
//   .get(`http://localhost:3004/flashsales`)
//   .then((resp) => setFlashsales(resp.data))
//   .catch((err) => err);
