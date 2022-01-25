import PropTypes from "prop-types";
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
          <CarouselItem item={item.data} key={item.data.slug} />
        ))}
      </Carousel>
    </div>
  );
};

Hero.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        slug: PropTypes.string,
        createdAt: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
      }),
      content: PropTypes.string,
    })
  ).isRequired,
};

Hero.defaultProps = {
  data: [],
};

export default Hero;
