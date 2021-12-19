import HeroPostItem from "./HeroPostItem";

const HeroPosts = ({ posts }) => {
  return (
    <div className="container grid gap-4 px-4 mx-auto mt-8 mb-32 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <HeroPostItem post={post} key={post.data.slug} />
      ))}
    </div>
  );
};

export default HeroPosts;
