import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data } from "../../dummyPosts";

import CarouselItem from "./CarouselItem";
import HeroPosts from "./HeroPosts";

const Hero = () => {
  let carouselItems;
  let posts;
  if (data.length > 3) {
    carouselItems = data.slice(-3);
    posts = data.slice(0, 3);
  } else {
    carouselItems = data;
    posts = data;
  }
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
        {carouselItems.map((item) => (
          <CarouselItem item={item} key={item.postId} />
        ))}
      </Carousel>
      <HeroPosts posts={posts} />
    </div>
  );
};

export default Hero;
