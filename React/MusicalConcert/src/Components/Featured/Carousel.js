import React from "react";
import Slider from "react-slick";

import slide_one from "../../Resources/images/slide_two.jpg";
import slide_two from "../../Resources/images/slide_one.jpg";
import slide_three from "../../Resources/images/slide_three.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };
  return (
    <div>
      <div
        className="carrousel_wrapper"
        style={{
          height: `$(window.innerHeight)px`,
          overflow: "hidden"
        }}
      >
        <Slider {...settings}>
          <div>
            <div
              className="carrousel_image"
              style={{
                background: `linear-gradient(to right bottom, rgba(51, 0, 0,0.8), rgba(51, 0, 0,0.5)), url(${slide_one})`,
                height: `${window.innerHeight}px`
              }}
            />
          </div>
          <div>
            <div
              className="carrousel_image"
              style={{
                background: `url(${slide_two})`,
                height: `${window.innerHeight}px`
              }}
            />
          </div>
          <div>
            <div
              className="carrousel_image"
              style={{
                background: `url(${slide_three})`,
                height: `${window.innerHeight}px`
              }}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
