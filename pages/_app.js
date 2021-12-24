import "tailwindcss/tailwind.css";
import "../public/post.css";
import Layout from "../components/ui/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
