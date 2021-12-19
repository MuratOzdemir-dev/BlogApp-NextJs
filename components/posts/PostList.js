import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <ul className="grid gap-4 mb-8 lg:grid-cols-2 xl:gap-8">
      {posts.map((post) => (
        <PostItem key={post.data.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
