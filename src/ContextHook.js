import { createContext } from "react";

const ThemeContext = createContext();

const Wrap = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
export { Wrap };
