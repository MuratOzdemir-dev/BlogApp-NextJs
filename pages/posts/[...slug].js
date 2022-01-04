import { useRouter } from "next/router";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";

const PostDetailPage = ({ post }) => {
  // create router.isFallback div
  const router = useRouter();
  if (router.isFallback) {
    return <p className="m-4 text-center">Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8 post">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export const getStaticPaths = (props) => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = (context) => {
  const { params } = context;
  const postDirectory = path.join(process.cwd(), "data");

  const filePath = path.join(postDirectory, params.slug[0] + ".md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const item = matter(fileContent);
  const data = {
    data: item.data,
    content: item.content,
  };
  return {
    props: {
      post: data,
    },
    revalidate: 3600,
  };
};

export default PostDetailPage;
