import HeroPostItem from "./HeroPostItem";

const HeroPosts = ({ posts }) => {
  return (
    <div className="grid gap-4 my-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <HeroPostItem post={post} key={post.postId} />
      ))}
    </div>
  );
};

export default HeroPosts;
