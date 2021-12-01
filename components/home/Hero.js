import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import CarouselItem from "./CarouselItem";

const Hero = ({ posts }) => {
  return (
    <div className="container px-4 mx-auto">
      <Carousel
        autoFocus
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
        interval={5000}
      >
        {posts.map((item) => (
          <CarouselItem item={item} key={item.postId} />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
