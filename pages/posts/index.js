import Categories from "../../components/posts/Categories";
import PostList from "../../components/posts/PostList";
import Profile from "../../components/ui/Profile";
import { data } from "../../dummyPosts";

const AllPostsPage = () => {
  return (
    <section className="container px-4 mx-auto lg:grid lg:grid-cols-12 lg:gap-4 xl:gap-8">
      <div className="lg:col-span-9 xl:col-span-10">
        <PostList posts={data} />
      </div>
      {/* Sidarbar */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-center lg:col-span-3 xl:col-span-2 lg:gap-8">
        <Profile />
        <Categories />
      </aside>
    </section>
  );
};

export default AllPostsPage;
