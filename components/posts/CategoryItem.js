import PropTypes from "prop-types";

const CategoryItem = ({ category, count }) => {
  return (
    <li className="flex justify-between py-4">
      <a href="#" className="text-violet-600 hover:text-violet-500">
        {category}
      </a>
      <span className="text-gray-300">({count})</span>
    </li>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

CategoryItem.defaultProps = {
  category: "Any",
  count: 0,
};

export default CategoryItem;
