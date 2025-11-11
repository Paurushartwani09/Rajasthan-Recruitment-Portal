import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommonSlick = ({ children, slidesToShow = 5, autoplay = true }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992,  settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 576,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="wrapper">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CommonSlick;
