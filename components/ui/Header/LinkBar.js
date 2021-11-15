import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faHackerrank,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";

const LinkBar = () => {
  return (
    <div className="py-4 bg-black font-josefin">
      {/* Siyah background*/}
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex gap-3">
          {/* Github İcon */}
          <a href="https://github.com/MuratOzdemir-dev" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white"
            />
          </a>

          {/* HackerRank İcon */}

          <a
            href="https://www.hackerrank.com/mrtozdmr92?hr_r=1"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faHackerrank}
              size="lg"
              className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white "
            />
          </a>

          {/* Linkedin İcon */}

          <a
            href="https://www.linkedin.com/in/murat-%C3%B6zdemir-639577200/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white "
            />
          </a>

          {/* Instagram İcon */}

          <a href="https://www.instagram.com/mrt0zdemir/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white "
            />
          </a>

          {/* Mail İcon */}

          <a href="mailto:mrtozdmr92@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white "
            />
          </a>
        </div>
        <div className="flex items-center pr-2 text-white bg-gray-800 rounded focus-within:bg-gray-700">
          <input
            type="text"
            className="p-2 text-sm bg-transparent outline-none "
            placeholder="Arama"
          />
          <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default LinkBar;
