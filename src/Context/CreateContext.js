import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "./Data";
import { Wishlist2 } from "../Data/WishlistData2";
// import { manageCart, allCart, addToCart } from "../Api";
import { toast } from "react-toastify";
// import { DataContext } from "./Data";

const ThemeContext = React.createContext();

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState(null);
  const [productTotal, setProductTotal] = useState(0);
  const [flashsales, setFlashsales] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [newCart, setNewCart] = useState([]);

  // const getProduct = useCallback(async () => {
  //   const data = await allCart();
  //   setProduct(data);
  // }, []);

  // const cartHandler = async () => {
  //   const url = `http://localhost:3004/products`;
  //   try {
  //       await axios.get(url)
  //   } catch (err) {
  //     console.log(err.message)
  //   }
  // }

  const addToCart = async ({
    id,
    title,
    num,
    img,
    price,
    actualPrice,
    left,
  }) => {
    const url = `http://localhost:3004/cart`;
    try {
      const { data } = await axios.post(url, {
        id,
        title,
        img,
        price,
        actualPrice,
        left,
      });
      toast.success("Product added to cart");
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const getnewCart = useCallback(async () => {
    const url = `http://localhost:3004/cart`;
    const { data } = await axios.get(url);
    console.log(data, "flashsales");
    try {
      setNewCart(data);
      console.log(data, "flashsales");
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getProduct = async () => {
    const url = `http://localhost:3004/cart`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log(error, "error");
      toast.error(error);
    }
  };

  const getCartTotal = useCallback(async () => {
    const data = await getProduct();
    setProductTotal(data.length);
  }, []);

  // const getCartTotal = useCallback(async () => {
  //   const url = `http://localhost:3004/cart`;
  //   const { data } = await axios.get(url);
  //   console.log(data, "cart");
  //   try {
  //     setProductTotal(data.length);
  //     console.log(data, "cart");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

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
    getnewCart();
  }, [getFlashsales, getProductsData, getnewCart]);

  console.log(productsData);

  let dataStorage = {
    DataContext: DataContext,
    Wishlist2: Wishlist2,
    setProductTotal,
    // allCart: allCart,
    getCartTotal,
    getProduct: getProduct,
    productTotal,
    product,
    setProduct,
    addToCart: addToCart,
    user,
    newCart,
    setNewCart,
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
