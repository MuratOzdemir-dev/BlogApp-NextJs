import PropTypes from "prop-types";
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

HeroPosts.propTypes = {
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

HeroPosts.defaultProps = {
  data: [],
};

export default HeroPosts;
