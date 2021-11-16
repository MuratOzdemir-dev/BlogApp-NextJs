import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "../../dummyPosts";
import CarouselItem from "./CarouselItem";

const Hero = () => {
  return (
    <div className="container px-4 mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {data.map((item) => (
          <CarouselItem item={item} key={item.postId} />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
