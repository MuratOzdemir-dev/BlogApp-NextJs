import Image from "next/image";
import PostSummary from "../ui/PostSummary";

const PostItem = ({ post }) => {
  // Link olucak
  return (
    <li className="border border-[#e6e6e6] cursor-pointer">
      <Image src={post.imageSrc} width={430} height={300} layout="responsive" />
      <div className="px-4 mt-6">
        <PostSummary
          category={post.category}
          createdAt={post.createdAt}
          commentCount={post.commentCount}
          dark
        />
      </div>
      <h3 className="px-4 mb-4 line-clamp-2">{post.title}</h3>
    </li>
  );
};

export default PostItem;
