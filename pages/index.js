import Hero from "../components/home/Hero";
import HeroPosts from "../components/home/HeroPosts";
import { data } from "../dummyPosts";

const HomePage = () => {
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

export default HomePage;
