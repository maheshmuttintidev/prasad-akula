import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from "../assets/image_1.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const GalleryCarousel = () => {
  return (
    <div className="h-screen">
      <img src={Image1} alt="image_1" className="object-contain h-full w-full" />
    </div>
  );
};
