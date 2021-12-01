import Link from "next/link";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faHackerrank,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FooterLinks = () => {
  const pathname = useRouter().pathname;
  return (
    <div className="grid items-center max-w-screen-sm grid-cols-2 px-4 divide-x-2">
      {/* Social Links */}
      <div className="container flex flex-col mx-auto">
        {/* Github İcon */}

        <a
          href="https://github.com/MuratOzdemir-dev"
          target="_blank"
          className="inline gap-2 my-2 text-gray-400 transition-colors duration-300 group hover:text-white"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            className="w-5 mr-2 text-gray-400 transition-colors duration-300 cursor-pointer group-hover:text-white"
          />
          Github
        </a>
        <a
          href="https://www.hackerrank.com/mrtozdmr92?hr_r=1"
          target="_blank"
          className="flex gap-2 my-2 text-gray-400 transition-colors duration-300 group hover:text-white"
        >
          <FontAwesomeIcon
            icon={faHackerrank}
            size="lg"
            className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer group-hover:text-white"
          />
          HackerRank
        </a>

        <a
          href="https://www.linkedin.com/in/murat-%C3%B6zdemir-639577200/"
          target="_blank"
          className="flex gap-2 my-2 text-gray-400 transition-colors duration-300 group hover:text-white"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer group-hover:text-white"
          />
          Linkedin
        </a>

        <a
          href="https://www.instagram.com/mrt0zdemir/"
          target="_blank"
          className="flex gap-2 my-2 text-gray-400 transition-colors duration-300 group hover:text-white"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer group-hover:text-white"
          />
          Instagram
        </a>
        <a
          href="mailto:mrtozdmr92@gmail.com"
          className="flex gap-2 my-2 text-gray-400 transition-colors duration-300 group hover:text-white"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            className="w-5 text-gray-400 transition-colors duration-300 cursor-pointer group-hover:text-white"
          />
          Mail
        </a>
      </div>
      {/* Social Links */}
      {/* NavLinks */}
      <ul className="flex flex-col items-end gap-2">
        <li>
          <Link href="/">
            <a
              className={`uppercase pl-2 py-2 text-center hover:text-white/90 transition-all duration-300 text-sm xl:text-base md:p-0 ${
                pathname === "/" ? "text-white/90" : "text-white/60"
              }`}
            >
              Ana Sayfa
            </a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a
              className={`uppercase pl-2 text-center hover:text-white/90 transition-all duration-300 text-sm xl:text-base md:p-0 ${
                pathname === "/contact" ? "text-white/90" : "text-white/60"
              }`}
            >
              İletişim
            </a>
          </Link>
        </li>

        <li>
          <Link href="/posts">
            <a
              className={`uppercase pl-2 py-2 text-center hover:text-white/90 transition-all duration-300 text-sm xl:text-base md:p-0 ${
                pathname === "/posts" ? "text-white/90" : "text-white/60"
              }`}
            >
              Postlar
            </a>
          </Link>
        </li>
      </ul>
      {/* Nav Links */}
    </div>
  );
};

export default FooterLinks;
