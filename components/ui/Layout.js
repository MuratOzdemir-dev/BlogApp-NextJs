import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollButton from "./ScrollButton";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
      <ScrollButton />
    </>
  );
};

export default Layout;
