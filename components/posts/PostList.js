import PropTypes from "prop-types";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <ul className="grid gap-4 mb-8 lg:grid-cols-2 md:gap-6 xl:gap-12 2xl:gap-16">
      {posts.map((post) => (
        <PostItem key={post.data.slug} post={post} />
      ))}
    </ul>
  );
};

PostList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        slug: PropTypes.string,
        createdAt: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
      }),
      content: PropTypes.string,
    })
  ).isRequired,
};

PostList.defaultProps = {
  data: [],
};

export default PostList;
