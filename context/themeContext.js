import { createContext, useState } from "react";

export const ThemeContext = createContext({
  darkMode: false,
  changeTheme: () => {},
});

const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
