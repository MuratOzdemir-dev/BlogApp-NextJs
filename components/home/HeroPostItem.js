import Image from "next/image";
import PostSummary from "../ui/PostSummary";

const HeroPostItem = ({ post }) => {
  return (
    <div className="relative drop-shadow-md">
      <Image src={post.imageSrc} width={430} height={430} layout="responsive" />
      <div className="absolute right-0 text-white -translate-y-1/2 left-2 lg:left-4 top-1/2">
        <PostSummary
          category={post.category}
          createdAt={post.createdAt}
          commentCount={post.commentCount}
        />
        <h3 className="text-xl lg:text-2xl line-clamp-2">{post.title}</h3>
      </div>
    </div>
  );
};

export default HeroPostItem;
