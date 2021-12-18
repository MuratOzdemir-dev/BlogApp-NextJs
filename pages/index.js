import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Hero from "../components/home/Hero";
import HeroPosts from "../components/home/HeroPosts";
// import { data } from "../dummyPosts";

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
    <section className="container mx-auto">
      <Hero posts={carouselItems} />
      <h2 className="pb-4 my-8 text-2xl text-center uppercase border-b md:col-span-2 lg:col-span-3">
        Son Postlar
      </h2>

      <HeroPosts posts={posts} />
    </section>
  );
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

    return allPosts.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
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
