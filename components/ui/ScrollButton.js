import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ScrollButton = () => {
  const buttonRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none reverse none",
      },
      opacity: 1,
      duration: 0.5,
      display: "block",
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={buttonRef}
      onClick={scrollTop}
      className="fixed z-20 hidden w-6 h-6 bg-violet-600 opacity-0 cursor-pointer scrollButton bottom-12 right-12 [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]"
    ></div>
  );
};

export default ScrollButton;
