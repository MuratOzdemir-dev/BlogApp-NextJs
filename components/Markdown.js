import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

const Markdown = ({ content }) => {
  if (!content) {
    content = "Content not found!";
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

  return (
    <div className="mx-4 my-8 prose md:mx-auto prose-headings:text-violet-600 prose-slate prose-pre:bg-violet-600 prose-img:mx-auto prose-img:rounded prose-h1:text-center prose-h1:italic prose-p:indent-6 dark:prose-invert prose-violet prose-p:selection:text-violet-500 prose-h1:text-slate-800 prose-h1:dark:text-slate-200 prose-p:text-justify">
      <ReactMarkdown components={costumRenderers}>{content}</ReactMarkdown>
    </div>
  );
};

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

Markdown.defaultProps = {
  content: "Content not found",
};

export default Markdown;
