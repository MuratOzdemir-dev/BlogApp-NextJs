import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PropTypes from "prop-types";

import Hero from "../components/home/Hero";
import HeroPosts from "../components/home/HeroPosts";

const HomePage = ({ data }) => {
  let carouselItems;
  let posts;
  if (data.length > 3) {
    carouselItems = data.slice(-3);
    posts = data.slice(0, 3);
  } else {
    carouselItems = data;
    posts = data;
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Yazılım ile alakalı güncel yazılar."
        />
        <title>Murat Ozdemir Blog</title>
      </Head>
      <section className="container mx-auto">
        <Hero posts={carouselItems} />
        <h2 className="pb-4 my-8 text-2xl text-center uppercase border-b md:col-span-2 lg:col-span-3 dark:text-slate-200">
          Son Postlar
        </h2>

        <HeroPosts posts={posts} />
      </section>
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        slug: PropTypes.string,
        createdAt: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
      }),
      content: PropTypes.string,
    })
  ).isRequired,
};

HomePage.defaultProps = {
  data: [],
};

export const getStaticProps = async () => {
  const postDirectory = path.join(process.cwd(), "data");

  const getPostData = (fileName) => {
    const filePath = path.join(postDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const item = matter(fileContent);
    return {
      data: item.data,
      content: item.content,
    };
  };

  const getAllPost = () => {
    const postFiles = fs.readdirSync(postDirectory);

    const allPosts = postFiles.map((post) => {
      return getPostData(post);
    });
    // return allPosts;
    return allPosts.sort((a, b) =>
      a.data.createdAt > b.data.createdAt ? -1 : 1
    );
  };

  const data = getAllPost();
  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};

export default HomePage;
