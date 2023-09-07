import { createContext, useEffect, useState } from "react";
import { ThemeContext } from "./GlobalContext";
import axios from "axios";
const Wrap = ({ children }) => {
  const [count, setCount] = useState(0);
  const [storeApi, setStoreApi] = useState([]);
  const getApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    try {
      const { data } = await axios.get(url);
      setStoreApi(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  const addCount = (num) => {
    return num.reduce((addup, current) => addup + current, 0);
  };

  const storage = {
    count,
    setCount,
    addCount: addCount,
  };
  return (
    <ThemeContext.Provider value={storage}>{children}</ThemeContext.Provider>
  );
};
export { Wrap };
