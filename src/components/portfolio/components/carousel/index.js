import React from 'react'
import { Container } from './styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function carousel(props) {
  return (
    <Carousel
      additionalTransfrom={10}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
     {props.children}
    </Carousel>
  );
};

export default carousel;
