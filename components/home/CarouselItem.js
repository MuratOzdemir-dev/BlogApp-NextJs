import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CarouselItem = ({ item }) => {
  return (
    // Link olucak
    <div className="max-h-[540px] relative text-white cursor-pointer">
      <img src={item.imageSrc} />
      <div className="absolute text-left left-2 md:left-16 pr-4 md:p-0 top-1/2 md:max-w-[50%] lg:max-w-[33%] -translate-y-1/2">
        {/* Category, Date, Comments */}
        <div className="mb-6 divide-x-2">
          <span className="px-2 py-1 mr-4 text-sm font-light bg-blue-600 rounded">
            {item.category}
          </span>
          <time className="pl-4 mr-4 text-sm font-light ">
            {item.createdAt.toLocaleString("tr-TR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span className="pl-4 text-sm ">
            <FontAwesomeIcon icon={faComments} />
            <span className="ml-2 font-light">{item.comments}</span>
          </span>
        </div>
        {/* Title */}
        <h2 className="mb-4 text-xl font-normal md:text-3xl line-clamp-2">
          {item.title}
        </h2>
        <p className="font-light line-clamp-2 md:line-clamp-3">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
