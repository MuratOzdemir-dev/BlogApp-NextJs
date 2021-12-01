import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <ul className="grid gap-4 mb-8">
      {posts.map((post) => (
        <PostItem key={post.postId} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
