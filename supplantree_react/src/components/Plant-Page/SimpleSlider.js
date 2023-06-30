import React, {Component} from 'react';
import Slider from "react-slick";
import TreeCard from "./TreeCard"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {foundTrees} from "./ResultCarousel"

 const SimpleSlider = ({foundTrees}) => {
    render(foundTrees) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <div>
        <Slider {...settings}>
          <h2>Found Trees:</h2>
            {foundTrees.map((tree) => (
              <ul>
                <li><TreeCard tree={tree}/></li>
              </ul>
            ))}
        </Slider>
      </div>
    );
  };
  };

export default SimpleSlider