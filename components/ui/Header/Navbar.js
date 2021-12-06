import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const pathname = useRouter().pathname;
  const [showMobilMenu, setShowMobilMenu] = useState(false);

  const toggleShowMobilMenuHanler = () => {
    setShowMobilMenu((prevState) => !prevState);
  };

  return (
    <nav className="relative ">
      <section className="flex items-center justify-center mt-8 md:my-8 xl:my-16">
        <h1 className="text-3xl text-center lg:text-5xl xl:text-6xl">
          Murat Özdemir
        </h1>
        <div
          className="absolute flex flex-col gap-1 cursor-pointer right-4 md:hidden"
          onClick={toggleShowMobilMenuHanler}
        >
          <span className="block w-4 h-1 bg-gray-800 rounded"></span>
          <span className="block w-5 h-1 bg-gray-800 rounded"></span>
          <span className="block w-6 h-1 bg-gray-800 rounded"></span>
        </div>
      </section>
      <ul
        className={`bg-[#E6E6E6] overflow-hidden mb-8 transition-all  md:pb-4 md:bg-transparent md:flex md:h-full md:items-center md:justify-center md:gap-8 md:border-b md:container md:mx-auto ${
          showMobilMenu ? "h-[106px]" : "h-0"
        }`}
      >
        <li>
          <Link href="/">
            <a
              className={`uppercase pl-2 block py-2 text-center hover:text-black/90 transition-all duration-300 text-sm xl:text-base md:p-0 ${
                pathname === "/" ? "text-black/90" : "text-black/60"
              }`}
            >
              Ana Sayfa
            </a>
          </Link>
        </li>

        <li>
          <Link href="/posts">
            <a
              className={`uppercase pl-2 block py-2 text-center hover:text-black/90 transition-all duration-300 text-sm xl:text-base md:p-0 ${
                pathname === "/posts" ? "text-black/90" : "text-black/60"
              }`}
            >
              Postlar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={`uppercase pl-2 block py-2 text-center hover:text-black/90 transition-all duration-300 text-sm xl:text-base md:p-0 ${
                pathname === "/contact" ? "text-black/90" : "text-black/60"
              }`}
            >
              İletişim
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
