import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Categories from "../../components/posts/Categories";
import PostList from "../../components/posts/PostList";
import Profile from "../../components/ui/Profile";
// import { data } from "../../dummyPosts";

const AllPostsPage = (props) => {
  const { data } = props;
  return (
    <section className="container px-4 mx-auto lg:grid lg:grid-cols-12 lg:gap-4 xl:gap-8">
      <div className="lg:col-span-9 xl:col-span-10">
        <PostList posts={data} />
      </div>
      {/* Sidarbar */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-center lg:col-span-3 xl:col-span-2 lg:gap-8">
        <Profile />
        <Categories posts={data} />
      </aside>
    </section>
  );
};

export const getStaticProps = () => {
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
    return allPosts;
    // return allPosts.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
  };
  const data = getAllPost();
  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};

export default AllPostsPage;
