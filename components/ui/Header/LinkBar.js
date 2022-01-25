import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faHackerrank,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../context/themeContext";

const LinkBar = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="px-2 py-4 bg-black font-josefin md:fixed md:w-full md:top-0 md:z-20">
      {/* Siyah background*/}
      <article className="container flex items-center justify-center px-4 mx-auto md:justify-between min-h-[32px]">
        <section className="flex gap-3">
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
        </section>
        <div
          className="absolute flex items-center w-5 cursor-pointer right-8 md:static"
          onClick={theme.changeTheme}
        >
          {theme.darkMode ? (
            <FontAwesomeIcon
              icon={faSun}
              size="lg"
              className="text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white "
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              size="lg"
              className="text-gray-400 transition-colors duration-300 cursor-pointer hover:text-white "
            />
          )}
        </div>
      </article>
    </div>
  );
};

export default LinkBar;
