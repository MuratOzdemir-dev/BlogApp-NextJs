import { useRouter } from "next/router";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

const PostDetailPage = ({ post }) => {
  // create router.isFallback div
  const router = useRouter();
  if (router.isFallback) {
    return <p className="m-4 text-center">Yükleniyor...</p>;
  }
  const costumRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <img
            src={`${image.properties.src}`}
            alt={`${image.properties.alt}`}
          />
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter style={dracula} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  const costumRenderers = {
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <img
            src={`${image.properties.src}`}
            alt={`${image.properties.alt}`}
          />
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter style={dracula} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <>
      <Head>
        <title>{post.data.title}</title>
        <meta name="description" content="Benimle iletişime geçebilirsiniz." />
      </Head>
      <div className="mx-4 my-8 prose md:mx-auto prose-headings:text-violet-600 prose-slate prose-h1:text-slate-700 prose-pre:bg-violet-600 prose-img:mx-auto prose-img:rounded prose-h1:text-center prose-h1:italic prose-p:indent-6">
        <ReactMarkdown components={costumRenderers}>
          {post.content}
        </ReactMarkdown>
      </div>
    </>
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
