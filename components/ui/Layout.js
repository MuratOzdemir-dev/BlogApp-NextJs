import { useContext } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollButton from "./ScrollButton";
import { ThemeContext } from "../../context/themeContext";

const Layout = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.darkMode ? "dark bg-[#1a1b1a]" : null}>
      <Header />
      <main>{props.children}</main>
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Layout;
