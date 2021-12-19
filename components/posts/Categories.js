import CategoryItem from "./CategoryItem";
import { categories } from "../../helpers/post-util";

const Categories = ({ posts }) => {
  const listOfCategories = categories(posts);
  return (
    <div>
      <h3 className="pb-6 mb-2 text-gray-600 border-b-2">Categories</h3>
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

export default Categories;