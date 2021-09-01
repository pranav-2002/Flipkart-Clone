import React from "react";
import "./Banner.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="banner">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        showArrows={true}
        interval={3500}
      >
        <img
          src="https://rukminim1.flixcart.com/flap/3376/560/image/120e2eb1a9516ffa.jpeg?q=50"
          alt="banner"
          loading="lazy"
        />
        <img
          src="https://rukminim1.flixcart.com/flap/3376/560/image/ad75f59f7f69755a.jpg?q=50"
          alt="banner"
          loading="lazy"
        />
        <img
          src="https://rukminim1.flixcart.com/flap/3376/560/image/946b9beb7858fd31.jpeg?q=50"
          alt="banner"
          loading="lazy"
        />
        <img
          src="https://rukminim1.flixcart.com/flap/3376/560/image/e5f5f83e92ea0778.jpg?q=50"
          alt="banner"
          loading="lazy"
        />
        <img
          src="https://rukminim1.flixcart.com/flap/3376/560/image/a0f90bf38b918bcd.jpg?q=50"
          alt="banner"
          loading="lazy"
        />
        <img
          src="https://rukminim1.flixcart.com/flap/3376/560/image/7529010932d66f48.jpg?q=50"
          alt="banner"
          loading="lazy"
        />
        <img
          src="https://rukminim1.flixcart.com/flap/3376/560/image/fcda07bae6a4bf6c.jpg?q=50"
          alt="banner"
          loading="lazy"
        />
      </Carousel>
    </div>
  );
}

export default Banner;
