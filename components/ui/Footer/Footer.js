import FooterLinks from "./FooterLinks";
import Profile from "../Profile";

const Footer = () => {
  return (
    <footer className="px-4 py-16 bg-black md:py-24 ">
      <div className="container grid gap-8 mx-auto md:grid-cols-2">
        <Profile dark />
        <FooterLinks />

        <p className="mt-4 text-center md:mt-12 text-white/60 md:col-span-full">
          Copyright ©2021 All rights reserved | This site is made with ❤️ by
          <span className="text-lg text-red-600 font-smooch">
            {" "}
            Murat Özdemir
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
