import { createContext, useEffect, useState } from "react";
import { ThemeContext } from "./GlobalContext";
import axios from "axios";
const Wrap = ({ children }) => {
  const [count, setCount] = useState(0);

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
