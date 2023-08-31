import { createContext } from "react";

const ThemeContext = createContext();
const Provider = ThemeContext.Provider;
const Consumer = ThemeContext.Consumer;

export { ThemeContext, Provider, Consumer };
