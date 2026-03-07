import {  createContext, useContext } from "react";
import { colorsSet } from "../constants/colors";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark" ? true : false;
  const colors = colorsSet[scheme] ?? colors.dark;

  return (
    <ThemeContext.Provider value={{ colors, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
