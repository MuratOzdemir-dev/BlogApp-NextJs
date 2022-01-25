import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import { categories } from "../../helpers/post-util";

const Categories = ({ posts }) => {
  const listOfCategories = categories(posts);
  return (
    <div>
      <h3 className="pb-6 mb-2 text-gray-600 border-b-2 dark:text-gray-300">
        Categories
      </h3>
      <ul className="flex flex-col divide-y-2">
        {Object.keys(listOfCategories).map((item, index) => (
          <CategoryItem
            key={index}
            category={item}
            count={listOfCategories[item]}
          />
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        slug: PropTypes.string,
        createdAt: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
      }),
      content: PropTypes.string,
    })
  ).isRequired,
};

Categories.defaultProps = {
  data: [],
};

export default Categories;
