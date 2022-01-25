import "tailwindcss/tailwind.css";
import Layout from "../components/ui/Layout";
import ThemeContextProvider from "../context/themeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;
