import Image from "next/image";
import PostSummary from "../ui/PostSummary";

const CarouselItem = ({ item }) => {
  return (
    // Link olucak
    <div className="max-h-[540px] relative text-white cursor-pointer">
      <Image
        src={item.imageSrc}
        width={768}
        height={540}
        layout="responsive"
        alt={item.title}
      />
      <div className="absolute text-left left-2 md:left-16 pr-4 md:p-0 top-1/2 md:max-w-[50%] lg:max-w-[33%] -translate-y-1/2">
        {/* Category, Date, CommentCount */}
        <PostSummary
          category={item.category}
          createdAt={item.createdAt}
          commentCount={item.commentCount}
        />
        {/* Title */}
        <h2 className="mb-4 text-xl font-normal md:text-3xl line-clamp-2">
          {item.title}
        </h2>
        <p className="hidden font-light md:line-clamp-2 lg:line-clamp-3 md:block">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
