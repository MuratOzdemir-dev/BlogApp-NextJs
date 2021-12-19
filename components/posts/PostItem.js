import Image from "next/image";
import PostSummary from "../ui/PostSummary";

const PostItem = ({ post }) => {
  // Link olucak
  return (
    <li className="border border-[#e6e6e6] cursor-pointer">
      <Image
        src={post.data.image}
        width={430}
        height={300}
        layout="responsive"
      />
      <div className="px-4 mt-6">
        <PostSummary
          category={post.data.category}
          createdAt={post.data.createdAt}
          commentCount={post.data.commentCount}
          dark
        />
      </div>
      <h3 className="px-4 mb-4 line-clamp-2">{post.data.title}</h3>
    </li>
  );
};

export default PostItem;
