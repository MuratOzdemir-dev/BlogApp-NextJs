import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostSummary = ({ category, createdAt, commentCount, dark }) => {
  return (
    <div className={`mb-6 divide-x-2 ${dark && "text-[#b4b4b4]"}`}>
      <span className="px-2 py-1 mr-4 text-sm font-light text-white bg-blue-600 rounded">
        {category}
      </span>
      {/* <time className="pl-4 mr-4 text-sm font-light ">
        {createdAt.toLocaleString("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time> */}
      <span className="pl-4 text-sm ">
        <FontAwesomeIcon icon={faComments} />
        <span className="ml-2 font-light">{commentCount}</span>
      </span>
    </div>
  );
};

export default PostSummary;
