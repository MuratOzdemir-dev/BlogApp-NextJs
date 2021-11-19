import HeroPostItem from "./HeroPostItem";

const HeroPosts = ({ posts }) => {
  return (
    <div className="grid gap-4 my-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
      <h2 className="pb-4 text-2xl text-center uppercase border-b md:col-span-2 lg:col-span-3">
        Son Postlar
      </h2>
      {posts.map((post) => (
        <HeroPostItem post={post} key={post.postId} />
      ))}
    </div>
  );
};

export default HeroPosts;
