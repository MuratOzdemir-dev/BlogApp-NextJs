import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import PostSummary from "../ui/PostSummary";

const HeroPostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.data.slug}`}>
      <div className="relative cursor-pointer drop-shadow-md">
        <Image
          src={post.data.image}
          width={430}
          height={430}
          layout="responsive"
          objectFit="cover"
        />
        <div className="absolute right-0 text-white -translate-y-1/2 left-2 lg:left-4 top-16">
          <PostSummary
            category={post.data.category}
            createdAt={post.data.createdAt}
            commentCount={post.data.commentCount}
            dark={false}
          />
          <h3 className="text-xl lg:text-2xl line-clamp-2">
            {post.data.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

HeroPostItem.propTypes = {
  post: PropTypes.shape({
    data: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
    content: PropTypes.string,
  }).isRequired,
};

HeroPostItem.defaultProps = {
  post: {
    data: {
      slug: "Fallback",
      createdAt: "01/01/2022",
      category: "Fallback",
      title: "Fallback",
      image: "Fallback",
    },
    content: "",
  },
};

export default HeroPostItem;
