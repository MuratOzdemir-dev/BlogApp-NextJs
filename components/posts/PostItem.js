import Image from "next/image";

const PostItem = ({ post }) => {
  return (
    <li>
      <Image src={post.imageSrc} width={430} height={300} layout="responsive" />
    </li>
  );
};

export default PostItem;
