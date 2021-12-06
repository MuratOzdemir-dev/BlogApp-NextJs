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
      <div className="relative hidden top-1/3 lg:block lg:col-span-3 xl:col-span-2">
        <Profile />
      </div>
    </section>
  );
};

export default AllPostsPage;
