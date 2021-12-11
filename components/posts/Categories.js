import CategoryItem from "./CategoryItem";
import { categories } from "../../dummyPosts";

const Categories = () => {
  return (
    <div>
      <h3 className="pb-6 mb-2 text-gray-600 border-b-2">Categories</h3>
      <ul className="flex flex-col divide-y-2"></ul>
    </div>
  );
};

export default Categories;
