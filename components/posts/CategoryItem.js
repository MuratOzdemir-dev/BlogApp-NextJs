const CategoryItem = ({ category, count }) => {
  return (
    <li className="flex justify-between py-4">
      <a href="#" className="text-blue-400">
        {category}
      </a>
      <span className="text-gray-300">({count})</span>
    </li>
  );
};

export default CategoryItem;
