import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentIndex, setCurrentIndex] = useState(0);
  /* You will need to hanle the click on left and right button */
  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  /* You will need to manage the cases when we are on the last image or first image*/
  const nextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevImage} />
      /* YOu will need to display the current image, not the first one.. */
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="slide"
      />
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextImage}
      />
    </div>
  );
};
