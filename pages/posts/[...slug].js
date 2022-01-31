import { useRouter } from "next/router";
import Head from "next/head";
import PropTypes from "prop-types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Markdown from "../../components/Markdown";

const PostDetailPage = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p className="m-4 text-center">Yükleniyor...</p>;
  }

  return (
    <>
      <Head>
        <title>{post.data.title}</title>
        <meta name="description" content="Benimle iletişime geçebilirsiniz." />
      </Head>

      <Markdown content={post.content} />
    </>
  );
};

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    data: PropTypes.shape({
      slug: PropTypes.string,
      createdAt: PropTypes.string,
      category: PropTypes.string,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
    content: PropTypes.string,
  }).isRequired,
};

PostDetailPage.defaultProps = {
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
