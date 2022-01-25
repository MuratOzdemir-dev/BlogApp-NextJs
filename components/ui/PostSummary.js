import PropTypes from "prop-types";

const PostSummary = ({ category, createdAt, dark }) => {
  return (
    <div className={`mb-6 divide-x-2 ${dark && "text-[#b4b4b4]"}`}>
      <span className="px-2 py-1 mr-4 text-sm font-light text-white rounded bg-violet-600">
        {category}
      </span>
      <time
        className={`pl-4 mr-4 text-sm text-gray-400 dark:text-gray-400 ${
          dark && "text-gray-700"
        }`}
      >
        {createdAt.toLocaleString("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
    </div>
  );
};

PostSummary.propTypes = {
  category: PropTypes.string,
  createdAt: PropTypes.string,
  dark: PropTypes.bool,
};

PostSummary.defaultProps = {
  category: "Development",
  createdAt: "01/01/2022",
  dark: false,
};

export default PostSummary;
