import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "./Data";
import { Wishlist2 } from "../component/Data/WishlistData2";
import { manageCart, allCart, addToCart } from "../Api";
// import { DataContext } from "./Data";

const ThemeContext = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState(null);
  const [productTotal, setProductTotal] = useState(1);
  const [flashsales, setFlashsales] = useState([]);
  const [productsData, setProductsData] = useState([]);

  // const getProduct = useCallback(async () => {
  //   const data = await allCart();
  //   setProduct(data);
  // }, []);

  const getProductTotal = useCallback(async () => {
    const data = await allCart();
    setProductTotal(data.length);
  }, []);

  const getProduct = useCallback(async () => {
    const url = `http://localhost:3004/flashsales`;
    const { data } = await axios.get(url);
    console.log(data, "flashsales");
    try {
      setProduct(data);
      console.log(data, "flashsales");
    } catch (error) {
      console.log(error);
    }
  }, []);

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
    setProductTotal,
    allCart: allCart,
    productTotal,
    product,
    setProduct,
    addToCart: addToCart,
    user,
    setUser,
    isLoading,
    setIsLoading,
    flashsales,
    setFlashsales,
    getProductTotal,
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
