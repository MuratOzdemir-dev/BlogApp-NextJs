import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import PostSummary from "../ui/PostSummary";

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.data.slug}`}>
      <li className="border border-[#e6e6e6] cursor-pointer rounded">
        <Image
          src={post.data.image}
          width={430}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
        <div className="px-4 mt-6">
          <PostSummary
            category={post.data.category}
            createdAt={post.data.createdAt}
            commentCount={post.data.commentCount}
          />
        </div>
        <h3 className="px-4 mb-4 line-clamp-2 dark:text-slate-200">
          {post.data.title}
        </h3>
      </li>
    </Link>
  );
};

PostItem.propTypes = {
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

PostItem.defaultProps = {
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

export default PostItem;
