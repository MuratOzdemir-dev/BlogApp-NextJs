import PostList from "../../components/posts/PostList";
import { data } from "../../dummyPosts";

const AllPostsPage = () => {
  return (
    <section className="container px-4 mx-auto">
      <PostList posts={data} />
    </section>
  );
};

export default AllPostsPage;
